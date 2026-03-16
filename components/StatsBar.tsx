'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

function Counter({ target, duration = 1600 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target, duration])

  return <span ref={ref}>{count.toLocaleString('pt-BR')}</span>
}

const stats = [
  {
    id: 'meis',
    number: (inView: boolean) => (
      <span className="flex items-baseline gap-0.5">
        {inView ? <Counter target={1000} /> : '0'}
        <span>+</span>
      </span>
    ),
    label: 'MEIs atendidos',
    sub: 'e crescendo todo dia',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    id: 'hours',
    number: () => <span>24/7</span>,
    label: 'Disponível no WhatsApp',
    sub: 'sem fila, sem espera',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    id: 'time',
    number: () => <span>&lt;&nbsp;1&nbsp;min</span>,
    label: 'Para emitir nota fiscal',
    sub: 'rápido como uma mensagem',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
]

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex flex-col items-center text-center px-8 py-6 rounded-2xl cursor-default flex-1"
    >
      {/* Icon */}
      <motion.div
        animate={{
          color: hovered ? '#00AE55' : '#9CA3AF',
          scale: hovered ? 1.15 : 1,
          rotate: hovered ? [0, -8, 8, 0] : 0,
        }}
        transition={{ duration: 0.35 }}
        className="mb-3"
      >
        {stat.icon}
      </motion.div>

      {/* Number */}
      <div className="relative mb-1">
        <motion.div
          className="text-[2.25rem] font-black leading-none tracking-tight"
          animate={{ color: hovered ? '#007A63' : '#00AE55' }}
          transition={{ duration: 0.25 }}
        >
          {stat.number(inView)}
        </motion.div>

        {/* Animated underline */}
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
          style={{ background: 'linear-gradient(90deg, #00AE55, #007A63)' }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Label */}
      <motion.p
        className="text-[0.875rem] font-semibold mt-2 leading-tight"
        animate={{ color: hovered ? '#0F1923' : '#374151' }}
        transition={{ duration: 0.25 }}
      >
        {stat.label}
      </motion.p>

      {/* Sub label — sempre ocupa espaço, só muda opacidade */}
      <p
        className="text-[0.72rem] text-primary font-medium mt-1 transition-opacity duration-200"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        {stat.sub}
      </p>

    </motion.div>
  )
}

export default function StatsBar() {
  return (
    <div className="relative overflow-hidden" style={{ background: '#F0FDF4' }}>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
          {stats.map((stat, i) => (
            <div key={stat.id} className="relative flex">
              <StatCard stat={stat} index={i} />
              {i < stats.length - 1 && (
                <div
                  className="hidden md:block absolute right-0 top-[25%] bottom-[25%] w-px"
                  style={{ background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.08), transparent)' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
