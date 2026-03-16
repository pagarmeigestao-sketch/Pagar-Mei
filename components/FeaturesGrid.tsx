'use client'

import { motion } from 'framer-motion'

const features = [
  {
    emoji: '💸',
    title: 'Recalcular DAS',
    desc: 'Guias vencidas com juros e multas calculados automaticamente.',
    cmd: 'recalcular das',
    badge: 'Automático',
    badgeColor: 'text-white bg-white/15',
    size: 'lg',
  },
  {
    emoji: '📝',
    title: 'Nota Fiscal',
    desc: 'Emita notas de serviço em conversa natural.',
    cmd: 'emitir nota fiscal',
    badge: 'Instantâneo',
    badgeColor: 'text-white bg-white/15',
    size: 'sm',
    glow: 'rgba(56,189,248,0.08)',
  },
  {
    emoji: '📡',
    title: 'Monitoramento',
    desc: 'Seu CNPJ monitorado 24h na Receita Federal.',
    cmd: 'status cnpj',
    badge: '24/7 Live',
    badgeColor: 'text-white bg-white/15',
    size: 'sm',
    glow: 'rgba(167,139,250,0.08)',
  },
  {
    emoji: '🔔',
    title: 'Alertas de Vencimento',
    desc: 'Aviso automático dias antes do seu DAS vencer.',
    cmd: 'ativar alertas',
    badge: 'Proativo',
    badgeColor: 'text-white bg-white/15',
    size: 'sm',
    glow: 'rgba(251,191,36,0.08)',
  },
  {
    emoji: '🔍',
    title: 'Consultar CNPJ',
    desc: 'Situação cadastral e débitos com a Receita Federal.',
    cmd: 'consultar cnpj',
    badge: 'Tempo real',
    badgeColor: 'text-white bg-white/15',
    size: 'sm',
    glow: 'rgba(251,113,133,0.08)',
    freeBadge: true,
  },
  {
    emoji: '🗂️',
    title: 'Histórico',
    desc: 'Boletos, guias e notas já emitidas, sempre acessíveis.',
    cmd: 'meu histórico',
    badge: 'Completo',
    badgeColor: 'text-white bg-white/15',
    size: 'sm',
    glow: 'rgba(45,212,191,0.08)',
  },
]

function CmdChip({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-2.5 py-1 w-fit">
      <div className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
      <span className="text-[0.65rem] font-mono text-white/60 tracking-wide">&ldquo;{text}&rdquo;</span>
    </div>
  )
}

export default function FeaturesGrid() {
  const [hero, ...rest] = features

  return (
    <section
      className="py-16 md:py-28 relative overflow-hidden bg-cta-gradient"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-white/[0.04] -top-[200px] -right-[100px]" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-white/[0.03] -bottom-[120px] -left-[60px]" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white text-[0.78rem] font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Tudo em um só lugar
          </div>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-white leading-tight mb-4">
            O que você pode fazer<br className="hidden sm:block" /> com o Pagar MEI
          </h2>
          <p className="text-[1rem] text-white/80 max-w-[480px] mx-auto">
            Basta mandar uma mensagem. O assistente cuida do resto.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Hero card — spans 2 cols on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.015 }}
            className="lg:col-span-2 relative rounded-2xl p-7 overflow-hidden cursor-default group"
            style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}
          >
            {/* Hover glow */}
            <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)' }} />

            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{hero.emoji}</span>
                  <span className={`text-[0.72rem] font-semibold px-2.5 py-1 rounded-full ${hero.badgeColor}`}>
                    {hero.badge}
                  </span>
                </div>
                <h3 className="text-[1.5rem] font-bold text-white mb-2">{hero.title}</h3>
                <p className="text-[0.9375rem] text-white/70 leading-relaxed mb-5">{hero.desc}</p>
                <CmdChip text={hero.cmd} />
              </div>

              {/* Mini chat preview */}
              <div className="sm:w-[200px] shrink-0 rounded-xl p-3 border border-white/10 space-y-2" style={{ background: 'rgba(0,0,0,0.25)' }}>
                <div className="flex justify-end">
                  <div className="bg-[#d9fdd3] text-gray-800 text-[0.72rem] px-3 py-1.5 rounded-2xl rounded-tr-sm max-w-[80%]">
                    💸 recalcular das
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white/15 text-white/80 text-[0.72rem] px-3 py-1.5 rounded-2xl rounded-tl-sm max-w-[85%]">
                    ⚠️ DAS em atraso encontrado. Gerar boleto?
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-[#d9fdd3] text-gray-800 text-[0.72rem] px-3 py-1.5 rounded-2xl rounded-tr-sm">
                    👍 sim
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white/10 border border-white/20 text-white/80 text-[0.7rem] px-2.5 py-1.5 rounded-xl flex items-center gap-1.5">
                    <svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z"/></svg>
                    DAS_Atualizado.pdf
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Smaller cards */}
          {rest.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 1) * 0.07, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="relative rounded-2xl p-6 overflow-hidden cursor-default group"
              style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(circle at 30% 30%, ${f.glow ?? 'rgba(0,174,85,0.06)'}, transparent 70%)` }}
              />

              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{f.emoji}</span>
                <span className={`text-[0.68rem] font-semibold px-2 py-0.5 rounded-full ${f.badgeColor}`}>
                  {f.badge}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-1.5">
                <h4 className="text-[1.0625rem] font-bold text-white">{f.title}</h4>
                {'freeBadge' in f && f.freeBadge && (
                  <span className="text-[0.62rem] font-bold px-1.5 py-0.5 rounded-full bg-white/20 text-white border border-white/30">
                    Grátis
                  </span>
                )}
              </div>
              <p className="text-[0.85rem] text-white/80 leading-relaxed mb-4">{f.desc}</p>
              <CmdChip text={f.cmd} />
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-[0.825rem] mt-10"
          style={{ color: 'rgba(255,255,255,0.45)' }}
        >
          Tudo direto no WhatsApp · Sem instalar nada · Disponível 24h por dia
        </motion.p>

      </div>
    </section>
  )
}
