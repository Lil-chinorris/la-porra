// screen-race.jsx — Detalle de una carrera cualquiera (C1/C2/C3)

function ScreenRace({ raceNumber, onBack, onOpenPlayer }) {
  const P = window.PALETTE;
  const n = raceNumber || window.RACE_NUMBER;
  const race = window.RACES.find((r) => r.n === n);
  const official = window.OFFICIAL_RESULTS[n];
  const [tab, setTab] = React.useState('pilotos');

  const pilotos = React.useMemo(() => {
    const rr = window.RACE_RESULTS[n];
    return [...window.PLAYERS].
    map((p) => ({ ...p, _pts: rr[p.name] ?? 0 })).
    sort((a, b) => b._pts - a._pts).
    map((p, i) => ({ ...p, _rank: i + 1 }));
  }, [n]);

  const equipos = React.useMemo(() => {
    const rr = window.TEAM_RESULTS[n];
    return [...window.TEAMS].
    map((t) => ({ ...t, _pts: rr[t.name] ?? 0 })).
    sort((a, b) => b._pts - a._pts).
    map((t, i) => ({ ...t, _rank: i + 1 }));
  }, [n]);

  return (
    <div className="lp-screen" style={{
      width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden',
      background: P.bg, color: P.text, paddingBottom: 60,
      fontFamily: '"Space Grotesk", -apple-system, system-ui, sans-serif'
    }}>
      
      <ScrollGloss />
      <div style={{
        padding: 'max(32px, env(safe-area-inset-top)) 20px 18px',
        background: `linear-gradient(180deg, ${P.accent}2C 0%, ${P.accent}08 70%, transparent 100%)`
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <BackButton onClick={onBack} />
          <div style={{ fontSize: 11, fontWeight: 700, color: P.muted, letterSpacing: 1.5 }}>
            CARRERA {n} / 22 · FINALIZADA
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ fontSize: 54, lineHeight: 1 }}>{race.emoji}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 28, fontWeight: 900, lineHeight: 1, letterSpacing: -1, marginBottom: 4 }}>GP {race.name}</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: P.muted }}>{race.circuit} · {race.date}</div>
          </div>
        </div>

        {/* Resultado oficial */}
        <div style={{
          marginTop: 18, background: 'rgba(255,255,255,0.04)',
          border: `1px solid ${P.text}14`, borderRadius: 14, padding: '12px 14px'
        }}>
          <div style={{ fontSize: 10, fontWeight: 800, color: P.muted, letterSpacing: 1.5, marginBottom: 8 }}>
            RESULTADO OFICIAL · TOP 5
          </div>
          {official.top5.map((d, i) =>
          <div key={d} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '5px 0' }}>
              <div style={{
              width: 20, height: 20, borderRadius: 6,
              background: i === 0 ? 'linear-gradient(135deg,#FFD93D,#FFB800)' :
              i === 1 ? 'linear-gradient(135deg,#E8E8F0,#B8B8C4)' :
              i === 2 ? 'linear-gradient(135deg,#D88F5A,#A86232)' :
              'rgba(255,255,255,0.08)',
              color: i < 3 ? '#1a1a1a' : P.muted,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 10, fontWeight: 900
            }}>{i + 1}</div>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: -0.2 }}>{d}</div>
            </div>
          )}

          {/* Piloto de la semana + Vuelta rápida */}
          <div style={{
            marginTop: 10, paddingTop: 10, borderTop: `1px solid ${P.text}14`,
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10
          }}>
            <div>
              <div style={{ fontSize: 9, fontWeight: 800, color: P.muted, letterSpacing: 1 }}>PILOTO DE LA SEMANA</div>
              <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: -0.2, marginTop: 4 }}>
                {official.driverOfTheDay.name}
              </div>
              <div style={{
                fontSize: 10, fontWeight: 700, color: P.accent2, marginTop: 1,
              }}>
                {official.driverOfTheDay.pts} posición
              </div>
            </div>
            <div>
              <div style={{ fontSize: 9, fontWeight: 800, color: P.muted, letterSpacing: 1 }}>VUELTA RÁPIDA</div>
              <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: -0.2, marginTop: 4 }}>
                {official.fastestLap.name}
              </div>
              <div style={{
                fontSize: 10, fontWeight: 700, color: '#C8A2FF', marginTop: 1,
                fontFamily: 'ui-monospace, "SF Mono", monospace'
              }}>
                {official.fastestLap.time}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        margin: '8px 20px 12px', padding: 4,
        background: 'rgba(255,255,255,0.06)',
        borderRadius: 12, display: 'flex', gap: 2,
        border: `1px solid ${P.text}11`
      }}>
        {[{ k: 'pilotos', label: 'Pilotos' }, { k: 'equipos', label: 'Equipos' }].map((t) =>
        <button key={t.k} onClick={() => setTab(t.k)} className="touchable" style={{
          flex: 1, padding: '8px 0', borderRadius: 9,
          fontSize: 13, fontWeight: 700,
          background: tab === t.k ? P.accent : 'transparent',
          color: tab === t.k ? '#fff' : P.muted,
          border: 'none', cursor: 'pointer', fontFamily: 'inherit'
        }}>{t.label}</button>
        )}
      </div>

      {tab === 'pilotos' ?
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 7 }}>
          {pilotos.map((p, idx) => {
          const tc = P.teams[p.team] || P.accent;
          return (
            <button key={p.name} onClick={() => onOpenPlayer(p.name)}
            className="lp-row touchable" style={{
              animationDelay: `${idx * 16}ms`,
              position: 'relative',
              background: P.surface, borderRadius: 12,
              padding: '9px 10px 9px 12px',
              display: 'flex', alignItems: 'center', gap: 10,
              overflow: 'hidden', cursor: 'pointer',
              border: `1px solid ${P.text}10`,
              color: 'inherit', textAlign: 'left', fontFamily: 'inherit', width: '100%'
            }}>
                <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: 3, background: tc }} />
                <div style={{ width: 26, fontSize: 14, fontWeight: 800, color: p._rank <= 3 ? tc : P.muted, textAlign: 'center', letterSpacing: -0.3 }}>{p._rank}</div>
                <div style={{ fontSize: 18 }}>{p.emoji}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: -0.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</div>
                  <div style={{ fontSize: 10.5, color: P.muted, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.team}</div>
                </div>
                <div style={{
                fontSize: 17, fontWeight: 900, letterSpacing: -0.5,
                color: p._pts > 0 ? P.text : p._pts < 0 ? P.danger : P.muted
              }}>{p._pts > 0 ? '+' : ''}{p._pts}</div>
              </button>);

        })}
        </div> :

      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {equipos.map((t, idx) => {
          const c = P.teams[t.name] || P.accent;
          return (
            <div key={t.name} className="lp-row" style={{
              animationDelay: `${idx * 18}ms`,
              position: 'relative',
              background: P.surface, borderRadius: 12,
              padding: '11px 12px 11px 14px',
              display: 'flex', alignItems: 'center', gap: 11,
              overflow: 'hidden', border: `1px solid ${P.text}10`
            }}>
                <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: 3, background: c }} />
                <div style={{ width: 26, fontSize: 16, fontWeight: 800, color: t._rank <= 3 ? c : P.muted, textAlign: 'center' }}>{t._rank}</div>
                <TeamAvatar team={t.name} emoji={t.emoji} size={38} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: -0.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.name}</div>
                  <div style={{ fontSize: 10.5, color: P.muted, fontWeight: 600 }}>tot. campeonato · {t.total}</div>
                </div>
                <div style={{
                fontSize: 19, fontWeight: 900, letterSpacing: -0.6,
                color: t._pts > 0 ? P.text : t._pts < 0 ? P.danger : P.muted
              }}>{t._pts > 0 ? '+' : ''}{t._pts}</div>
              </div>);

        })}
        </div>
      }
    </div>);

}

Object.assign(window, { ScreenRace });