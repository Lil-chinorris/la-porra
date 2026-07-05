// theme.jsx — Sistema de temas de La Porra (oscuro / claro / orgullo)
//
// window.PALETTE apunta al tema activo. Los componentes lo leen en cada render,
// así que basta con reasignarlo antes de re-renderizar (setTheme lo hace).
// `ov(a)` devuelve el overlay correcto según el tema (blanco sobre oscuro,
// oscuro sobre claro), de modo que las mismas superficies funcionan en todos.

const _TEAMS = (window.PALETTE && window.PALETTE.teams) || {};

// ── Tema OSCURO (base, ya definido en data.jsx como window.PALETTE) ──
const THEME_DARK = window.PALETTE;

// ── Tema CLARO ──
const THEME_LIGHT = {
  name: 'Claro',
  bg: '#EEF1F6', bg2: '#FFFFFF',
  surface: '#FFFFFF', surface2: '#F3F6FA',
  text: '#141C26', muted: '#5B6878', mutedDim: '#98A4B2',
  accent: '#E10600', accent2: '#B8860B',
  success: '#1E9E52', danger: '#D62839',
  ov: (a) => `rgba(20,28,38,${a})`,
  scrim: '238,241,246',
  teams: _TEAMS,
};

// ── Tema ORGULLO (edición especial LGTBQ+) ──
// Bases translúcidas para que el fondo animado (ThemeBackdrop) se transparente.
const THEME_PRIDE = {
  name: 'Orgullo',
  bg: 'rgba(12,8,22,0.56)', bg2: 'rgba(42,12,54,0.40)',
  surface: 'rgba(26,15,40,0.82)', surface2: 'rgba(48,26,68,0.82)',
  text: '#FFFFFF', muted: '#E4D3F2', mutedDim: '#A992C0',
  accent: '#FF2D8E', accent2: '#FFE44D',
  success: '#2BE87E', danger: '#FF4D6D',
  ov: (a) => `rgba(255,255,255,${a})`,
  scrim: '10,6,20',
  teams: _TEAMS,
  // Degradado arcoíris para el título "La Porra"
  heroGradient: 'linear-gradient(92deg,#FF2D8E,#FF8C00,#FFED00,#2BE87E,#21B1FF,#8E2DE2)',
};

const LP_THEMES = { dark: THEME_DARK, light: THEME_LIGHT, pride: THEME_PRIDE };
const LP_THEME_META = [
  { code: 'dark',  label: 'Oscuro',  emoji: '🌙', swatch: 'linear-gradient(135deg,#1F2D3D,#0F1923)' },
  { code: 'light', label: 'Claro',   emoji: '☀️', swatch: 'linear-gradient(135deg,#FFFFFF,#DCE3EC)' },
  { code: 'pride', label: 'Orgullo', emoji: '🏳️‍🌈', swatch: 'linear-gradient(92deg,#FF2D8E,#FF8C00,#FFED00,#2BE87E,#21B1FF,#8E2DE2)' },
];
const LP_THEME_KEY = 'lp-theme';

function getTheme() {
  try { return localStorage.getItem(LP_THEME_KEY) || 'dark'; } catch (e) { return 'dark'; }
}
function setTheme(code) {
  try { localStorage.setItem(LP_THEME_KEY, code); } catch (e) {}
  window.PALETTE = LP_THEMES[code] || LP_THEMES.dark;
  window.dispatchEvent(new CustomEvent('lp-theme-changed', { detail: code }));
}
// Aplicar tema guardado al cargar (antes del primer render)
window.PALETTE = LP_THEMES[getTheme()] || LP_THEMES.dark;

// ── CSS del fondo animado de Orgullo (se inyecta una vez) ──
if (typeof document !== 'undefined' && !document.getElementById('lp-pride-styles')) {
  const st = document.createElement('style');
  st.id = 'lp-pride-styles';
  st.textContent = `
    .lp-pride-bg { position:absolute; inset:0; overflow:hidden; z-index:0; pointer-events:none; }
    .lp-pride-rainbow {
      position:absolute; inset:-50%;
      background: linear-gradient(60deg,#E40303,#FF8C00,#FFED00,#008026,#004CFF,#732982,#FF218C,#21B1FF,#E40303);
      background-size: 400% 400%;
      filter: saturate(1.35) brightness(0.92);
      animation: lpPridePan 20s ease-in-out infinite;
    }
    .lp-pride-blob { position:absolute; width:75%; height:55%; border-radius:50%; filter:blur(64px); mix-blend-mode:screen; opacity:0.9; }
    .lp-pride-blob.b1 { background:radial-gradient(circle,#FF218C,transparent 68%); top:-16%; left:-12%; animation:lpBlobA 17s ease-in-out infinite; }
    .lp-pride-blob.b2 { background:radial-gradient(circle,#21B1FF,transparent 68%); bottom:-22%; right:-16%; animation:lpBlobB 21s ease-in-out infinite; }
    .lp-pride-blob.b3 { background:radial-gradient(circle,#FFD800,transparent 68%); top:28%; right:-22%; animation:lpBlobA 24s ease-in-out infinite reverse; }
    .lp-pride-blob.b4 { background:radial-gradient(circle,#00C853,transparent 68%); bottom:-14%; left:-16%; animation:lpBlobB 19s ease-in-out infinite reverse; }
    .lp-pride-blob.b5 { background:radial-gradient(circle,#8E2DE2,transparent 68%); top:35%; left:20%; animation:lpBlobA 26s ease-in-out infinite; }
    .lp-pride-grain {
      position:absolute; inset:0;
      background: repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0 2px, transparent 2px 8px);
      mix-blend-mode:overlay; opacity:0.35;
    }
    @keyframes lpPridePan { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
    @keyframes lpBlobA { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(13%,11%) scale(1.18)} }
    @keyframes lpBlobB { 0%,100%{transform:translate(0,0) scale(1.06)} 50%{transform:translate(-11%,-9%) scale(0.92)} }
    @media (prefers-reduced-motion: reduce) {
      .lp-pride-rainbow, .lp-pride-blob { animation: none !important; }
    }
    /* Título con degradado animado (tema orgullo) */
    .lp-hero-pride {
      background: linear-gradient(92deg,#FF2D8E,#FF8C00,#FFED00,#2BE87E,#21B1FF,#8E2DE2,#FF2D8E);
      background-size: 250% 100%;
      -webkit-background-clip: text; background-clip: text;
      -webkit-text-fill-color: transparent; color: transparent;
      animation: lpHeroShift 8s linear infinite;
    }
    @keyframes lpHeroShift { 0%{background-position:0% 50%} 100%{background-position:250% 50%} }
  `;
  document.head.appendChild(st);
}

// Fondo animado; sólo se pinta en el tema orgullo.
function ThemeBackdrop({ theme }) {
  if (theme !== 'pride') return null;
  return (
    <div className="lp-pride-bg">
      <div className="lp-pride-rainbow" />
      <div className="lp-pride-blob b1" />
      <div className="lp-pride-blob b2" />
      <div className="lp-pride-blob b3" />
      <div className="lp-pride-blob b4" />
      <div className="lp-pride-blob b5" />
      <div className="lp-pride-grain" />
    </div>
  );
}

// Selector de tema (botón 🎨 + desplegable) para la cabecera de la Home.
function ThemeMenu() {
  const P = window.PALETTE;
  const [open, setOpen] = React.useState(false);
  const current = getTheme();
  return (
    <div style={{ position: 'relative' }}>
      <button onClick={() => setOpen(o => !o)} className="touchable" aria-label="Tema" style={{
        width: 40, height: 38, borderRadius: 10, padding: 0,
        background: P.ov(0.06), border: `1px solid ${P.text}15`, color: P.text,
        fontSize: 17, cursor: 'pointer', fontFamily: 'inherit',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>🎨</button>
      {open && (
        <>
          <div onClick={() => setOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 40 }} />
          <div style={{
            position: 'absolute', top: 'calc(100% + 6px)', left: 0, zIndex: 50,
            background: P.surface2 || P.surface, borderRadius: 12,
            border: `1px solid ${P.text}1A`,
            boxShadow: '0 14px 34px -10px rgba(0,0,0,0.7)',
            padding: 4, minWidth: 172,
          }}>
            {LP_THEME_META.map(th => {
              const active = th.code === current;
              return (
                <button key={th.code} className="touchable"
                  onClick={() => { setTheme(th.code); setOpen(false); }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 9,
                    width: '100%', padding: '8px 10px', borderRadius: 8,
                    background: active ? P.ov(0.10) : 'transparent',
                    border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                    color: P.text, fontSize: 12.5, fontWeight: active ? 800 : 600, textAlign: 'left',
                  }}>
                  <span style={{
                    width: 22, height: 22, borderRadius: 7, flexShrink: 0,
                    background: th.swatch, border: `1px solid ${P.text}22`,
                  }} />
                  <span style={{ flex: 1 }}>{th.emoji} {th.label}</span>
                  {active && <span style={{ fontSize: 11 }}>✓</span>}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

Object.assign(window, {
  LP_THEMES, LP_THEME_META, getTheme, setTheme, ThemeBackdrop, ThemeMenu,
});
