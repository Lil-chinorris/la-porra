// screen-home.jsx — Home con scroll horizontal de carreras + tabs

function CuloSeparator() {
  const P = window.PALETTE;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      margin: '4px 4px 2px',
    }}>
      <div style={{ flex: 1, height: 1, background: `${P.text}14` }} />
      <div style={{
        fontSize: 10, fontWeight: 900, letterSpacing: 2,
        color: P.danger, textTransform: 'uppercase',
        padding: '3px 10px', borderRadius: 999,
        background: `${P.danger}1A`,
        border: `1px solid ${P.danger}40`,
      }}>💩 {t('culo')}</div>
      <div style={{ flex: 1, height: 1, background: `${P.text}14` }} />
    </div>
  );
}

function ScreenHome({ onOpenPlayer, onOpenTeam, onOpenRace, onOpenNext, onOpenPalmares, onOpenPro, onOpenDesafios }) {
  const P = window.PALETTE;
  const [tab, setTab] = React.useState('pilotos');
  // view: 'general' | `race-N`
  const [view, setView] = React.useState('general');

  // Carrusel de carreras: arranca en la ÚLTIMA carrera disputada,
  // de modo que se vea  General | última | próxima | ...
  // Alineamos por getBoundingClientRect (no por offsetLeft) para que sea
  // robusto al offsetParent y al ancho variable de "General" en cada idioma.
  const raceScrollRef = React.useRef(null);
  React.useEffect(() => {
    const el = raceScrollRef.current;
    if (!el) return;
    const align = () => {
      const target = el.querySelector('[data-last="1"]') || el.querySelector('[data-next="1"]');
      if (!target) return;
      const delta = target.getBoundingClientRect().left - el.getBoundingClientRect().left;
      el.scrollLeft += delta;
    };
    align();
    // reajuste tras cargar fuentes/emojis (pueden cambiar anchos)
    const raf = requestAnimationFrame(align);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Botón cuadrado (solo icono) para Palmarés / Desafíos
  const iconBtn = {
    width: 40, height: 38, borderRadius: 10, padding: 0,
    background: 'rgba(255,255,255,0.06)',
    border: `1px solid ${P.text}15`, color: P.text,
    fontSize: 17, cursor: 'pointer', fontFamily: 'inherit',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  };

  return (
    <div className="lp-screen" style={{
      width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden',
      background: `radial-gradient(130% 60% at 50% 0%, ${P.bg2} 0%, ${P.bg} 55%)`,
      color: P.text, paddingBottom: 100,
      fontFamily: '"Space Grotesk", -apple-system, system-ui, sans-serif',
    }}>
      <ScrollGloss />
      {/* Header */}
      <div style={{ padding: 'max(32px, env(safe-area-inset-top)) 20px 10px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 10 }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: 2.5, fontWeight: 700, color: P.accent, marginBottom: 6 }}>
            ◆ {t('CAMPEONATO 2026')}
          </div>
          <div style={{ fontSize: 40, fontWeight: 900, lineHeight: 1, letterSpacing: -1.4 }}>
            La Porra<span style={{ color: P.accent }}>.</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 6, alignItems: 'center' }}>
          <button onClick={onOpenPalmares} className="touchable" style={iconBtn}
            aria-label={t('Palmarés')} title={t('Palmarés')}>🏆</button>
          <button onClick={onOpenDesafios} className="touchable" style={iconBtn}
            aria-label={t('Desafíos')} title={t('Desafíos')}>🎖️</button>
          <LangMenu />
        </div>
      </div>

      {/* Banner La Porra Pro */}
      <button onClick={onOpenPro} className="touchable" style={{
        margin: '8px 20px 4px', width: 'calc(100% - 40px)',
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '10px 12px', borderRadius: 12,
        background: `linear-gradient(100deg, ${P.accent2}1A, rgba(255,255,255,0.03) 70%)`,
        border: `1px solid ${P.accent2}33`,
        cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left',
      }}>
        <div style={{ fontSize: 18 }}>✨</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: -0.2, color: P.text }}>
            {t('Consigue más con La Porra Pro')}
          </div>
        </div>
        <span style={{
          fontSize: 12, fontWeight: 800, letterSpacing: 0.2,
          color: '#1a1a1a', background: P.accent2,
          padding: '5px 12px', borderRadius: 999,
          flexShrink: 0,
        }}>{t('Actualizar')}</span>
      </button>

      {/* Tabs Pilotos / Equipos */}
      <div style={{
        margin: '14px 20px 10px', padding: 4,
        background: 'rgba(255,255,255,0.06)', borderRadius: 12,
        display: 'flex', gap: 2, border: `1px solid ${P.text}11`,
      }}>
        {[
          { k: 'pilotos', label: t('Pilotos') },
          { k: 'equipos', label: t('Equipos') },
        ].map(tb => (
          <button key={tb.k} onClick={() => setTab(tb.k)} className="touchable" style={{
            flex: 1, padding: '9px 0', borderRadius: 9,
            fontSize: 13, fontWeight: 700,
            background: tab === tb.k ? P.accent : 'transparent',
            color: tab === tb.k ? '#fff' : P.muted,
            border: 'none', cursor: 'pointer', fontFamily: 'inherit',
          }}>{tb.label}</button>
        ))}
      </div>

      {/* Selector de carreras: "General" fijo a la izquierda + carrusel de carreras */}
      <div style={{
        display: 'flex', gap: 6, padding: '4px 16px 10px', alignItems: 'center',
      }}>
        <style>{`.lp-race-scroll::-webkit-scrollbar{display:none}`}</style>
        {/* General — siempre visible, no entra en el scroll */}
        <Chip active={view === 'general'} onClick={() => setView('general')}
          palette={P}>{t('General')}</Chip>
        {/* Carrusel de carreras (arranca en el GP próximo) */}
        <div ref={raceScrollRef} className="lp-race-scroll" style={{
          position: 'relative',
          display: 'flex', gap: 6, flex: 1, minWidth: 0,
          overflowX: 'auto', overflowY: 'hidden',
          WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none',
        }}>
          {window.CALENDAR.map(r => {
            const isLast = r.n === window.RACE_NUMBER;
            const done = r.status === 'done';
            const isNext = r.status === 'next';
            const future = r.status === 'future';
            const onClick = done
              ? () => setView(`race-${r.n}`)
              : isNext
                ? onOpenNext
                : null;
            return (
              <Chip key={r.n} active={view === `race-${r.n}`}
                onClick={onClick}
                disabled={future}
                palette={P}
                dataNext={isNext}
                dataLast={isLast}
                badge={isLast ? t('Últ.') : isNext ? t('Próx.') : null}
                variant={isNext ? 'next' : future ? 'future' : 'done'}>
                <span style={{ marginRight: 4, opacity: future ? 0.55 : 1 }}>{r.emoji}</span>
                <span>{r.short}</span>
              </Chip>
            );
          })}
        </div>
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
                {t('CARRERA')} {n} · {r.date}
              </div>
              <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: -0.2 }}>
                GP {r.name} · {t('Ver resultados')}
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
            {t('PRÓXIMA · CARRERA')} {window.NEXT_RACE.n}
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

      {/* Normas de la porra (abre el PDF de Drive en nueva pestaña) */}
      <a href={window.RULES_URL} target="_blank" rel="noopener noreferrer" style={{
        margin: '12px 20px 0', width: 'calc(100% - 40px)',
        padding: '14px 16px', borderRadius: 14,
        background: P.surface, border: `1px solid ${P.text}15`,
        display: 'flex', alignItems: 'center', gap: 12,
        color: P.text, cursor: 'pointer', textAlign: 'left',
        fontFamily: 'inherit', textDecoration: 'none',
      }}>
        <div style={{ fontSize: 28 }}>📜</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: P.muted, letterSpacing: 1.2 }}>
            DOCUMENTO OFICIAL
          </div>
          <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: -0.2 }}>
            {t('Normas de la porra')}
          </div>
          <div style={{ fontSize: 11, color: P.muted, fontWeight: 700, marginTop: 2 }}>
            Abre en Google Drive
          </div>
        </div>
        <svg width="14" height="14" viewBox="0 0 16 16" style={{ opacity: 0.6 }}>
          <path d="M3 13L13 3M13 3H6M13 3v7" stroke={P.text} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  );
}

function Chip({ active, onClick, children, palette, badge, disabled, variant, dataNext, dataLast }) {
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
      data-next={dataNext ? '1' : undefined}
      data-last={dataLast ? '1' : undefined}
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
          : <div style={{ fontSize: 10, fontWeight: 700, color: P.muted }}>{t('tot.')} {p.total}</div>;
        // Separador "culo" antes del último de la tabla general
        const showCulo = view === 'general' && idx === list.length - 1;

        return (
          <React.Fragment key={p.name}>
            {showCulo && <CuloSeparator />}
          <button onClick={() => onOpen(p.name)}
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
          </React.Fragment>
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
      .map(t => ({ ...t, _racePts: rr[tm.name] ?? 0 }))
      .sort((a, b) => b._racePts - a._racePts)
      .map((t, i) => ({ ...t, _rank: i + 1 }));
  }, [view]);

  return (
    <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
      {list.map((tm, idx) => {
        const teamColor = P.teams[tm.name] || P.accent;
        const rank = view === 'general' ? tm.pos : tm._rank;
        const isPodium = rank <= 3;
        const isLeader = rank === 1;
        const count = window.PLAYERS.filter(p => p.team === tm.name).length;
        const big = view === 'general' ? tm.total : tm._racePts;
        const showCulo = view === 'general' && idx === list.length - 1;

        return (
          <React.Fragment key={tm.name}>
            {showCulo && <CuloSeparator />}
          <button onClick={() => onOpen(tm.name)}
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
              {view === 'general' && <DeltaChip delta={tm.delta} size="sm" />}
            </div>
            <TeamAvatar team={tm.name} emoji={tm.emoji} size={46} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 15.5, fontWeight: 800, letterSpacing: -0.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{tm.name}</div>
              <div style={{ fontSize: 11, color: P.muted, fontWeight: 600, marginTop: 2 }}>{count} {count === 1 ? t('piloto') : t('pilotos')}</div>
            </div>
            <div style={{ flexShrink: 0, textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 3 }}>
              <div style={{
                fontSize: 22, fontWeight: 900,
                color: big < 0 ? P.danger : P.text,
                letterSpacing: -0.7, lineHeight: 1,
              }}>{view === 'general' ? big : (big > 0 ? '+' + big : big)}</div>
              {view === 'general'
                ? <LastChip last={tm.last} />
                : <div style={{ fontSize: 10, fontWeight: 700, color: P.muted }}>{t('tot.')} {tm.total}</div>}
            </div>
          </button>
          </React.Fragment>
        );
      })}
    </div>
  );
}

Object.assign(window, { ScreenHome });
