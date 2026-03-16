'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

const cards = [
  {
    title: 'Privacidade Total',
    desc: 'Criptografia de ponta a ponta em todas as transações fiscais. Seus dados nunca são compartilhados.',
    stat: '256-bit',
    statLabel: 'Criptografia TLS 1.3',
    progress: 100,
    badge: 'Criptografado',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
  },
  {
    title: 'Parceiro Oficial',
    desc: 'Operamos via API Oficial do WhatsApp Business, garantindo total legitimidade e segurança do serviço.',
    stat: 'Meta',
    statLabel: 'Business Partner verificado',
    progress: 100,
    badge: 'Verificado',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: 'Conformidade LGPD',
    desc: 'Tratamento de dados rigoroso conforme a Lei Geral de Proteção de Dados brasileira.',
    stat: '100%',
    statLabel: 'Lei 13.709/2018',
    progress: 100,
    badge: 'Conforme',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
]

function ProgressBar({ value, inView }: { value: number; inView: boolean }) {
  return (
    <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ background: 'rgba(0,174,85,0.12)' }}>
      <motion.div
        className="h-full rounded-full"
        style={{ background: 'linear-gradient(90deg, #00AE55, #007A63)' }}
        initial={{ width: 0 }}
        animate={{ width: inView ? `${value}%` : 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      />
    </div>
  )
}

function SecurityCard({ card, index }: { card: typeof cards[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}
      className="relative bg-white rounded-3xl p-7 cursor-default overflow-hidden transition-shadow duration-300"
      style={{
        boxShadow: hovered
          ? '0 20px 48px rgba(0,174,85,0.14), 0 4px 16px rgba(0,0,0,0.06)'
          : '0 4px 20px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)',
        border: hovered ? '1.5px solid rgba(0,174,85,0.3)' : '1.5px solid rgba(0,174,85,0.1)',
      }}
    >
      {/* Hover glow */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none rounded-3xl"
            style={{ background: 'radial-gradient(ellipse at 20% 0%, rgba(0,174,85,0.06) 0%, transparent 65%)' }}
          />
        )}
      </AnimatePresence>

      {/* Top: icon + badge */}
      <div className="flex items-start justify-between mb-6">
        <motion.div
          animate={{ scale: hovered ? 1.08 : 1, rotate: hovered ? 3 : 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #E8F9F0 0%, #D0F0E0 100%)', color: '#00AE55' }}
        >
          {card.icon}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
          transition={{ delay: index * 0.12 + 0.5, type: 'spring', stiffness: 350 }}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.7rem] font-bold"
          style={{ background: 'rgba(0,174,85,0.1)', color: '#007A63' }}
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
          {card.badge}
        </motion.div>
      </div>

      {/* Text */}
      <h4 className="text-[1.125rem] font-bold mb-2" style={{ color: '#0F1923' }}>{card.title}</h4>
      <p className="text-[0.9rem] leading-relaxed mb-6" style={{ color: '#4B5563' }}>{card.desc}</p>

      {/* Stat row */}
      <div className="mb-3 flex items-end justify-between">
        <div>
          <span className="text-[1.5rem] font-black" style={{ color: '#00AE55' }}>{card.stat}</span>
          <p className="text-[0.72rem] font-medium mt-0.5" style={{ color: '#6B7280' }}>{card.statLabel}</p>
        </div>
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              className="flex items-center gap-1 text-[0.75rem] font-semibold"
              style={{ color: '#00AE55' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Ativo
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ProgressBar value={card.progress} inView={inView} />
    </motion.div>
  )
}

const trustItems = [
  { label: 'Criptografia TLS 1.3', icon: '🔐' },
  { label: 'API Oficial WhatsApp', icon: '✅' },
  { label: 'LGPD Conforme', icon: '🛡️' },
  { label: '99.9% Uptime', icon: '⚡' },
]

export default function SecuritySection() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #F0FDF4 50%, #ffffff 100%)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full opacity-40"
          style={{ background: 'radial-gradient(ellipse, rgba(0,174,85,0.08) 0%, transparent 70%)' }}
        />
        <svg viewBox="0 0 100 80" className="absolute bottom-8 right-[4%] w-[200px] opacity-[0.04]" fill="#00AE55">
          <rect x="2" y="2" width="96" height="60" rx="14" ry="14"/>
          <polygon points="18,62 8,78 34,62"/>
          <rect x="14" y="18" width="50" height="5" rx="2.5"/>
          <rect x="14" y="31" width="70" height="5" rx="2.5"/>
          <rect x="14" y="44" width="38" height="5" rx="2.5"/>
        </svg>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[0.78rem] font-bold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(0,174,85,0.1)', color: '#007A63', border: '1px solid rgba(0,174,85,0.2)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Segurança
          </div>

          <h2 className="text-[clamp(1.875rem,3.8vw,2.75rem)] font-bold mb-5 leading-tight" style={{ color: '#0F1923' }}>
            Sua empresa em{' '}
            <span style={{ color: '#00AE55' }}>boas mãos.</span>
          </h2>

          <p className="text-[1.0625rem] leading-relaxed max-w-[560px] mx-auto" style={{ color: '#4B5563' }}>
            Utilizamos a mesma tecnologia de proteção de dados dos maiores bancos digitais, operando via API oficial do WhatsApp.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {cards.map((card, i) => (
            <SecurityCard key={card.title} card={card} index={i} />
          ))}
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.08 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-[0.8rem] font-semibold"
              style={{
                background: 'white',
                border: '1px solid rgba(0,174,85,0.15)',
                color: '#374151',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}
            >
              <span>{item.icon}</span>
              {item.label}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
