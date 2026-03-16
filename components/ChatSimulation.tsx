'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const spring = { type: 'spring' as const, stiffness: 420, damping: 26 }
const bubbleVariant = {
  hidden: { opacity: 0, scale: 0.82, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: spring },
}

export function TypingDots() {
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

export function DateLabel({ label }: { label: string }) {
  return (
    <div className="self-center text-[0.6rem] text-gray-500 bg-white/70 backdrop-blur-sm px-2.5 py-0.5 rounded-[8px] shadow-sm my-1">
      {label}
    </div>
  )
}

export function CheckTick() {
  return (
    <svg width="14" height="9" viewBox="0 0 16 10" fill="none" className="shrink-0 inline-block">
      <path d="M1 5L5 9L15 1" stroke="#53bdeb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.5 5L8.5 9" stroke="#53bdeb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function FileAttachment({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 bg-primary-subtle border border-primary/20 px-2.5 py-1.5 rounded-lg mt-1.5">
      <svg width="15" height="15" fill="#00AE55" viewBox="0 0 24 24">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
      </svg>
      <span className="text-[0.7rem] font-semibold text-primary truncate">{name}</span>
    </div>
  )
}

// User bubble
export function UserBubble({ children, time }: { children: React.ReactNode; time: string }) {
  return (
    <motion.div variants={bubbleVariant} initial="hidden" animate="visible" className="flex justify-end">
      <div className="bg-wa-bubble max-w-[78%] px-3 pt-2 pb-[18px] rounded-[14px] rounded-tr-[3px] text-[0.8125rem] leading-snug text-heading relative shadow-sm">
        {children}
        <div className="absolute bottom-1.5 right-2 flex items-center gap-0.5">
          <span className="text-[0.55rem] text-black/40">{time}</span>
          <CheckTick />
        </div>
      </div>
    </motion.div>
  )
}

// Assistant bubble
export function AssistantBubble({ children, time }: { children: React.ReactNode; time?: string }) {
  return (
    <motion.div variants={bubbleVariant} initial="hidden" animate="visible" className="flex justify-start">
      <div className="bg-white max-w-[82%] px-3 pt-2 pb-[18px] rounded-[14px] rounded-tl-[3px] text-[0.8125rem] leading-snug text-heading relative shadow-sm">
        {children}
        {time && <span className="absolute bottom-1.5 right-2 text-[0.55rem] text-black/40">{time}</span>}
      </div>
    </motion.div>
  )
}

// Typing bubble
export function TypingBubble() {
  return (
    <motion.div variants={bubbleVariant} initial="hidden" animate="visible" exit={{ opacity: 0, scale: 0.9 }} className="flex justify-start">
      <div className="bg-white max-w-[55%] px-3 py-2.5 rounded-[14px] rounded-tl-[3px] shadow-sm">
        <TypingDots />
      </div>
    </motion.div>
  )
}

// ─── Main hero chat simulation ───────────────────────────────────────────────
type Step = 0 | 1 | 2 | 3 | 4 | 5

export default function ChatSimulation() {
  const [step, setStep] = useState<Step>(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 900),
      setTimeout(() => setStep(2), 2400),
      setTimeout(() => setStep(3), 3600),
      setTimeout(() => setStep(4), 4300),
      setTimeout(() => setStep(5), 6000),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <>
      <DateLabel label="Hoje" />

      <UserBubble time="10:41">💸 preciso recalcular meu DAS</UserBubble>

      <AnimatePresence mode="wait">
        {step < 2
          ? <TypingBubble key="t1" />
          : (
            <AssistantBubble key="m1" time="10:41">
              📊 Encontrei <strong>2 pagamentos em atraso</strong>. Deseja gerar o boleto atualizado?
            </AssistantBubble>
          )
        }
      </AnimatePresence>

      {step >= 3 && <UserBubble time="10:42">👍 sim</UserBubble>}

      <AnimatePresence mode="wait">
        {step === 4 && <TypingBubble key="t2" />}
        {step >= 5 && (
          <AssistantBubble key="m2" time="10:42">
            🎉 Pronto! Aqui está seu DAS atualizado.
            <FileAttachment name="DAS_Atualizado.pdf" />
          </AssistantBubble>
        )}
      </AnimatePresence>
    </>
  )
}
