// screen-next.jsx — Próxima carrera: deadline + sesiones + datos circuito + curiosidades

function ScreenNext({ onBack }) {
  const P = window.PALETTE;
  const r = window.NEXT_RACE;
  const c = window.NEXT_CIRCUIT;
  const history = window.NEXT_HISTORY || [];

  return (
    <div className="lp-screen" style={{
      width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden',
      background: P.bg, color: P.text, paddingBottom: 60,
      fontFamily: '"Space Grotesk", -apple-system, system-ui, sans-serif',
    }}>
      <ScrollGloss />
      <div style={{
        padding: 'max(32px, env(safe-area-inset-top)) 20px 22px',
        background: `linear-gradient(180deg, ${P.accent2}28 0%, ${P.accent2}08 55%, transparent 100%)`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
          <BackButton onClick={onBack} />
          <div style={{ fontSize: 11, fontWeight: 700, color: P.muted, letterSpacing: 1.5 }}>
            PRÓXIMA · CARRERA {r.n} / 22
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ fontSize: 60, lineHeight: 1 }}>{r.emoji}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 30, fontWeight: 900, lineHeight: 1, letterSpacing: -1.1 }}>GP {r.name}</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: P.muted, marginTop: 4 }}>
              {r.circuit}
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              marginTop: 8, padding: '3px 8px', borderRadius: 6,
              background: `${P.accent2}1F`, border: `1px solid ${P.accent2}40`,
              fontSize: 11, fontWeight: 800, letterSpacing: 0.4, color: P.accent2,
            }}>
              📅 {r.date}
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '8px 16px' }}>
        {/* Deadline destacado y prioritario */}
        {c.deadline && (
          <div style={{
            margin: '8px 0 14px',
            padding: '16px 18px',
            borderRadius: 16,
            background: `linear-gradient(135deg, ${P.accent}, #B30500)`,
            color: '#fff',
            boxShadow: `0 12px 24px -8px ${P.accent}88, inset 0 1px 0 rgba(255,255,255,0.18)`,
            border: `1px solid ${P.accent}`,
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: -30, right: -30,
              fontSize: 130, opacity: 0.12, lineHeight: 1,
            }}>⏱️</div>
            <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: 2, opacity: 0.9 }}>
              ⚠️ NO TE OLVIDES
            </div>
            <div style={{
              fontSize: 14, fontWeight: 700, marginTop: 6, opacity: 0.95, letterSpacing: -0.1,
            }}>
              {c.deadline.label}
            </div>
            <div style={{
              fontSize: 22, fontWeight: 900, marginTop: 4, letterSpacing: -0.6, lineHeight: 1.1,
            }}>
              {c.deadline.when}
            </div>
          </div>
        )}

        {/* Sesiones del fin de semana */}
        {c.sessions && c.sessions.length > 0 && (
          <>
            <SectionTitle>Horarios del GP</SectionTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {c.sessions.map((day, di) => (
                <div key={di} style={{
                  background: P.surface, border: `1px solid ${P.text}10`,
                  borderRadius: 14, overflow: 'hidden',
                }}>
                  <div style={{
                    padding: '8px 14px',
                    background: `${P.accent2}10`,
                    borderBottom: `1px solid ${P.text}10`,
                    fontSize: 11, fontWeight: 800, letterSpacing: 0.6,
                    color: P.accent2, textTransform: 'uppercase',
                  }}>{day.day}</div>
                  {day.items.map((it, ii) => (
                    <div key={ii} style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      padding: '11px 14px',
                      borderBottom: ii < day.items.length - 1 ? `1px solid ${P.text}0A` : 'none',
                      background: it.highlight ? `${P.accent}10` : 'transparent',
                    }}>
                      <div style={{
                        fontSize: 13, fontWeight: it.highlight ? 900 : 700,
                        color: it.highlight ? P.accent : P.text,
                        letterSpacing: -0.1, flex: 1,
                      }}>{it.label}</div>
                      <div style={{
                        fontSize: 14, fontWeight: 900, letterSpacing: -0.3,
                        color: it.highlight ? P.accent : P.text,
                        fontFamily: 'ui-monospace, "SF Mono", monospace',
                      }}>{it.time}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </>
        )}

        {/* Datos del circuito */}
        <SectionTitle>Datos del circuito</SectionTitle>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2,1fr)',
          gap: 1, background: P.text + '10',
          borderRadius: 14, overflow: 'hidden',
          border: `1px solid ${P.text}10`,
        }}>
          <Fact label="Longitud" value={r.length} />
          <Fact label="Vueltas" value={r.laps} />
          <Fact label="Curvas" value={r.corners} />
          <Fact label="Ediciones" value={c.editions} />
          <Fact label="Primera carrera" value={c.firstGp} />
          <Fact label="Récord vuelta" value={r.lapRecord} mono full />
        </div>

        {/* Records F1 en el circuito */}
        <SectionTitle>Récords en {r.name}</SectionTitle>
        <div style={{
          background: P.surface, border: `1px solid ${P.text}10`,
          borderRadius: 14, padding: 4, overflow: 'hidden',
        }}>
          <RecordRow
            icon="🏆"
            label="Más victorias"
            primary={`${c.mostWinsDriver.name} · ${c.mostWinsDriver.wins}`}
            sub={c.mostWinsCoLeader ? `Empatado con ${c.mostWinsCoLeader.name} (${c.mostWinsCoLeader.wins})` : null}
          />
          <RecordRow
            icon="⚡"
            label="Récord vuelta rápida"
            primary={r.lapRecord.split('—')[0].trim()}
            sub={r.lapRecord.split('—')[1] ? r.lapRecord.split('—')[1].trim() : ''}
            last
          />
        </div>

        {/* Pole positions histórico */}
        {c.polePositions && c.polePositions.length > 0 && (
          <>
            <SectionTitle>Pole positions</SectionTitle>
            <div style={{
              background: P.surface, border: `1px solid ${P.text}10`,
              borderRadius: 14, padding: 4, overflow: 'hidden',
            }}>
              {c.polePositions.map((p, i) => (
                <div key={p.year} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '9px 12px',
                  borderBottom: i < c.polePositions.length - 1 ? `1px solid ${P.text}0A` : 'none',
                }}>
                  <div style={{
                    fontSize: 11, fontWeight: 900, letterSpacing: 0.5,
                    color: P.muted, fontFamily: 'ui-monospace, "SF Mono", monospace',
                    width: 38,
                  }}>{p.year}</div>
                  <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: -0.2, flex: 1 }}>
                    {p.driver}
                  </div>
                  <div style={{ fontSize: 9, fontWeight: 800, color: P.accent2, letterSpacing: 1.2 }}>POLE</div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Datos curiosos */}
        {c.funFacts && c.funFacts.length > 0 && (
          <>
            <SectionTitle>Datos curiosos</SectionTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {c.funFacts.map((fact, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 10,
                  background: P.surface, borderRadius: 12, padding: '11px 12px',
                  border: `1px solid ${P.text}10`,
                }}>
                  <div style={{
                    width: 24, height: 24, borderRadius: 6,
                    background: `${P.accent2}1F`, color: P.accent2,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 900, flexShrink: 0,
                    fontFamily: 'ui-monospace, monospace',
                  }}>{i + 1}</div>
                  <div style={{ fontSize: 12.5, lineHeight: 1.45, fontWeight: 600, color: P.text, opacity: 0.92 }}>
                    {fact}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Histórico ganadores de la porra en este circuito (opcional) */}
        {history.length > 0 && (
          <>
            <SectionTitle>Mejor de la porra · histórico {r.name}</SectionTitle>
            <div style={{
              background: P.surface, border: `1px solid ${P.text}10`,
              borderRadius: 14, padding: 4, overflow: 'hidden',
            }}>
              {history.slice().reverse().map((h, i) => {
                const isLatest = i === 0;
                return (
                  <div key={h.year} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '10px 12px',
                    borderBottom: i < history.length - 1 ? `1px solid ${P.text}0A` : 'none',
                    background: isLatest ? `${P.accent2}0E` : 'transparent',
                    borderRadius: isLatest ? 10 : 0,
                  }}>
                    <div style={{
                      fontSize: 11, fontWeight: 900, letterSpacing: 0.5,
                      color: isLatest ? P.accent2 : P.muted,
                      fontFamily: 'ui-monospace, "SF Mono", monospace',
                      width: 38,
                    }}>{h.year}</div>
                    <div style={{
                      width: 28, height: 28, borderRadius: 8,
                      background: isLatest ? `linear-gradient(135deg,#FFD93D,#FFB800)` : 'rgba(255,255,255,0.06)',
                      color: isLatest ? '#1a1a1a' : P.muted,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 14,
                    }}>🏆</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: -0.2 }}>{h.player}</div>
                      <div style={{ fontSize: 10.5, color: P.muted, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {h.team}{h.note ? ` · ${h.note}` : ''}
                      </div>
                    </div>
                    <div style={{
                      fontSize: 16, fontWeight: 900, letterSpacing: -0.5,
                      color: P.text,
                    }}>+{h.pts}</div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Fact({ label, value, mono, full }) {
  const P = window.PALETTE;
  return (
    <div style={{
      background: P.surface, padding: '10px 12px',
      gridColumn: full ? '1 / -1' : 'auto',
    }}>
      <div style={{ fontSize: 9, fontWeight: 800, color: P.muted, letterSpacing: 1.2 }}>{label.toUpperCase()}</div>
      <div style={{
        fontSize: mono ? 12 : 16, fontWeight: mono ? 700 : 800, marginTop: 3, letterSpacing: -0.2,
        fontFamily: mono ? 'ui-monospace, "SF Mono", monospace' : 'inherit',
        color: P.text,
      }}>{value}</div>
    </div>
  );
}

function RecordRow({ icon, label, primary, sub, last }) {
  const P = window.PALETTE;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '11px 12px',
      borderBottom: last ? 'none' : `1px solid ${P.text}0A`,
    }}>
      <div style={{
        width: 32, height: 32, borderRadius: 9,
        background: 'rgba(255,255,255,0.06)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 16, flexShrink: 0,
      }}>{icon}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 9.5, fontWeight: 800, color: P.muted, letterSpacing: 1.2 }}>{label.toUpperCase()}</div>
        <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: -0.2, marginTop: 2 }}>{primary}</div>
        {sub && (
          <div style={{ fontSize: 10.5, fontWeight: 600, color: P.muted, marginTop: 2 }}>{sub}</div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { ScreenNext });
