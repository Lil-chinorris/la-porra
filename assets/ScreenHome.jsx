// screen-home.jsx — Home con scroll horizontal de carreras + tabs

function ScreenHome({ onOpenPlayer, onOpenTeam, onOpenRace, onOpenNext, onOpenPalmares }) {
  const P = window.PALETTE;
  const [tab, setTab] = React.useState('pilotos');
  // view: 'general' | `race-N`
  const [view, setView] = React.useState('general');

  return (
    <div className="lp-screen" style={{
      width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden',
      background: `radial-gradient(130% 60% at 50% 0%, ${P.bg2} 0%, ${P.bg} 55%)`,
      color: P.text, paddingBottom: 100,
      fontFamily: '"Space Grotesk", -apple-system, system-ui, sans-serif',
    }}>
      <ScrollGloss />
      {/* Header */}
      <div style={{ padding: '62px 20px 10px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: 2.5, fontWeight: 700, color: P.accent, marginBottom: 6 }}>
            ◆ CAMPEONATO 2026
          </div>
          <div style={{ fontSize: 40, fontWeight: 900, lineHeight: 1, letterSpacing: -1.4 }}>
            La Porra<span style={{ color: P.accent }}>.</span>
          </div>
        </div>
        <button onClick={onOpenPalmares} className="touchable" style={{
          padding: '8px 12px', borderRadius: 10,
          background: 'rgba(255,255,255,0.06)',
          border: `1px solid ${P.text}15`, color: P.text,
          fontSize: 11, fontWeight: 700, letterSpacing: 0.8,
          cursor: 'pointer', fontFamily: 'inherit',
          display: 'flex', alignItems: 'center', gap: 6,
        }}>🏆 Palmarés</button>
      </div>

      {/* Tabs Pilotos / Equipos */}
      <div style={{
        margin: '14px 20px 10px', padding: 4,
        background: 'rgba(255,255,255,0.06)', borderRadius: 12,
        display: 'flex', gap: 2, border: `1px solid ${P.text}11`,
      }}>
        {[
          { k: 'pilotos', label: `Pilotos · ${window.PLAYERS.length}` },
          { k: 'equipos', label: `Equipos · ${window.TEAMS.length}` },
        ].map(t => (
          <button key={t.k} onClick={() => setTab(t.k)} className="touchable" style={{
            flex: 1, padding: '9px 0', borderRadius: 9,
            fontSize: 13, fontWeight: 700,
            background: tab === t.k ? P.accent : 'transparent',
            color: tab === t.k ? '#fff' : P.muted,
            border: 'none', cursor: 'pointer', fontFamily: 'inherit',
          }}>{t.label}</button>
        ))}
      </div>

      {/* Scroll horizontal: General + chips por carrera (calendario 22) */}
      <div style={{
        display: 'flex', gap: 6, padding: '4px 16px 10px',
        overflowX: 'auto', overflowY: 'hidden',
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none',
      }}>
        <style>{`.lp-scroll::-webkit-scrollbar{display:none}`}</style>
        <Chip active={view === 'general'} onClick={() => setView('general')}
          palette={P}>General</Chip>
        {window.CALENDAR.map(r => {
          const isLast = r.n === window.RACE_NUMBER;
          const done = r.status === 'done';
          const isNext = r.status === 'next';
          const future = r.status === 'future';
          return (
            <Chip key={r.n} active={view === `race-${r.n}`}
              onClick={done ? () => setView(`race-${r.n}`) : null}
              disabled={!done}
              palette={P}
              badge={isLast ? 'Últ.' : isNext ? 'Próx.' : null}
              variant={isNext ? 'next' : future ? 'future' : 'done'}>
              <span style={{ marginRight: 4, opacity: done ? 1 : 0.55 }}>{r.emoji}</span>
              <span>{r.short}</span>
            </Chip>
          );
        })}
      </div>

      {/* Banner sticky: si la vista es una carrera, mostramos resumen + link a detalle */}
      {view !== 'general' && (() => {
        const n = parseInt(view.split('-')[1], 10);
        const r = window.RACES.find(x => x.n === n);
        return (
          <button onClick={() => onOpenRace(n)} className="touchable" style={{
            margin: '0 20px 12px', width: 'calc(100% - 40px)',
            background: `linear-gradient(100deg, ${P.accent}22, ${P.surface} 70%)`,
            border: `1px solid ${P.accent}40`,
            borderRadius: 14, padding: '10px 12px',
            display: 'flex', alignItems: 'center', gap: 10,
            color: P.text, cursor: 'pointer', textAlign: 'left',
            fontFamily: 'inherit',
          }}>
            <div style={{ fontSize: 26 }}>{r.emoji}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: P.muted, letterSpacing: 1.5 }}>
                CARRERA {n} · {r.date}
              </div>
              <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: -0.2 }}>
                GP {r.name} · Ver resultados
              </div>
            </div>
            <svg width="8" height="14" viewBox="0 0 8 14" style={{ opacity: 0.6 }}>
              <path d="M1 1l6 6-6 6" stroke={P.text} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        );
      })()}

      {tab === 'pilotos' ? (
        <PlayerList view={view} onOpen={onOpenPlayer} />
      ) : (
        <TeamList view={view} onOpen={onOpenTeam} />
      )}

      {/* Próxima carrera */}
      <button onClick={onOpenNext} className="touchable" style={{
        margin: '20px 20px 0', width: 'calc(100% - 40px)',
        padding: '14px 16px', borderRadius: 14,
        background: P.surface, border: `1px dashed ${P.accent}55`,
        display: 'flex', alignItems: 'center', gap: 12,
        color: P.text, cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit',
      }}>
        <div style={{ fontSize: 28 }}>{window.NEXT_RACE.emoji}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: P.muted, letterSpacing: 1.2 }}>
            PRÓXIMA · CARRERA {window.NEXT_RACE.n}
          </div>
          <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: -0.2 }}>
            GP {window.NEXT_RACE.name}
          </div>
          <div style={{ fontSize: 11, color: P.accent2, fontWeight: 700, marginTop: 2 }}>
            {window.NEXT_RACE.date}
          </div>
        </div>
        <svg width="8" height="14" viewBox="0 0 8 14" style={{ opacity: 0.6 }}>
          <path d="M1 1l6 6-6 6" stroke={P.text} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}

function Chip({ active, onClick, children, palette, badge, disabled, variant }) {
  // variant: 'done' (default) | 'next' | 'future'
  const isNext = variant === 'next';
  const isFuture = variant === 'future';
  const bg = active
    ? `${palette.accent2}22`
    : isNext
      ? `${palette.accent}18`
      : isFuture
        ? 'rgba(255,255,255,0.02)'
        : 'rgba(255,255,255,0.04)';
  const color = active
    ? palette.accent2
    : isFuture
      ? palette.mutedDim
      : isNext
        ? palette.accent2
        : palette.muted;
  const border = active
    ? palette.accent2 + '55'
    : isNext
      ? palette.accent + '40'
      : isFuture
        ? palette.text + '08'
        : palette.text + '10';
  const badgeBg = isNext ? palette.accent2 : palette.accent;
  const badgeFg = isNext ? '#1a1a1a' : '#fff';
  return (
    <button onClick={disabled ? undefined : onClick}
      className={disabled ? '' : 'touchable'}
      disabled={!!disabled}
      style={{
        flexShrink: 0, padding: '7px 14px',
        borderRadius: 999, fontSize: 12.5, fontWeight: 700,
        background: bg, color,
        border: `1px solid ${border}`,
        cursor: disabled ? 'default' : 'pointer',
        fontFamily: 'inherit',
        display: 'inline-flex', alignItems: 'center', gap: 6,
        whiteSpace: 'nowrap',
        opacity: isFuture ? 0.55 : 1,
        ...(isFuture ? { borderStyle: 'dashed' } : null),
      }}>
      {children}
      {badge && (
        <span style={{
          fontSize: 8, fontWeight: 800, letterSpacing: 0.5,
          background: badgeBg, color: badgeFg,
          padding: '1px 5px', borderRadius: 4,
        }}>{badge}</span>
      )}
    </button>
  );
}

function PlayerList({ view, onOpen }) {
  const P = window.PALETTE;
  const list = React.useMemo(() => {
    if (view === 'general') return window.PLAYERS;
    const n = parseInt(view.split('-')[1], 10);
    const raceResults = window.RACE_RESULTS[n];
    return [...window.PLAYERS]
      .map(p => ({ ...p, _raceN: n, _racePts: raceResults[p.name] ?? 0 }))
      .sort((a, b) => b._racePts - a._racePts)
      .map((p, i) => ({ ...p, _rank: i + 1 }));
  }, [view]);

  return (
    <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
      {list.map((p, idx) => {
        const teamColor = P.teams[p.team] || P.accent;
        const rank = view === 'general' ? p.pos : p._rank;
        const isPodium = rank <= 3;
        const isLeader = rank === 1;
        const big = view === 'general' ? p.total : p._racePts;
        const sub = view === 'general'
          ? <LastChip last={p.last} />
          : <div style={{ fontSize: 10, fontWeight: 700, color: P.muted }}>tot. {p.total}</div>;

        return (
          <button key={p.name} onClick={() => onOpen(p.name)}
            className="lp-row touchable" style={{
              animationDelay: `${idx * 20}ms`,
              position: 'relative',
              background: isLeader
                ? `linear-gradient(100deg, ${teamColor}28, ${P.surface} 60%)`
                : P.surface,
              borderRadius: 14, padding: '11px 12px 11px 14px',
              display: 'flex', alignItems: 'center', gap: 11,
              overflow: 'hidden', cursor: 'pointer',
              boxShadow: isLeader
                ? `0 8px 20px -8px ${teamColor}66, inset 0 1px 0 ${P.text}14`
                : `0 2px 6px rgba(0,0,0,0.25), inset 0 1px 0 ${P.text}08`,
              border: `1px solid ${isLeader ? teamColor + '55' : P.text + '10'}`,
              color: 'inherit', textAlign: 'left', fontFamily: 'inherit', width: '100%',
            }}>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: 4, background: teamColor }} />
            <div style={{ width: 38, flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
              {isPodium ? <PodiumBadge pos={rank} size={30} /> : (
                <div style={{ fontSize: 19, fontWeight: 800, color: P.muted, letterSpacing: -0.5 }}>{rank}</div>
              )}
              {view === 'general' && <DeltaChip delta={p.delta} size="sm" />}
            </div>
            <TeamAvatar team={p.team} emoji={p.emoji} size={42} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 15.5, fontWeight: 800, letterSpacing: -0.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</div>
              <div style={{ fontSize: 11, color: P.muted, fontWeight: 600, marginTop: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.team}</div>
            </div>
            <div style={{ flexShrink: 0, textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 3 }}>
              <div style={{
                fontSize: 21, fontWeight: 900,
                color: big < 0 ? P.danger : P.text,
                letterSpacing: -0.7, lineHeight: 1,
              }}>{view === 'general' ? big : (big > 0 ? '+' + big : big)}</div>
              {sub}
            </div>
          </button>
        );
      })}
    </div>
  );
}

function TeamList({ view, onOpen }) {
  const P = window.PALETTE;
  const list = React.useMemo(() => {
    if (view === 'general') return window.TEAMS;
    const n = parseInt(view.split('-')[1], 10);
    const rr = window.TEAM_RESULTS[n];
    return [...window.TEAMS]
      .map(t => ({ ...t, _racePts: rr[t.name] ?? 0 }))
      .sort((a, b) => b._racePts - a._racePts)
      .map((t, i) => ({ ...t, _rank: i + 1 }));
  }, [view]);

  return (
    <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
      {list.map((t, idx) => {
        const teamColor = P.teams[t.name] || P.accent;
        const rank = view === 'general' ? t.pos : t._rank;
        const isPodium = rank <= 3;
        const isLeader = rank === 1;
        const count = window.PLAYERS.filter(p => p.team === t.name).length;
        const big = view === 'general' ? t.total : t._racePts;

        return (
          <button key={t.name} onClick={() => onOpen(t.name)}
            className="lp-row touchable" style={{
              animationDelay: `${idx * 20}ms`,
              position: 'relative',
              background: isLeader
                ? `linear-gradient(100deg, ${teamColor}28, ${P.surface} 60%)`
                : P.surface,
              borderRadius: 14, padding: '12px 12px 12px 14px',
              display: 'flex', alignItems: 'center', gap: 11,
              overflow: 'hidden', cursor: 'pointer',
              boxShadow: isLeader
                ? `0 8px 20px -8px ${teamColor}66, inset 0 1px 0 ${P.text}14`
                : `0 2px 6px rgba(0,0,0,0.25), inset 0 1px 0 ${P.text}08`,
              border: `1px solid ${isLeader ? teamColor + '55' : P.text + '10'}`,
              color: 'inherit', textAlign: 'left', fontFamily: 'inherit', width: '100%',
            }}>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: 4, background: teamColor }} />
            <div style={{ width: 38, flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
              {isPodium ? <PodiumBadge pos={rank} size={30} /> : (
                <div style={{ fontSize: 19, fontWeight: 800, color: P.muted, letterSpacing: -0.5 }}>{rank}</div>
              )}
              {view === 'general' && <DeltaChip delta={t.delta} size="sm" />}
            </div>
            <TeamAvatar team={t.name} emoji={t.emoji} size={46} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 15.5, fontWeight: 800, letterSpacing: -0.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.name}</div>
              <div style={{ fontSize: 11, color: P.muted, fontWeight: 600, marginTop: 2 }}>{count} {count === 1 ? 'piloto' : 'pilotos'}</div>
            </div>
            <div style={{ flexShrink: 0, textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 3 }}>
              <div style={{
                fontSize: 22, fontWeight: 900,
                color: big < 0 ? P.danger : P.text,
                letterSpacing: -0.7, lineHeight: 1,
              }}>{view === 'general' ? big : (big > 0 ? '+' + big : big)}</div>
              {view === 'general'
                ? <LastChip last={t.last} />
                : <div style={{ fontSize: 10, fontWeight: 700, color: P.muted }}>tot. {t.total}</div>}
            </div>
          </button>
        );
      })}
    </div>
  );
}

Object.assign(window, { ScreenHome });
