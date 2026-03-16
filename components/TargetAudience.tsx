'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const spring = { type: 'spring' as const, stiffness: 420, damping: 26 }
const bubbleVariant = {
  hidden: { opacity: 0, scale: 0.82, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: spring },
}

function TypingDots() {
  return (
    <div className="flex gap-[5px] items-center h-4 px-1">
      {[0, 1, 2].map(i => (
        <motion.span
          key={i}
          className="w-[6px] h-[6px] rounded-full bg-gray-400 block"
          animate={{ y: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

function CheckTick() {
  return (
    <svg width="14" height="9" viewBox="0 0 16 10" fill="none" className="shrink-0 inline-block">
      <path d="M1 5L5 9L15 1" stroke="#53bdeb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.5 5L8.5 9" stroke="#53bdeb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function UserBubble({ children, time }: { children: React.ReactNode; time: string }) {
  return (
    <motion.div variants={bubbleVariant} initial="hidden" animate="visible" className="flex justify-end">
      <div className="bg-[#d9fdd3] max-w-[78%] px-3 pt-2 pb-[18px] rounded-[14px] rounded-tr-[3px] text-[0.8125rem] leading-snug text-gray-800 relative shadow-sm">
        {children}
        <div className="absolute bottom-1.5 right-2 flex items-center gap-0.5">
          <span className="text-[0.55rem] text-black/40">{time}</span>
          <CheckTick />
        </div>
      </div>
    </motion.div>
  )
}

function AssistantBubble({ children, time }: { children: React.ReactNode; time?: string }) {
  return (
    <motion.div variants={bubbleVariant} initial="hidden" animate="visible" className="flex justify-start">
      <div className="bg-white max-w-[85%] px-3 pt-2 pb-[18px] rounded-[14px] rounded-tl-[3px] text-[0.8125rem] leading-snug text-gray-800 relative shadow-sm">
        {children}
        {time && <span className="absolute bottom-1.5 right-2 text-[0.55rem] text-black/40">{time}</span>}
      </div>
    </motion.div>
  )
}

function TypingBubble() {
  return (
    <motion.div
      variants={bubbleVariant}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.9 }}
      className="flex justify-start"
    >
      <div className="bg-white max-w-[55%] px-3 py-2.5 rounded-[14px] rounded-tl-[3px] shadow-sm">
        <TypingDots />
      </div>
    </motion.div>
  )
}

type Step = 0 | 1 | 2 | 3 | 4 | 5

function ChatConversation() {
  const [step, setStep] = useState<Step>(0)
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    const timers = [
      setTimeout(() => setStep(1), 700),
      setTimeout(() => setStep(2), 2100),
      setTimeout(() => setStep(3), 3300),
      setTimeout(() => setStep(4), 4100),
      setTimeout(() => setStep(5), 5700),
    ]
    return () => timers.forEach(clearTimeout)
  }, [inView])

  return (
    <div ref={ref} className="flex flex-col gap-2 px-3 pt-3 pb-2">
      {/* Date label */}
      <div className="self-center text-[0.6rem] text-gray-500 bg-white/70 backdrop-blur-sm px-2.5 py-0.5 rounded-[8px] shadow-sm my-1">
        Hoje
      </div>

      <UserBubble time="09:14">💸 Meu DAS vence em 2 dias, me ajuda?</UserBubble>

      <AnimatePresence mode="wait">
        {step >= 1 && step < 2
          ? <TypingBubble key="t1" />
          : step >= 2
          ? (
            <AssistantBubble key="m1" time="09:15">
              🔔 Encontrei seu DAS de março. Valor:{' '}
              <strong>R$&nbsp;74,50</strong>, vence{' '}
              <strong>13/03/2025</strong>. Gerar Pix agora?
            </AssistantBubble>
          )
          : null
        }
      </AnimatePresence>

      {step >= 3 && <UserBubble time="09:15">sim gera aí</UserBubble>}

      <AnimatePresence mode="wait">
        {step === 4 && <TypingBubble key="t2" />}
        {step >= 5 && (
          <AssistantBubble key="m2" time="09:16">
            ✅ Pix gerado! Copie o código abaixo:
            <div className="mt-2 bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-2 font-mono text-[0.63rem] text-gray-600 break-all leading-relaxed select-all">
              00020126360014BR.GOV.BCB.PIX...
            </div>
            <p className="text-[0.72rem] text-gray-500 mt-1.5 mb-0 leading-snug">
              Válido por 24h. Pague antes do vencimento para evitar multas.
            </p>
          </AssistantBubble>
        )}
      </AnimatePresence>
    </div>
  )
}

const pills = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    label: 'Prestadores de Serviço',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    label: 'Comerciantes',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: 'Autônomos e Freelas',
  },
]

export default function TargetAudience() {
  return (
    <section className="py-16 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="inline-flex items-center gap-2 bg-white border border-brand-border px-3.5 py-1.5 rounded-full text-sm font-medium text-brand-text shadow-sm mb-4">
            <span className="w-[7px] h-[7px] rounded-full bg-primary dot-pulse shrink-0" />
            Liberdade para empreender
          </div>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-heading mb-4">
            Feito para quem vive correndo.
          </h2>
          <p className="text-[1.0625rem] text-brand-text leading-relaxed mb-7">
            O Pagar MEI foi criado para prestadores de serviço, comerciantes e autônomos que querem focar no trabalho — não em formulários do governo.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {pills.map(p => (
              <motion.span
                key={p.label}
                whileHover={{ borderColor: '#00AE55', backgroundColor: '#F0FDF4', color: '#007A63', y: -2, boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
                className="bg-white border-[1.5px] border-brand-border px-[18px] py-2.5 rounded-full font-medium text-heading flex items-center gap-2 text-[0.9rem] cursor-default transition-colors duration-200"
              >
                <span className="text-primary">{p.icon}</span>
                {p.label}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* WhatsApp chat mockup */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="flex justify-center"
        >
          <div
            className="rounded-[2rem] overflow-hidden w-full max-w-[400px]"
            style={{
              boxShadow: '0 24px 64px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)',
              border: '1px solid rgba(0,0,0,0.06)',
            }}
          >
            {/* WA Header */}
            <div className="bg-wa-header px-[18px] py-3.5 flex items-center justify-between text-white">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.2)' }}
                >
                  <WaIcon />
                </div>
                <div>
                  <p className="font-bold text-[0.9375rem] m-0 leading-tight">Pagar MEI</p>
                  <div className="flex items-center gap-1.5 text-[0.72rem] opacity-90">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#4ade80] dot-pulse" />
                    Online
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 opacity-80">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 5.69 5.69l.9-.9a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 15.51z"/></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>
              </div>
            </div>

            {/* Chat area */}
            <div className="bg-[#efeae2] min-h-[260px]">
              <ChatConversation />
            </div>

            {/* Input bar */}
            <div className="bg-[#f0f2f5] px-3 py-2.5 flex items-center gap-2">
              <div className="flex-1 bg-white rounded-full px-4 py-2 text-[0.8rem] text-gray-400 flex items-center">
                Mensagem
              </div>
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{ background: '#00AE55' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M22 2L11 13"/><path d="M22 2L15 22l-4-9-9-4 20-7z"/></svg>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

function WaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  )
}
