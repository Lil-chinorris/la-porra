// screen-desafios.jsx — Desafíos / logros de La Porra (estilo trofeos de videojuego)

function ScreenDesafios({ onBack }) {
  const P = window.PALETTE;
  const all = window.CHALLENGES;

  return (
    <div className="lp-screen" style={{
      width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden',
      background: P.bg, color: P.text, paddingBottom: 50,
      fontFamily: '"Space Grotesk", -apple-system, system-ui, sans-serif',
    }}>
      <ScrollGloss />
      <div style={{
        padding: 'max(32px, env(safe-area-inset-top)) 20px 20px',
        background: `linear-gradient(180deg, ${P.accent2}1F 0%, transparent 80%)`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
          <BackButton onClick={onBack} />
          <div style={{ fontSize: 11, fontWeight: 700, color: P.muted, letterSpacing: 1.5 }}>
            LOGROS · {all.length}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ fontSize: 46 }}>🎖️</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: -1, lineHeight: 1 }}>Desafíos</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: P.muted, marginTop: 4 }}>
              Trofeos por las gestas (y miserias) de la porra
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '8px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {all.map((ch, i) => (
          <div key={ch.id} className="lp-row" style={{
            animationDelay: `${i * 30}ms`,
            display: 'flex', alignItems: 'center', gap: 12,
            background: P.surface,
            border: `1px solid ${P.text}10`,
            borderRadius: 14, padding: '12px 13px',
          }}>
            <div style={{
              width: 46, height: 46, borderRadius: 12, flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 24,
              background: `${P.accent2}1A`,
            }}>{ch.emoji}</div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontSize: 14.5, fontWeight: 800, letterSpacing: -0.2, color: P.text,
              }}>{ch.name}</div>
              <div style={{
                fontSize: 11, fontWeight: 600, lineHeight: 1.35, marginTop: 2,
                color: P.muted,
              }}>{ch.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { ScreenDesafios });
