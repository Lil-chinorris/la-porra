// screen-team.jsx — Detalle de un equipo con mejor posición histórica

function ScreenTeam({ name, onBack, onOpenPlayer }) {
  const P = window.PALETTE;
  const team = window.TEAMS.find(t => t.name === name);
  if (!team) return null;
  const teamColor = P.teams[name] || P.accent;
  const members = window.PLAYERS.filter(p => p.team === name);
  const bestLast = members.reduce((m, p) => p.last > m.last ? p : m, members[0]);
  const best = window.TEAM_BEST[name] || { label: 'Rookie', num: null };
  const isRookie = best.num === null;
  const titleYears = window.getTeamTitles(name);
  const isChamp = titleYears.length > 0 || best.num === 1;

  return (
    <div className="lp-screen" style={{
      width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden',
      background: P.bg, color: P.text,
      fontFamily: '"Space Grotesk", -apple-system, system-ui, sans-serif',
      paddingBottom: 60,
    }}>
      
      <ScrollGloss />
      <div style={{
        padding: '62px 20px 22px',
        background: `linear-gradient(180deg, ${teamColor}40 0%, ${teamColor}10 65%, transparent 100%)`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
          <BackButton onClick={onBack} />
          <div style={{ fontSize: 11, fontWeight: 700, color: P.muted, letterSpacing: 1.5 }}>
            EQUIPO · P{team.pos}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14 }}>
          <TeamAvatar team={name} emoji={team.emoji} size={78} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 26, fontWeight: 900, lineHeight: 1.05, letterSpacing: -0.8, marginBottom: 6 }}>{team.name}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: P.muted }}>
                {members.length} {members.length === 1 ? 'piloto' : 'pilotos'}
              </div>
              <div style={{ width: 3, height: 3, borderRadius: '50%', background: P.muted, opacity: 0.5 }} />
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                fontSize: 11, fontWeight: 800, letterSpacing: 0.3,
                color: isChamp ? '#FFD93D' : isRookie ? P.accent2 : P.text,
                background: isChamp ? 'rgba(255,217,61,0.15)' :
                           isRookie ? `${P.accent2}1E` : 'rgba(255,255,255,0.06)',
                padding: '2px 7px', borderRadius: 6,
                border: `1px solid ${isChamp ? '#FFD93D55' : isRookie ? P.accent2 + '40' : P.text + '14'}`,
              }}>
                {isChamp ? '👑' : isRookie ? '✦' : '★'} Mejor hist.: {best.label}
              </div>
            </div>
            {titleYears.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 8 }}>
                {titleYears.map(y => <ChampBadge key={y} kind="team" year={y} />)}
              </div>
            )}
          </div>
        </div>

        <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          <Kpi label="POSICIÓN" value={`P${team.pos}`}
               sub={team.delta === 0 ? '= sin cambio' :
                    team.delta > 0 ? `▲ ${team.delta} vs C${window.RACE_NUMBER - 1}` :
                    `▼ ${Math.abs(team.delta)} vs C${window.RACE_NUMBER - 1}`}
               subColor={team.delta > 0 ? P.success : team.delta < 0 ? P.danger : P.muted} />
          <Kpi label="TOTAL" value={<TickNumber value={team.total} />} sub="PUNTOS" highlight />
          <Kpi label="GP JAPÓN"
               value={(team.last > 0 ? '+' : '') + team.last}
               sub={`C${window.RACE_NUMBER}`}
               subColor={team.last > 0 ? P.success : team.last < 0 ? P.danger : P.muted} />
        </div>
      </div>

      <div style={{ padding: '8px 16px' }}>
        <SectionTitle>Pilotos del equipo</SectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {members.map(p => {
            const isBest = p.name === bestLast.name && members.length > 1;
            return (
              <button key={p.name} onClick={() => onOpenPlayer(p.name)}
                className="touchable" style={{
                  position: 'relative',
                  background: P.surface, borderRadius: 14,
                  padding: '11px 12px 11px 14px',
                  display: 'flex', alignItems: 'center', gap: 11,
                  overflow: 'hidden', cursor: 'pointer',
                  border: `1px solid ${P.text}10`,
                  color: 'inherit', textAlign: 'left', fontFamily: 'inherit', width: '100%',
                }}>
                <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: 4, background: teamColor }} />
                <div style={{ fontSize: 17, fontWeight: 800, color: P.muted, width: 28, textAlign: 'center' }}>P{p.pos}</div>
                <TeamAvatar team={p.team} emoji={p.emoji} size={40} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: -0.2, display: 'flex', alignItems: 'center', gap: 6 }}>
                    {p.name}
                    {isBest && (
                      <span style={{
                        fontSize: 8, fontWeight: 800, letterSpacing: 0.8,
                        padding: '2px 5px', borderRadius: 4,
                        background: teamColor, color: '#fff',
                      }}>TOP C{window.RACE_NUMBER}</span>
                    )}
                  </div>
                  <div style={{ fontSize: 11, color: P.muted, fontWeight: 600, marginTop: 2 }}>
                    Última: {p.last > 0 ? '+' : ''}{p.last} pts · Δ {
                      p.delta === 0 ? '—' : (p.delta > 0 ? `▲${p.delta}` : `▼${Math.abs(p.delta)}`)
                    }
                  </div>
                </div>
                <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: -0.7, color: p.total < 0 ? P.danger : P.text }}>{p.total}</div>
              </button>
            );
          })}
        </div>

        <SectionTitle>Vs. resto de equipos</SectionTitle>
        <div style={{
          background: P.surface, borderRadius: 14, padding: 14,
          border: `1px solid ${P.text}10`,
          display: 'flex', flexDirection: 'column', gap: 9,
        }}>
          {window.TEAMS.map(t => {
            const pct = Math.max(4, (Math.max(0, t.total) / Math.max(1, window.TEAMS[0].total)) * 100);
            const c = P.teams[t.name] || P.accent;
            const me = t.name === name;
            return (
              <div key={t.name} style={{
                display: 'grid', gridTemplateColumns: '18px 1fr 36px',
                alignItems: 'center', gap: 8,
                opacity: me ? 1 : 0.7,
              }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: P.muted }}>{t.pos}</div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: me ? 800 : 700, color: P.text, letterSpacing: -0.1, marginBottom: 3, display: 'flex', alignItems: 'center', gap: 5 }}>
                    <span>{t.emoji}</span>
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.name}</span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.05)', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%', width: `${pct}%`,
                      background: me ? c : `${c}88`,
                      borderRadius: 3,
                      transition: 'width .6s cubic-bezier(.3,.8,.3,1)',
                    }} />
                  </div>
                </div>
                <div style={{ fontSize: 13, fontWeight: 900, textAlign: 'right', letterSpacing: -0.3, color: t.total < 0 ? P.danger : P.text }}>{t.total}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ScreenTeam });
