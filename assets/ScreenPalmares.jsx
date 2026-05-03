// screen-palmares.jsx — Palmarés histórico + tablas finales + GP Porra (tiempos)

function ScreenPalmares({ onBack }) {
  const P = window.PALETTE;
  const [tab, setTab] = React.useState('pilotos');

  // Año seleccionado para mostrar la tabla final.
  // Valor 'total' = tabla acumulada de todas las temporadas.
  const driverYears = Object.keys(window.HISTORY_DRIVERS).map(Number).sort((a, b) => b - a);
  const teamYears = Object.keys(window.HISTORY_TEAMS).map(Number).sort((a, b) => b - a);
  const driverOptions = ['total', ...driverYears];
  const teamOptions = ['total', ...teamYears];
  const [driverYear, setDriverYear] = React.useState(driverYears[0]);
  const [teamYear, setTeamYear] = React.useState(teamYears[0]);

  // Mejores tiempos: seco / mojado
  const [trackCond, setTrackCond] = React.useState('dry');

  return (
    <div className="lp-screen" style={{
      width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden',
      background: P.bg, color: P.text, paddingBottom: 60,
      fontFamily: '"Space Grotesk", -apple-system, system-ui, sans-serif',
    }}>
      <ScrollGloss />
      <div style={{
        padding: 'max(32px, env(safe-area-inset-top)) 20px 20px',
        background: `linear-gradient(180deg, #FFD93D22 0%, transparent 80%)`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
          <BackButton onClick={onBack} />
          <div style={{ fontSize: 11, fontWeight: 700, color: P.muted, letterSpacing: 1.5 }}>
            PALMARÉS · 2021 — 2025
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ fontSize: 46 }}>🏆</div>
          <div>
            <div style={{ fontSize: 30, fontWeight: 900, letterSpacing: -1.1, lineHeight: 1 }}>Palmarés</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: P.muted, marginTop: 4 }}>
              Campeones, equipos y GP de la Porra
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{
          marginTop: 20, padding: 4,
          background: 'rgba(255,255,255,0.06)',
          borderRadius: 12, display: 'flex', gap: 2,
          border: `1px solid ${P.text}11`,
        }}>
          {[
            { k: 'pilotos', label: 'Pilotos' },
            { k: 'equipos', label: 'Equipos' },
            { k: 'kart', label: 'GP Porra' },
          ].map(t => (
            <button key={t.k} onClick={() => setTab(t.k)} className="touchable" style={{
              flex: 1, padding: '8px 0', borderRadius: 9,
              fontSize: 12.5, fontWeight: 700,
              background: tab === t.k ? P.accent : 'transparent',
              color: tab === t.k ? '#fff' : P.muted,
              border: 'none', cursor: 'pointer', fontFamily: 'inherit',
            }}>{t.label}</button>
          ))}
        </div>
      </div>

      <div style={{ padding: '6px 16px' }}>
        {tab === 'pilotos' && (
          <>
            <SectionTitle>Mundial de pilotos</SectionTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {window.PALMARES_DRIVERS.slice().reverse().map((p, i) => (
                <TrophyRow key={p.year}
                  year={p.year}
                  title={p.winner}
                  subtitle={p.team}
                  iconBg={i === 0 ? 'linear-gradient(135deg,#FFD93D,#FFB800)' : 'rgba(255,255,255,0.08)'}
                  iconColor={i === 0 ? '#1a1a1a' : P.muted}
                  latest={i === 0}
                  icon="🏆"
                />
              ))}
            </div>

            <SectionTitle>Tabla final por temporada</SectionTitle>
            <YearChips options={driverOptions} value={driverYear} onChange={setDriverYear} palette={P} />
            <FinalStandings
              rows={driverYear === 'total' ? window.TOTAL_DRIVERS : window.HISTORY_DRIVERS[driverYear]}
              mode="driver"
            />
          </>
        )}

        {tab === 'equipos' && (
          <>
            <SectionTitle>Mundial de constructores</SectionTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {window.PALMARES_TEAMS.slice().reverse().map((t, i) => (
                <TrophyRow key={t.year}
                  year={t.year}
                  emoji={t.emoji}
                  title={t.name}
                  subtitle={t.roster}
                  latest={i === 0}
                />
              ))}
            </div>

            <SectionTitle>Tabla final por temporada</SectionTitle>
            <YearChips options={teamOptions} value={teamYear} onChange={setTeamYear} palette={P} />
            <FinalStandings
              rows={teamYear === 'total' ? window.TOTAL_TEAMS : window.HISTORY_TEAMS[teamYear]}
              mode="team"
            />

            <SectionTitle>Salón de la fama · equipos históricos</SectionTitle>
            <div style={{
              background: P.surface, border: `1px solid ${P.text}10`,
              borderRadius: 14, padding: '6px 4px',
            }}>
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 0,
              }}>
                {window.HALL_OF_FAME_TEAMS.map((t, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '8px 8px',
                    minWidth: 0,
                    borderBottom: i < window.HALL_OF_FAME_TEAMS.length - (window.HALL_OF_FAME_TEAMS.length % 2 === 0 ? 2 : 1)
                      ? `1px solid ${P.text}08` : 'none',
                  }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: 8,
                      background: 'rgba(255,255,255,0.05)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 14, flexShrink: 0,
                    }}>{t.emoji}</div>
                    <div style={{
                      fontSize: 11.5, fontWeight: 700,
                      letterSpacing: -0.1,
                      whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                      minWidth: 0,
                    }}>{t.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ fontSize: 10, color: P.mutedDim, textAlign: 'center', marginTop: 10, fontWeight: 600, fontStyle: 'italic' }}>
              {window.HALL_OF_FAME_TEAMS.length} equipos han competido desde 2021
            </div>
          </>
        )}

        {tab === 'kart' && (
          <>
            <SectionTitle>GP de la Porra · Go Kart Porriño</SectionTitle>
            <div style={{
              padding: '10px 12px', borderRadius: 12, marginBottom: 10,
              background: `${P.accent}12`, border: `1px dashed ${P.accent}40`,
              fontSize: 11.5, lineHeight: 1.45, color: P.muted, fontWeight: 600,
            }}>
              🏁 Carrera presencial anual de karting entre los participantes.
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {window.PALMARES_KART.slice().reverse().map((k, i) => (
                <div key={k.year} className="lp-row" style={{
                  animationDelay: `${i * 40}ms`,
                  background: P.surface, borderRadius: 14,
                  padding: '12px 14px',
                  border: `1px solid ${i === 0 ? '#FFD93D55' : P.text + '10'}`,
                  display: 'flex', alignItems: 'center', gap: 12,
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 11,
                    background: i === 0
                      ? 'linear-gradient(135deg,#FFD93D,#FFB800)'
                      : 'rgba(255,255,255,0.06)',
                    color: i === 0 ? '#1a1a1a' : P.muted,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'ui-monospace, "SF Mono", monospace',
                    fontWeight: 900,
                  }}>
                    <div style={{ fontSize: 9, letterSpacing: 0.5, opacity: 0.8 }}>GP</div>
                    <div style={{ fontSize: 13, letterSpacing: -0.2 }}>{k.year}</div>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 10, fontWeight: 800, color: P.muted, letterSpacing: 1 }}>CAMPEÓN</div>
                    <div style={{ fontSize: 17, fontWeight: 900, letterSpacing: -0.4, marginTop: 1 }}>🏆 {k.winner}</div>
                    <div style={{ fontSize: 11, color: '#C8A2FF', fontWeight: 700, marginTop: 3 }}>
                      ⚡ Vuelta rápida: {k.fastest}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mejores tiempos */}
            <SectionTitle>Mejores tiempos</SectionTitle>
            <div style={{
              padding: 4, borderRadius: 12, marginBottom: 10,
              background: 'rgba(255,255,255,0.06)',
              border: `1px solid ${P.text}11`,
              display: 'flex', gap: 2,
            }}>
              {[
                { k: 'dry', label: '☀️ En seco', activeBg: P.accent2, activeFg: '#1a1a1a' },
                { k: 'wet', label: '🌧️ En mojado', activeBg: '#3DA5F5', activeFg: '#0A1A2A' },
              ].map(c => (
                <button key={c.k} onClick={() => setTrackCond(c.k)} className="touchable" style={{
                  flex: 1, padding: '8px 0', borderRadius: 9,
                  fontSize: 12, fontWeight: 700,
                  background: trackCond === c.k ? c.activeBg : 'transparent',
                  color: trackCond === c.k ? c.activeFg : P.muted,
                  border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                }}>{c.label}</button>
              ))}
            </div>

            {trackCond === 'wet' && (
              <div style={{
                margin: '6px 4px 18px',
                textAlign: 'center',
              }}>
                <div style={{
                  fontSize: 16, lineHeight: 1.4, fontWeight: 600,
                  fontStyle: 'italic', color: P.text,
                  letterSpacing: -0.2,
                }}>
                  “The rain puts the cars on the same level, but not the drivers.”
                </div>
                <div style={{
                  fontSize: 11, fontWeight: 700, color: P.muted,
                  marginTop: 8, letterSpacing: 1, textTransform: 'uppercase',
                }}>
                  — Ayrton Senna
                </div>
              </div>
            )}

            <LapTimes rows={trackCond === 'dry' ? window.BEST_LAPS_DRY : window.BEST_LAPS_WET} />
          </>
        )}
      </div>
    </div>
  );
}

function YearChips({ options, value, onChange, palette }) {
  // options puede ser ['total', 2025, 2024, ...] — 'total' se renderiza distinto
  return (
    <div style={{
      display: 'flex', gap: 6, marginBottom: 10,
      overflowX: 'auto', overflowY: 'hidden',
      WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none',
      paddingBottom: 2,
    }}>
      {options.map(opt => {
        const active = opt === value;
        const isTotal = opt === 'total';
        const label = isTotal ? 'Σ Total' : opt;
        const bg = active
          ? (isTotal ? palette.accent2 : palette.accent)
          : 'rgba(255,255,255,0.04)';
        const fg = active
          ? (isTotal ? '#1a1a1a' : '#fff')
          : palette.muted;
        const border = active
          ? (isTotal ? palette.accent2 : palette.accent)
          : (palette.text + '10');
        return (
          <button key={String(opt)} onClick={() => onChange(opt)} className="touchable" style={{
            flexShrink: 0, padding: '6px 12px',
            borderRadius: 999, fontSize: 12, fontWeight: 800,
            background: bg, color: fg,
            border: `1px solid ${border}`,
            cursor: 'pointer', fontFamily: 'inherit',
            letterSpacing: 0.3, whiteSpace: 'nowrap',
          }}>{label}</button>
        );
      })}
    </div>
  );
}

function FinalStandings({ rows, mode }) {
  const P = window.PALETTE;
  if (!rows || !rows.length) {
    return (
      <div style={{
        padding: '12px 14px', borderRadius: 12,
        background: P.surface, border: `1px dashed ${P.text}15`,
        fontSize: 12, color: P.muted, textAlign: 'center',
      }}>Sin datos disponibles</div>
    );
  }
  return (
    <div style={{
      background: P.surface, border: `1px solid ${P.text}10`,
      borderRadius: 14, padding: 4, overflow: 'hidden',
    }}>
      {rows.map((row, i) => {
        const pos = i + 1;
        const isPodium = pos <= 3;
        const name = row[0];
        const emoji = mode === 'team' ? row[1] : null;
        const pts = mode === 'team' ? row[2] : row[1];
        return (
          <div key={`${name}-${i}`} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '9px 10px',
            borderBottom: i < rows.length - 1 ? `1px solid ${P.text}0A` : 'none',
          }}>
            <div style={{
              width: 26, flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {isPodium
                ? <PodiumBadge pos={pos} size={24} />
                : <div style={{ fontSize: 12, fontWeight: 800, color: P.muted, letterSpacing: -0.3 }}>{pos}</div>}
            </div>
            {emoji && (
              <div style={{ fontSize: 18, width: 22, textAlign: 'center', flexShrink: 0 }}>{emoji}</div>
            )}
            <div style={{
              flex: 1, fontSize: 13, fontWeight: 800, letterSpacing: -0.2,
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            }}>{name}</div>
            <div style={{
              fontSize: 14, fontWeight: 900, letterSpacing: -0.4,
              color: pts < 0 ? P.danger : P.text,
              fontFamily: 'ui-monospace, "SF Mono", monospace',
              minWidth: 36, textAlign: 'right',
            }}>{pts}</div>
          </div>
        );
      })}
    </div>
  );
}

function LapTimes({ rows }) {
  const P = window.PALETTE;
  return (
    <div style={{
      background: P.surface, border: `1px solid ${P.text}10`,
      borderRadius: 14, padding: 4, overflow: 'hidden',
    }}>
      {rows.map((r, i) => {
        const isPodium = r.pos <= 3;
        return (
          <div key={r.pos} style={{
            display: 'grid',
            gridTemplateColumns: '28px 1fr 64px 72px',
            alignItems: 'center', gap: 8,
            padding: '9px 10px',
            borderBottom: i < rows.length - 1 ? `1px solid ${P.text}0A` : 'none',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {isPodium
                ? <PodiumBadge pos={r.pos} size={24} />
                : <div style={{ fontSize: 12, fontWeight: 800, color: P.muted, letterSpacing: -0.3 }}>{r.pos}</div>}
            </div>
            <div style={{
              fontSize: 13, fontWeight: 800, letterSpacing: -0.2,
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            }}>{r.name}</div>
            <div style={{
              fontSize: 11, fontWeight: 700,
              color: r.gap ? P.muted : P.accent2,
              fontFamily: 'ui-monospace, "SF Mono", monospace',
              textAlign: 'right',
            }}>{r.gap || '—'}</div>
            <div style={{
              fontSize: 13, fontWeight: 900, letterSpacing: -0.3,
              color: P.text,
              fontFamily: 'ui-monospace, "SF Mono", monospace',
              textAlign: 'right',
            }}>{r.time}</div>
          </div>
        );
      })}
    </div>
  );
}

function TrophyRow({ year, emoji, title, subtitle, icon = '🏆', iconBg, iconColor, latest }) {
  const P = window.PALETTE;
  const bg = iconBg || (latest
    ? 'linear-gradient(135deg,#FFD93D,#FFB800)'
    : 'rgba(255,255,255,0.08)');
  const col = iconColor || (latest ? '#1a1a1a' : P.muted);
  return (
    <div className="lp-row" style={{
      background: P.surface, border: `1px solid ${latest ? '#FFD93D44' : P.text + '10'}`,
      borderRadius: 14, padding: '11px 12px',
      display: 'flex', alignItems: 'center', gap: 12,
    }}>
      <div style={{
        width: 46, height: 46, borderRadius: 12,
        background: bg, color: col,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        fontWeight: 900, flexShrink: 0,
      }}>
        <div style={{ fontSize: 16, lineHeight: 1 }}>{emoji || icon}</div>
        <div style={{ fontSize: 9, fontFamily: 'ui-monospace, monospace', letterSpacing: 0.3, marginTop: 1 }}>{year}</div>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: -0.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {title}
        </div>
        {subtitle && (
          <div style={{
            fontSize: 10.5, color: P.muted, fontWeight: 600, marginTop: 2,
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>{subtitle}</div>
        )}
      </div>
      {latest && (
        <div style={{
          fontSize: 9, fontWeight: 900, letterSpacing: 0.8,
          padding: '3px 6px', borderRadius: 5,
          background: '#FFD93D', color: '#1a1a1a',
        }}>VIGENTE</div>
      )}
    </div>
  );
}

Object.assign(window, { ScreenPalmares });
