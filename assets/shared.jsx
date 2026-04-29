// shared.jsx — Helpers y componentes compartidos del prototipo La Porra

// ─── UI atoms ──────────────────────────────────────────────────────────────

function DeltaChip({ delta, size = 'md' }) {
  const P = window.PALETTE;
  if (delta === 0) {
    return (
      <div style={{
        fontSize: size === 'sm' ? 9 : 10, fontWeight: 700, color: P.mutedDim,
        opacity: 0.8, letterSpacing: 0.4,
      }}>—</div>
    );
  }
  const up = delta > 0;
  const color = up ? P.success : P.danger;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 1,
      fontSize: size === 'sm' ? 10 : 11, fontWeight: 800, color,
      fontFamily: '"Space Grotesk", system-ui',
    }}>
      <span style={{ fontSize: size === 'sm' ? 8 : 9 }}>{up ? '▲' : '▼'}</span>
      {Math.abs(delta)}
    </div>
  );
}

function LastChip({ last }) {
  const P = window.PALETTE;
  const sign = last > 0 ? '+' : '';
  const color = last > 0 ? P.success : last < 0 ? P.danger : P.muted;
  return (
    <div style={{
      fontSize: 11, fontWeight: 700, color,
      background: `${color}1F`,
      padding: '2px 7px', borderRadius: 6,
      letterSpacing: 0.2, whiteSpace: 'nowrap',
      fontFamily: '"Space Grotesk", system-ui',
    }}>
      {sign}{last}
    </div>
  );
}

function PodiumBadge({ pos, size = 32 }) {
  const cfg = pos === 1
    ? { bg: 'linear-gradient(135deg,#FFD93D,#FFB800)', shadow: '#FFB800' }
    : pos === 2
    ? { bg: 'linear-gradient(135deg,#E8E8F0,#B8B8C4)', shadow: '#8F8FA0' }
    : { bg: 'linear-gradient(135deg,#D88F5A,#A86232)', shadow: '#7A4820' };
  return (
    <div style={{
      width: size, height: size, borderRadius: Math.round(size * 0.32),
      background: cfg.bg,
      boxShadow: `0 3px 10px -2px ${cfg.shadow}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: Math.round(size * 0.47), fontWeight: 900, color: '#1a1a1a',
      fontFamily: '"Space Grotesk", system-ui',
      flexShrink: 0,
    }}>{pos}</div>
  );
}

function TeamAvatar({ team, size = 44, emoji }) {
  const P = window.PALETTE;
  const color = P.teams[team] || P.accent;
  return (
    <div style={{
      width: size, height: size, borderRadius: Math.round(size * 0.28),
      background: `linear-gradient(135deg, ${color}, ${color}AA)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: Math.round(size * 0.5), flexShrink: 0,
      boxShadow: `0 2px 8px -2px ${color}99`,
    }}>{emoji}</div>
  );
}

function BackButton({ onClick }) {
  const P = window.PALETTE;
  return (
    <button onClick={onClick} className="touchable" style={{
      width: 38, height: 38, borderRadius: 12,
      background: 'rgba(255,255,255,0.08)',
      border: `1px solid ${P.text}14`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'pointer', flexShrink: 0, padding: 0,
    }}>
      <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
        <path d="M8 2L2 8l6 6" stroke={P.text} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

// ─── Global styles (inject once) ───────────────────────────────────────────
if (typeof document !== 'undefined' && !document.getElementById('lp-styles')) {
  const s = document.createElement('style');
  s.id = 'lp-styles';
  s.textContent = `
    .touchable { transition: transform .1s, opacity .1s; }
    .touchable:active { transform: scale(.96); opacity: .75; }
    .lp-row { animation: lpSlide .45s cubic-bezier(.2,.9,.3,1) both; }
    @keyframes lpSlide {
      0% { opacity: 0; transform: translateY(8px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .lp-screen { animation: lpFadeIn .28s ease both; }
    @keyframes lpFadeIn {
      0% { opacity: 0; transform: translateX(12px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    .lp-screen-back { animation: lpFadeBack .28s ease both; }
    @keyframes lpFadeBack {
      0% { opacity: 0; transform: translateX(-12px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    .lp-count-up { display: inline-block; }
  `;
  document.head.appendChild(s);
}

// Small number-tick animation on first mount
function TickNumber({ value, duration = 800, style }) {
  const [n, setN] = React.useState(typeof value === 'number' ? 0 : value);
  React.useEffect(() => {
    if (typeof value !== 'number') { setN(value); return; }
    const start = performance.now();
    const from = 0;
    const to = value;
    let raf;
    const step = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const e = 1 - Math.pow(1 - p, 3);
      setN(Math.round(from + (to - from) * e));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);
  return <span style={style} className="lp-count-up">{n}</span>;
}

// ─── Champion badges (driver title / team title / GP de la Porra winner) ──
function ChampBadge({ kind, year, size = 'md' }) {
  // kind: 'driver' (título pilotos) | 'team' (título equipos) | 'kart' (GP Porra)
  //       | 'fastest' (vuelta rápida GP Porra)
  const cfg = {
    driver:  { label: 'Campeón', icon: '👑', bg: 'linear-gradient(135deg,#FFD93D,#FFB800)', fg: '#1a1a1a' },
    team:    { label: 'Título',  icon: '🏆', bg: 'linear-gradient(135deg,#FFD93D,#FFB800)', fg: '#1a1a1a' },
    kart:    { label: 'GP Porra', icon: '🏁', bg: 'linear-gradient(135deg,#C8A2FF,#7B5FE0)', fg: '#fff' },
    fastest: { label: 'V. rápida', icon: '⚡', bg: 'rgba(255,255,255,0.06)', fg: '#C8A2FF' },
  }[kind] || { label: '', icon: '★', bg: 'rgba(255,255,255,0.08)', fg: '#fff' };
  const small = size === 'sm';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: small ? '2px 6px' : '3px 8px',
      borderRadius: 999,
      background: cfg.bg, color: cfg.fg,
      fontSize: small ? 9.5 : 10.5, fontWeight: 800, letterSpacing: 0.3,
      fontFamily: 'inherit', whiteSpace: 'nowrap',
      border: '1px solid rgba(0,0,0,0.15)',
    }}>
      <span style={{ fontSize: small ? 10 : 11 }}>{cfg.icon}</span>
      <span>{cfg.label} {year}</span>
    </span>
  );
}

// ─── ScrollGloss: degradado oscuro sticky en la parte superior de cada pantalla ─
function ScrollGloss() {
  return (
    <div style={{
      position: 'sticky', top: 0, left: 0, right: 0,
      height: 56, marginBottom: -56,
      pointerEvents: 'none', zIndex: 5,
      background: 'linear-gradient(180deg, rgba(15,25,35,0.95) 0%, rgba(15,25,35,0.55) 55%, rgba(15,25,35,0) 100%)',
    }} />
  );
}

Object.assign(window, {
  DeltaChip, LastChip, PodiumBadge, TeamAvatar, BackButton, TickNumber,
  ChampBadge, ScrollGloss,
});
