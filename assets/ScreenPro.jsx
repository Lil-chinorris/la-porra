// screen-pro.jsx — Paywall paródico de "La Porra Pro" (hoja que sube desde abajo)

function ScreenPro({ onBack }) {
  const P = window.PALETTE;
  const plans = window.PRO_PLANS;
  const [billing, setBilling] = React.useState('monthly'); // 'monthly' | 'yearly'
  const [comunicado, setComunicado] = React.useState(null); // null | 'pro' | 'max'

  if (comunicado) {
    return <ProComunicado id={comunicado} onClose={() => setComunicado(null)} />;
  }

  return (
    <div className="lp-screen lp-sheet" style={{
      width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden',
      background: `radial-gradient(120% 50% at 50% 0%, ${P.bg2} 0%, ${P.bg} 60%)`,
      color: P.text, paddingBottom: 40,
      fontFamily: '"Space Grotesk", -apple-system, system-ui, sans-serif',
    }}>
      {/* Tirador + cerrar */}
      <div style={{ padding: 'max(14px, env(safe-area-inset-top)) 20px 0', position: 'relative' }}>
        <div style={{
          width: 40, height: 5, borderRadius: 999,
          background: `${P.text}22`, margin: '0 auto 14px',
        }} />
        <button onClick={onBack} className="touchable" aria-label="Cerrar" style={{
          position: 'absolute', top: 'max(14px, env(safe-area-inset-top))', right: 16,
          width: 30, height: 30, borderRadius: 999,
          background: 'rgba(255,255,255,0.08)', border: `1px solid ${P.text}15`,
          color: P.text, cursor: 'pointer', fontFamily: 'inherit',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 15, fontWeight: 700, lineHeight: 1,
        }}>✕</button>
      </div>

      {/* Cabecera */}
      <div style={{ padding: '6px 22px 12px', textAlign: 'center' }}>
        <div style={{ fontSize: 34, marginBottom: 6 }}>✨</div>
        <div style={{ fontSize: 27, fontWeight: 900, letterSpacing: -1, lineHeight: 1.05 }}>
          {t('Obtén más de La Porra')}
        </div>
        <div style={{ fontSize: 13, fontWeight: 600, color: P.muted, marginTop: 6 }}>
          {t('Elige el plan que mejor se adapte a ti')}
        </div>
      </div>

      {/* Toggle de facturación */}
      <div style={{
        margin: '4px 20px 14px', padding: 4,
        background: 'rgba(255,255,255,0.06)', borderRadius: 12,
        display: 'flex', gap: 2, border: `1px solid ${P.text}11`,
      }}>
        {[
          { k: 'monthly', label: t('Mensual') },
          { k: 'yearly', label: t('Anual') },
        ].map(b => (
          <button key={b.k} onClick={() => setBilling(b.k)} className="touchable" style={{
            flex: 1, padding: '9px 0', borderRadius: 9,
            fontSize: 13, fontWeight: 700,
            background: billing === b.k ? P.accent : 'transparent',
            color: billing === b.k ? '#fff' : P.muted,
            border: 'none', cursor: 'pointer', fontFamily: 'inherit',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}>
            {b.label}
            {b.k === 'yearly' && (
              <span style={{
                fontSize: 9, fontWeight: 900, letterSpacing: 0.4,
                background: billing === 'yearly' ? 'rgba(0,0,0,0.25)' : `${P.accent2}22`,
                color: billing === 'yearly' ? '#fff' : P.accent2,
                padding: '2px 6px', borderRadius: 6,
              }}>{t('AHORRA')}</span>
            )}
          </button>
        ))}
      </div>

      {/* Planes */}
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {plans.map(plan => (
          <PlanCard key={plan.id} plan={plan} billing={billing}
            onGet={() => setComunicado(plan.id)} />
        ))}
      </div>

      <div style={{
        margin: '16px 24px 0', fontSize: 10.5, lineHeight: 1.5,
        color: P.mutedDim, textAlign: 'center', fontWeight: 600,
      }}>
        {t('Pago vía bizum al chino. Sin reembolsos, sin vergüenza, sin honor.')}
      </div>
    </div>
  );
}

function PlanCard({ plan, billing, onGet }) {
  const P = window.PALETTE;
  const featured = plan.featured;
  const price = billing === 'yearly' ? plan.yearly : plan.monthly;
  const note = billing === 'yearly' ? t(plan.yearlyNote) : t('al mes');

  return (
    <div style={{
      position: 'relative',
      background: featured
        ? `linear-gradient(160deg, ${plan.accent}1F, ${P.surface} 55%)`
        : P.surface,
      border: `1px solid ${featured ? plan.accent + '66' : P.text + '12'}`,
      borderRadius: 18, padding: '16px 16px 14px',
      boxShadow: featured ? `0 12px 30px -14px ${plan.accent}88` : 'none',
    }}>
      {featured && (
        <div style={{
          position: 'absolute', top: -10, left: 16,
          fontSize: 9.5, fontWeight: 900, letterSpacing: 1,
          background: plan.accent, color: '#fff',
          padding: '3px 10px', borderRadius: 999,
        }}>{t('EL MÁS ELEGIDO')}</div>
      )}

      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
        <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: -0.6, color: plan.accent }}>
          {plan.name}
        </div>
      </div>
      <div style={{ fontSize: 12, fontWeight: 600, color: P.muted, marginTop: 2 }}>
        {t(plan.tagline)}
      </div>

      {/* Precio */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '14px 0 4px', flexWrap: 'wrap' }}>
        <div style={{ fontSize: 19, fontWeight: 900, letterSpacing: -0.5, color: P.text }}>
          {t(price)}
        </div>
        <div style={{ fontSize: 11, fontWeight: 700, color: P.muted }}>{note}</div>
        {billing === 'yearly' && (
          <span style={{
            fontSize: 10, fontWeight: 900, letterSpacing: 0.4,
            background: `${plan.accent}22`, color: plan.accent,
            padding: '3px 8px', borderRadius: 999,
            border: `1px solid ${plan.accent}44`,
          }}>{plan.discount}</span>
        )}
      </div>

      {/* CTA */}
      <button onClick={onGet} className="touchable" style={{
        width: '100%', marginTop: 12, padding: '12px 0',
        borderRadius: 12, border: 'none', cursor: 'pointer',
        fontFamily: 'inherit', fontSize: 14, fontWeight: 800, letterSpacing: 0.2,
        background: featured ? plan.accent : `${plan.accent}22`,
        color: featured ? '#fff' : plan.accent,
      }}>{t(plan.cta)}</button>

      {/* Beneficios */}
      <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 9 }}>
        {plan.perks.map((perk, i) => (
          <div key={i} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
            <div style={{
              width: 18, height: 18, borderRadius: 999, flexShrink: 0, marginTop: 1,
              background: `${plan.accent}26`, color: plan.accent,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 11, fontWeight: 900,
            }}>✓</div>
            <div style={{ fontSize: 12.5, lineHeight: 1.4, fontWeight: 600, color: P.text, opacity: 0.92 }}>
              {t(perk)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProComunicado({ id, onClose }) {
  const P = window.PALETTE;
  const c = window.PRO_COMUNICADOS[id];
  const isPoem = c.kind === 'poem';
  const accent = id === 'max' ? P.accent : P.accent2;

  return (
    <div className="lp-screen" style={{
      width: '100%', height: '100%', overflowY: 'auto', overflowX: 'hidden',
      background: `radial-gradient(120% 50% at 50% 0%, ${accent}14 0%, ${P.bg} 55%)`,
      color: P.text, paddingBottom: 40,
      fontFamily: '"Space Grotesk", -apple-system, system-ui, sans-serif',
    }}>
      <ScrollGloss />
      <div style={{ padding: 'max(32px, env(safe-area-inset-top)) 20px 0', display: 'flex', alignItems: 'center', gap: 10 }}>
        <BackButton onClick={onClose} />
        <div style={{ fontSize: 11, fontWeight: 700, color: P.muted, letterSpacing: 1.5 }}>
          LA PORRA PRO
        </div>
      </div>

      <div style={{ padding: '24px 24px 0', textAlign: 'center' }}>
        <div style={{ fontSize: 56, lineHeight: 1 }}>{c.emoji}</div>
        <div style={{
          fontSize: 26, fontWeight: 900, letterSpacing: -0.8, marginTop: 12,
          color: accent,
        }}>{t(c.title)}</div>
      </div>

      <div style={{ padding: '20px 24px 0' }}>
        {c.body.map((line, i) => (
          <p key={i} style={{
            margin: line === '' ? '6px 0' : '0 0 ' + (isPoem ? '2px' : '14px'),
            fontSize: isPoem ? 15.5 : 14,
            lineHeight: isPoem ? 1.45 : 1.55,
            fontWeight: isPoem ? 600 : 500,
            fontStyle: isPoem ? 'italic' : 'normal',
            textAlign: isPoem ? 'center' : 'left',
            color: P.text,
            opacity: line === '' ? 0 : 0.95,
          }}>{line ? t(line) : ' '}</p>
        ))}

        <div style={{
          marginTop: 18, fontSize: 12.5, fontWeight: 700,
          color: P.muted, textAlign: isPoem ? 'center' : 'right',
          letterSpacing: 0.2,
        }}>{t(c.signature)}</div>
      </div>

      <div style={{ padding: '26px 20px 0' }}>
        <button onClick={onClose} className="touchable" style={{
          width: '100%', padding: '13px 0', borderRadius: 12,
          border: `1px solid ${P.text}1A`, cursor: 'pointer', fontFamily: 'inherit',
          background: 'rgba(255,255,255,0.06)', color: P.text,
          fontSize: 14, fontWeight: 800, letterSpacing: 0.2,
        }}>{t('Lo he entendido, me retiro')}</button>
      </div>
    </div>
  );
}

Object.assign(window, { ScreenPro });
