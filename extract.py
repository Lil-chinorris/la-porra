"""
Extrae el bundle autocontenido de "La Porra _offline_ (1) (1).html" a archivos
editables. Funciona contra el formato de bundler de Claude (manifest base64+gzip
+ template con UUIDs).

Uso:
    python3 extract.py <ruta-al-html> <carpeta-destino>
"""
import sys, os, json, base64, gzip, re, mimetypes

MIME_EXT = {
    "text/html": ".html",
    "text/css": ".css",
    "text/javascript": ".js",
    "application/javascript": ".js",
    "application/json": ".json",
    "image/png": ".png",
    "image/jpeg": ".jpg",
    "image/svg+xml": ".svg",
    "image/webp": ".webp",
    "font/woff2": ".woff2",
    "font/woff": ".woff",
    "application/font-woff2": ".woff2",
}

def ext_for(mime: str) -> str:
    if mime in MIME_EXT: return MIME_EXT[mime]
    g = mimetypes.guess_extension(mime or "") or ".bin"
    return g

def find_block(html: str, marker: str) -> str:
    # Encuentra el contenido entre <script type="__bundler/MARKER">...</script>
    pat = re.compile(
        r'<script[^>]*type="__bundler/' + re.escape(marker) + r'"[^>]*>(.*?)</script>',
        re.DOTALL,
    )
    m = pat.search(html)
    if not m:
        raise SystemExit(f"No se encontró el bloque __bundler/{marker}")
    return m.group(1).strip()

def main():
    if len(sys.argv) < 3:
        print(__doc__); sys.exit(1)
    src, out = sys.argv[1], sys.argv[2]
    os.makedirs(out, exist_ok=True)
    assets_dir = os.path.join(out, "assets")
    os.makedirs(assets_dir, exist_ok=True)

    with open(src, "r", encoding="utf-8") as f:
        html = f.read()

    print(f"[+] HTML cargado: {len(html):,} chars")

    manifest_raw = find_block(html, "manifest")
    template_raw = find_block(html, "template")

    manifest = json.loads(manifest_raw)
    template = json.loads(template_raw)  # es un string JSON-encoded
    print(f"[+] Manifest: {len(manifest)} assets")

    # Tabla UUID -> nombre de archivo final
    name_map = {}
    by_mime = {}
    for uuid, entry in manifest.items():
        mime = entry.get("mime", "application/octet-stream")
        by_mime.setdefault(mime, 0)
        by_mime[mime] += 1

        data = base64.b64decode(entry["data"])
        if entry.get("compressed"):
            data = gzip.decompress(data)

        ext = ext_for(mime)
        # Nombre legible: usamos los primeros 8 chars del uuid + ext
        short = uuid.split("-")[0]
        fname = f"{short}{ext}"
        with open(os.path.join(assets_dir, fname), "wb") as f:
            f.write(data)
        name_map[uuid] = f"assets/{fname}"

    print("[+] Tipos MIME encontrados:")
    for k, v in by_mime.items():
        print(f"      {k}: {v}")

    # Sustituir UUIDs en el template por las rutas locales
    rewritten = template
    for uuid, path in name_map.items():
        rewritten = rewritten.replace(uuid, path)

    # Quitar atributos integrity y crossorigin (los hashes ya no encajan)
    rewritten = re.sub(r'\s+integrity="[^"]*"', "", rewritten)
    rewritten = re.sub(r'\s+crossorigin="[^"]*"', "", rewritten)

    with open(os.path.join(out, "index.html"), "w", encoding="utf-8") as f:
        f.write(rewritten)

    # Renombrar a algo legible los babel scripts identificándolos por contenido
    print("[+] Identificando módulos JSX por contenido...")
    rename_jsx(assets_dir, os.path.join(out, "index.html"))

    print(f"[✓] Listo. Proyecto extraído en: {out}")

def rename_jsx(assets_dir: str, index_path: str):
    """Detecta cada .js que en realidad es JSX/Babel y le pone un nombre semántico."""
    with open(index_path, "r", encoding="utf-8") as f:
        index = f.read()

    candidates = []
    for fn in sorted(os.listdir(assets_dir)):
        if not fn.endswith(".js"): continue
        p = os.path.join(assets_dir, fn)
        with open(p, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
        candidates.append((fn, p, content))

    name_for = {}
    for fn, p, c in candidates:
        sem = None
        # Buscar "function ScreenXxx" / "function IOSDevice"
        m = re.search(r'function\s+(Screen[A-Z]\w+|IOSDevice|App)\b', c)
        if m:
            sem = m.group(1)
        else:
            # Heurística: archivo de datos / utilidades
            if "PLAYERS" in c or "RACES" in c or "TEAMS" in c:
                sem = "data"
            elif "react-dom" in c.lower() or "ReactDOM" in c:
                sem = "react-dom"
            elif "React.createElement" in c and "version" in c.lower():
                sem = "react"
            elif "@babel" in c.lower() or "transformScriptTags" in c:
                sem = "babel"
        if sem:
            name_for[fn] = sem

    # Evitar colisiones
    used = {}
    for fn, sem in list(name_for.items()):
        base = sem
        i = 1
        new = f"{base}.jsx" if sem.startswith(("Screen","IOSDevice","App")) or sem == "data" else f"{base}.js"
        while new in used.values():
            i += 1
            new = f"{base}-{i}.jsx" if new.endswith(".jsx") else f"{base}-{i}.js"
        used[fn] = new

    for fn, new in used.items():
        old_path = os.path.join(assets_dir, fn)
        new_path = os.path.join(assets_dir, new)
        os.rename(old_path, new_path)
        index = index.replace(f"assets/{fn}", f"assets/{new}")
        print(f"      {fn}  ->  {new}")

    with open(index_path, "w", encoding="utf-8") as f:
        f.write(index)

if __name__ == "__main__":
    main()
