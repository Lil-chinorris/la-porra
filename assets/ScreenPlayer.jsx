// screen-player.jsx — Detalle piloto con carreras reales C1-C3

function ScreenPlayer({ name, onBack, onOpenTeam, onOpenRace, onOpenPlayer }) {
  const P = window.PALETTE;
  const player = window.PLAYERS.find(p => p.name === name);
  if (!player) return null;
  const teamColor = P.teams[player.team] || P.accent;
  const teammates = window.PLAYERS.filter(p => p.team === player.team && p.name !== name);

  const driverTitles = window.getDriverTitles(player.name);
  const kartWins = window.getKartWins(player.name);
  const kartFastest = window.getKartFastest(player.name);

  const cumulative = player.results.reduce((acc, v, i) => {
    acc.push((acc[i - 1] || 0) + v); return acc;
  }, []);

  return (
    <div className="lp-screen" style={{
      width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden',
      background: P.bg, color: P.text, paddingBottom: 60,
      fontFamily: '"Space Grotesk", -apple-system, system-ui, sans-serif',
    }}>
      
      <ScrollGloss />
      <div style={{
        padding: 'max(32px, env(safe-area-inset-top)) 20px 20px',
        background: `linear-gradient(180deg, ${teamColor}33 0%, ${teamColor}08 60%, transparent 100%)`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
          <BackButton onClick={onBack} />
          <div style={{ fontSize: 11, fontWeight: 700, color: P.muted, letterSpacing: 1.5 }}>
            PILOTO · P{player.pos}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14 }}>
          <TeamAvatar team={player.team} emoji={player.emoji} size={78} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 32, fontWeight: 900, lineHeight: 1, letterSpacing: -1.2, marginBottom: 4 }}>{player.name}</div>
            <button onClick={() => onOpenTeam(player.team)} className="touchable" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: `${teamColor}22`, border: `1px solid ${teamColor}50`,
              color: P.text, fontSize: 12, fontWeight: 700,
              padding: '4px 10px', borderRadius: 999,
              cursor: 'pointer', fontFamily: 'inherit',
            }}>
              <span style={{ display: 'inline-block', width: 7, height: 7, borderRadius: '50%', background: teamColor }} />
              {player.team}
            </button>
            {(driverTitles.length > 0 || kartWins.length > 0 || kartFastest.length > 0) && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 8 }}>
                {driverTitles.map(y => (
                  <ChampBadge key={`d${y}`} kind="driver" year={y} />
                ))}
                {kartWins.map(y => (
                  <ChampBadge key={`k${y}`} kind="kart" year={y} />
                ))}
                {kartFastest.map(y => (
                  <ChampBadge key={`f${y}`} kind="fastest" year={y} />
                ))}
              </div>
            )}
          </div>
        </div>

        <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          <Kpi label="POSICIÓN" value={`P${player.pos}`} sub={
            player.delta === 0 ? '= sin cambio' :
            player.delta > 0 ? `▲ ${player.delta} vs C${window.RACE_NUMBER - 1}` :
            `▼ ${Math.abs(player.delta)} vs C${window.RACE_NUMBER - 1}`
          } subColor={player.delta > 0 ? P.success : player.delta < 0 ? P.danger : P.muted} />
          <Kpi label="TOTAL" value={<TickNumber value={player.total} />} sub="PUNTOS" highlight />
          <Kpi label="GP JAPÓN"
               value={(player.last > 0 ? '+' : '') + player.last}
               sub={`C${window.RACE_NUMBER}`}
               subColor={player.last > 0 ? P.success : player.last < 0 ? P.danger : P.muted} />
        </div>
      </div>

      <div style={{ padding: '8px 16px' }}>
        <SectionTitle>Evolución · campeonato</SectionTitle>
        <div style={{ background: P.surface, borderRadius: 14, padding: '16px 14px', border: `1px solid ${P.text}10` }}>
          <Sparkline values={cumulative} color={teamColor} />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
            {window.RACES.map((r) => (
              <div key={r.n} style={{ fontSize: 9, fontWeight: 700, color: P.muted, letterSpacing: 0.5, textAlign: 'center', flex: 1 }}>
                {r.short}
              </div>
            ))}
          </div>
        </div>

        <SectionTitle>Carreras</SectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {window.RACES.map((r, i) => {
            const pts = player.results[i];
            const isCurrent = r.n === window.RACE_NUMBER;
            return (
              <button key={r.n} onClick={() => onOpenRace(r.n)} className="touchable" style={{
                display: 'flex', alignItems: 'center', gap: 11,
                padding: '10px 12px', borderRadius: 12,
                background: P.surface,
                border: `1px solid ${isCurrent ? teamColor + '55' : P.text + '10'}`,
                cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit', color: 'inherit',
                width: '100%',
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 9,
                  background: isCurrent ? `${teamColor}22` : 'rgba(255,255,255,0.04)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16,
                }}>{r.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 800, letterSpacing: -0.1, display: 'flex', alignItems: 'center', gap: 6 }}>
                    Carrera {r.n} · GP {r.name}
                    {isCurrent && <span style={{ fontSize: 9, fontWeight: 800, color: P.accent2, letterSpacing: 1 }}>ÚLT.</span>}
                  </div>
                  <div style={{ fontSize: 10.5, color: P.muted, fontWeight: 600 }}>{r.date}</div>
                </div>
                <div style={{
                  fontSize: 17, fontWeight: 900,
                  color: pts > 0 ? P.text : pts < 0 ? P.danger : P.muted,
                  letterSpacing: -0.5,
                }}>{pts > 0 ? '+' : ''}{pts}</div>
              </button>
            );
          })}
        </div>

        {teammates.length > 0 && (
          <>
            <SectionTitle>Compañeros · {player.team}</SectionTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {teammates.map(tm => (
                <button key={tm.name}
                  onClick={onOpenPlayer ? () => onOpenPlayer(tm.name) : undefined}
                  className="touchable" style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    background: P.surface, borderRadius: 10, padding: '8px 10px',
                    border: `1px solid ${P.text}10`,
                    color: 'inherit', textAlign: 'left', fontFamily: 'inherit',
                    width: '100%', cursor: 'pointer',
                  }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: P.muted, width: 26 }}>P{tm.pos}</div>
                  <div style={{ fontSize: 16 }}>{tm.emoji}</div>
                  <div style={{ flex: 1, fontSize: 13, fontWeight: 700 }}>{tm.name}</div>
                  <div style={{
                    fontSize: 15, fontWeight: 900,
                    color: tm.total < 0 ? P.danger : P.text, letterSpacing: -0.4,
                  }}>{tm.total}</div>
                  <svg width="6" height="11" viewBox="0 0 6 11" style={{ opacity: 0.4, marginLeft: 2 }}>
                    <path d="M1 1l4 4.5L1 10" stroke={P.text} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Kpi({ label, value, sub, subColor, highlight }) {
  const P = window.PALETTE;
  return (
    <div style={{
      background: highlight ? `${P.accent}18` : P.surface,
      border: `1px solid ${highlight ? P.accent + '55' : P.text + '10'}`,
      borderRadius: 12, padding: '10px 10px',
    }}>
      <div style={{ fontSize: 9, fontWeight: 700, color: P.muted, letterSpacing: 1 }}>{label}</div>
      <div style={{
        fontSize: 22, fontWeight: 900, marginTop: 2, letterSpacing: -0.8, lineHeight: 1,
        color: highlight ? P.accent2 : P.text,
      }}>{value}</div>
      <div style={{ fontSize: 10, fontWeight: 700, marginTop: 3, color: subColor || P.muted, letterSpacing: 0.3 }}>{sub}</div>
    </div>
  );
}

function SectionTitle({ children }) {
  const P = window.PALETTE;
  return (
    <div style={{
      fontSize: 10, fontWeight: 800, letterSpacing: 1.5,
      color: P.muted, textTransform: 'uppercase',
      padding: '16px 2px 10px',
    }}>{children}</div>
  );
}

function Sparkline({ values, color, width = 340, height = 64 }) {
  const P = window.PALETTE;
  const min = Math.min(0, ...values);
  const max = Math.max(0, ...values);
  const range = max - min || 1;
  const step = values.length > 1 ? width / (values.length - 1) : 0;
  const pts = values.map((v, i) => [i * step, height - ((v - min) / range) * height]);
  const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');
  const area = `${d} L ${width} ${height} L 0 ${height} Z`;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height={height} preserveAspectRatio="none">
      <defs>
        <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#spark)" />
      <path d={d} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === pts.length - 1 ? 4 : 2.5}
          fill={i === pts.length - 1 ? color : P.bg}
          stroke={color} strokeWidth="2" />
      ))}
    </svg>
  );
}

Object.assign(window, { ScreenPlayer, Kpi, SectionTitle });
