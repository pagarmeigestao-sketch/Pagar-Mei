'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import ChatSimulation from './ChatSimulation'
import PhoneMockup from './PhoneMockup'

const toasts = [
  { icon: '💸', text: 'DAS de março quitado', sub: 'agora mesmo' },
  { icon: '📝', text: 'Nota fiscal emitida', sub: 'R$ 850,00' },
  { icon: '🔔', text: 'CNPJ ativo e regular', sub: 'verificado hoje' },
  { icon: '✅', text: 'Boleto gerado', sub: 'DAS_Abril_2026.pdf' },
]

function FloatingToast({ toast, delay }: { toast: typeof toasts[0]; delay: number }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const show = setTimeout(() => setVisible(true), delay)
    const hide = setTimeout(() => setVisible(false), delay + 2800)
    return () => { clearTimeout(show); clearTimeout(hide) }
  }, [delay])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.88 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 30, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 380, damping: 28 }}
          className="flex items-center gap-2.5 backdrop-blur-xl rounded-2xl px-3.5 py-2.5"
          style={{
            background: 'rgba(0,0,0,0.22)',
            border: '1px solid rgba(255,255,255,0.18)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          }}
        >
          <span className="text-xl leading-none">{toast.icon}</span>
          <div className="leading-tight">
            <p className="text-white text-[0.75rem] font-semibold m-0 leading-tight">{toast.text}</p>
            <p className="text-white/60 text-[0.65rem] m-0 leading-tight">{toast.sub}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const [toastCycle, setToastCycle] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setToastCycle(c => c + 1), 4000)
    return () => clearInterval(id)
  }, [])

  const activeToast = toasts[toastCycle % toasts.length]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-[140px] sm:pt-[160px] pb-[60px] sm:pb-[80px] overflow-hidden bg-cta-gradient"
    >
      {/* ── Background atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Dark vignette on left — slightly deepens text area for contrast */}
        <div
          className="absolute left-0 top-0 w-[55%] h-full"
          style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.18) 0%, transparent 100%)' }}
        />

        {/* Light bloom top-right */}
        <div
          className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 65%)' }}
        />

        {/* Depth shadow bottom-left */}
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[300px]"
          style={{ background: 'radial-gradient(ellipse at 10% 90%, rgba(0,0,0,0.2) 0%, transparent 65%)' }}
        />

        {/* Isotipo watermark — left */}
        <svg viewBox="0 0 100 80" className="absolute top-14 left-6 w-[240px] opacity-[0.06]" fill="white">
          <rect x="2" y="2" width="96" height="60" rx="14" ry="14"/>
          <polygon points="18,62 8,78 34,62"/>
          <rect x="14" y="18" width="50" height="5" rx="2.5"/>
          <rect x="14" y="31" width="70" height="5" rx="2.5"/>
          <rect x="14" y="44" width="38" height="5" rx="2.5"/>
        </svg>
        {/* Isotipo watermark — right */}
        <svg viewBox="0 0 100 80" className="absolute bottom-8 right-[6%] w-[180px] opacity-[0.05]" fill="white">
          <rect x="2" y="2" width="96" height="60" rx="14" ry="14"/>
          <polygon points="18,62 8,78 34,62"/>
          <rect x="14" y="18" width="50" height="5" rx="2.5"/>
          <rect x="14" y="31" width="70" height="5" rx="2.5"/>
          <rect x="14" y="44" width="38" height="5" rx="2.5"/>
        </svg>

      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">

        {/* ── Left: Copy ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-[580px] mx-auto lg:mx-0 text-center lg:text-left"
        >
          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-[clamp(1.875rem,7vw,3.8rem)] font-black leading-[1.06] tracking-tight mb-6 text-white"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.2)' }}
          >
            Resolva tudo do seu{' '}
            <span className="underline decoration-white/30 decoration-4 underline-offset-4">MEI</span>
            {' '}pelo
            <br />
            <span style={{ color: '#003E2D', textShadow: 'none' }}>WhatsApp</span>.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-[1.0625rem] text-white/90 mb-10 max-w-[500px] mx-auto lg:mx-0 leading-relaxed"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.15)' }}
          >
            Pague seu imposto mensal, emita notas fiscais e consulte seu CNPJ conversando. Sem senhas esquecidas e sem portais complicados.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row flex-wrap gap-3 items-center justify-center lg:justify-start mb-10">
            {/* Primary — cta-gradient with glow */}
            <Link
              href="https://wa.me/5511996740623?text=Oi%20Pagar%20MEI%2C%20quero%20come%C3%A7ar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white font-bold rounded-full px-7 py-4 text-[1rem] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] text-[#007A63]"
            >
              <WaIcon />
              Quero começar
            </Link>
            {/* Secondary — dark glass */}
            <Link
              href="#como-funciona"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white font-semibold rounded-full px-7 py-4 text-[1rem] transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
              style={{
                background: 'rgba(0,0,0,0.18)',
                border: '1px solid rgba(255,255,255,0.25)',
              }}
            >
              Ver como funciona
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-7"
            style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}
          >
            <div className="flex">
              {[
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&q=80',
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&q=80',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face&q=80',
                'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face&q=80',
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="w-9 h-9 rounded-full object-cover -ml-2.5 first:ml-0"
                  style={{ border: '2px solid rgba(255,255,255,0.35)' }}
                />
              ))}
            </div>
            <div>
              <p className="text-sm font-bold m-0 leading-tight text-white">+1.000 MEIs</p>
              <p className="text-[0.75rem] m-0 text-white/70">já simplificaram a vida</p>
            </div>
            <div
              className="ml-3 flex items-center gap-1.5 rounded-full px-3 py-1.5 backdrop-blur-sm"
              style={{
                background: 'rgba(0,0,0,0.18)',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFD600"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <span className="text-[0.72rem] font-semibold text-white">4.9 / 5.0</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Right: Phone ── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          className="relative flex justify-center items-center"
        >
          {/* Glow bloom behind phone */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-[340px] h-[340px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 50%, transparent 70%)' }}
            />
          </div>

          {/* Floating toast */}
          <div className="absolute -top-4 -left-4 lg:-left-14 z-20 w-52 hidden sm:block">
            <FloatingToast key={toastCycle} toast={activeToast} delay={500} />
          </div>

          {/* Phone */}
          <div className="relative z-10">
            <PhoneMockup
              title="Pagar MEI"
              subtitle="Online agora"
              float
              chatHeight="min-h-[360px] max-h-[360px]"
            >
              <ChatSimulation />
            </PhoneMockup>
          </div>

          {/* Stat pill — bottom right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, type: 'spring', stiffness: 350 }}
            className="absolute -bottom-4 -right-2 lg:-right-10 z-20 bg-white rounded-2xl px-5 py-3 hidden sm:flex flex-col items-center gap-0.5"
            style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.2)', color: '#007A63' }}
          >
            <strong className="text-[1.3rem] font-extrabold leading-none">100%</strong>
            <span className="text-[0.68rem] font-medium opacity-75">no WhatsApp</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[0.7rem] font-medium pointer-events-none z-10 text-white/50"
      >
        <div className="relative w-5 h-8 rounded-xl flex justify-center pt-1.5" style={{ border: '1.5px solid rgba(255,255,255,0.3)' }}>
          <span className="w-[3px] h-[5px] rounded-full bg-white/60" style={{ animation: 'scroll-mouse 1.5s ease-in-out infinite' }} />
        </div>
        <span>Deslize para ver mais</span>
      </motion.div>
    </section>
  )
}

function WaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  )
}
