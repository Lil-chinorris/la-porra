#!/bin/bash
# Doble clic para abrir La Porra correctamente (servido por HTTP, no file://)
DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$DIR"
# matar cualquier server previo en 8765
lsof -ti tcp:8765 | xargs kill -9 2>/dev/null
# arrancar servidor en segundo plano
python3 -m http.server 8765 >/dev/null 2>&1 &
sleep 1
open "http://localhost:8765/"
echo "La Porra está corriendo en http://localhost:8765/"
echo "Puedes cerrar esta ventana cuando termines."
