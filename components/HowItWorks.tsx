'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const STEP_DURATION = 4500

const steps = [
  {
    num: '01',
    label: 'Salve o número',
    title: 'Adicione o contato\nem segundos.',
    desc: 'Nada para instalar. Nada para criar. O WhatsApp que você já usa no dia a dia — basta salvar um número.',
    bullets: ['Funciona em qualquer celular', 'Sem cadastro complicado', 'Contato salvo em 10 segundos'],
    chat: [
      { from: 'user', text: '👋 Olá! Acabei de salvar seu contato.' },
      { from: 'bot',  text: 'Oi! Sou o assistente do PagarMEI. Como posso te ajudar hoje? 😊' },
    ],
    accent: '#00AE55',
    accentLight: '#E0F7EC',
  },
  {
    num: '02',
    label: 'Mande uma mensagem',
    title: 'Fale o que precisa,\nnaturalmente.',
    desc: 'Sem formulários. Sem menus. Escreva como fala — o assistente entende tudo e já sabe o que fazer.',
    bullets: ['DAS, notas fiscais, débitos', 'Linguagem natural', 'Resposta em segundos'],
    chat: [
      { from: 'user', text: '💸 quero pagar meu DAS de março' },
      { from: 'bot',  text: '⚠️ Encontrei seu DAS em aberto (R$ 70,60). Deseja gerar o boleto com juros?' },
      { from: 'user', text: '👍 sim' },
    ],
    accent: '#00AE55',
    accentLight: '#E0F7EC',
  },
  {
    num: '03',
    label: 'Problema resolvido',
    title: 'Documento pronto\nna sua tela.',
    desc: 'Boleto, nota fiscal, comprovante — o resultado chega direto na conversa. Sem sair do WhatsApp.',
    bullets: ['PDF gerado na hora', 'Enviado direto no chat', 'Histórico sempre disponível'],
    chat: [
      { from: 'bot',  text: '🎉 Pronto! Seu DAS está gerado.' },
      {
        from: 'bot',
        text: '',
        file: 'DAS_Marco_2026.pdf',
      },
    ],
    accent: '#00AE55',
    accentLight: '#E0F7EC',
  },
]

function ChatBubble({ msg, delay }: { msg: typeof steps[0]['chat'][0]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.32, ease: [0.23, 1, 0.32, 1] }}
      className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      {msg.file ? (
        <div className="bg-white rounded-2xl rounded-tl-sm px-3 pt-2 pb-3 max-w-[82%] shadow-sm">
          <div className="flex items-center gap-2 bg-[#f0fdf4] border border-primary/20 px-2.5 py-2 rounded-xl">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <svg width="14" height="14" fill="#00AE55" viewBox="0 0 24 24">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>
            </div>
            <span className="text-[0.72rem] font-semibold text-primary truncate">{msg.file}</span>
          </div>
          <span className="block text-[0.55rem] text-gray-400 text-right mt-1">10:42</span>
        </div>
      ) : (
        <div
          className={`max-w-[82%] px-3 pt-2 pb-[18px] rounded-2xl text-[0.8125rem] leading-snug relative shadow-sm ${
            msg.from === 'user'
              ? 'bg-[#d9fdd3] rounded-tr-sm text-gray-800'
              : 'bg-white rounded-tl-sm text-gray-800'
          }`}
        >
          {msg.text}
          <span className="absolute bottom-1.5 right-2 text-[0.52rem] text-gray-400">
            {msg.from === 'user' ? '10:41 ✓✓' : '10:41'}
          </span>
        </div>
      )}
    </motion.div>
  )
}

export default function HowItWorks() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startProgress = () => {
    setProgress(0)
    if (progressRef.current) clearInterval(progressRef.current)
    const tick = 50
    const steps_count = STEP_DURATION / tick
    let count = 0
    progressRef.current = setInterval(() => {
      count++
      setProgress(Math.min((count / steps_count) * 100, 100))
    }, tick)
  }

  useEffect(() => {
    if (paused) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (progressRef.current) clearInterval(progressRef.current)
      return
    }
    startProgress()
    intervalRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % steps.length)
      startProgress()
    }, STEP_DURATION)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (progressRef.current) clearInterval(progressRef.current)
    }
  }, [paused, active])

  const handleSelect = (i: number) => {
    setActive(i)
    setPaused(false)
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (progressRef.current) clearInterval(progressRef.current)
    startProgress()
    intervalRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % steps.length)
      startProgress()
    }, STEP_DURATION)
  }

  const s = steps[active]

  return (
    <section
      id="como-funciona"
      className="py-28 bg-white overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-tag">Como funciona</div>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-heading mt-3 mb-4">
            Simples como mandar uma mensagem.
          </h2>
          <p className="text-[1.0625rem] text-brand-text max-w-[560px] mx-auto leading-relaxed">
            Sem apps, sem portais. Só você e o WhatsApp que já tem no bolso.
          </p>
        </motion.div>

        {/* Step tabs */}
        <div className="flex items-center justify-center gap-0 mb-12 relative">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center">
              <button
                onClick={() => handleSelect(i)}
                className="flex flex-col items-center gap-2 px-6 group focus:outline-none"
              >
                {/* Circle */}
                <div className={`relative w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  active === i
                    ? 'bg-primary text-white shadow-[0_0_0_4px_rgba(0,174,85,0.18)]'
                    : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'
                }`}>
                  {i < active ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  ) : (
                    <span>{step.num}</span>
                  )}
                  {/* Progress ring */}
                  {active === i && (
                    <svg className="absolute inset-0 -rotate-90" width="48" height="48" viewBox="0 0 48 48">
                      <circle cx="24" cy="24" r="21" fill="none" stroke="rgba(0,174,85,0.2)" strokeWidth="2"/>
                      <circle
                        cx="24" cy="24" r="21" fill="none"
                        stroke="#00AE55" strokeWidth="2"
                        strokeDasharray={`${2 * Math.PI * 21}`}
                        strokeDashoffset={`${2 * Math.PI * 21 * (1 - progress / 100)}`}
                        strokeLinecap="round"
                        className="transition-none"
                      />
                    </svg>
                  )}
                </div>
                <span className={`text-[0.78rem] font-semibold whitespace-nowrap transition-colors duration-200 ${
                  active === i ? 'text-primary' : 'text-gray-400 group-hover:text-gray-600'
                }`}>
                  {step.label}
                </span>
              </button>

              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="relative w-24 h-[2px] bg-gray-100 mx-1 -translate-y-3">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-primary rounded-full"
                    animate={{ width: i < active ? '100%' : '0%' }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Main content card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.38, ease: [0.23, 1, 0.32, 1] }}
            className="bg-[#F7FAF8] rounded-3xl overflow-hidden border border-[#E8F0EB]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

              {/* Left: text content */}
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                {/* Big step number */}
                <span className="text-[4.5rem] font-black text-primary/10 leading-none mb-4 select-none">
                  {s.num}
                </span>

                <h3 className="text-[clamp(1.5rem,2.8vw,2.1rem)] font-bold text-heading leading-tight mb-4 whitespace-pre-line">
                  {s.title}
                </h3>
                <p className="text-[1rem] text-brand-text leading-relaxed mb-8">
                  {s.desc}
                </p>

                {/* Bullets */}
                <ul className="flex flex-col gap-3">
                  {s.bullets.map((b, i) => (
                    <motion.li
                      key={b}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 + 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="#00AE55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-[0.9375rem] text-heading font-medium">{b}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Right: WhatsApp chat preview */}
              <div className="relative flex items-center justify-center bg-gradient-to-br from-[#e8f5e9] to-[#d0ead8] p-8 lg:p-12 min-h-[320px]">

                {/* Decorative blobs */}
                <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-primary/8 blur-2xl pointer-events-none" />
                <div className="absolute bottom-8 left-4 w-24 h-24 rounded-full bg-primary/10 blur-xl pointer-events-none" />

                {/* Mini phone chat UI */}
                <div className="relative w-full max-w-[280px]">
                  {/* Chat header */}
                  <div className="bg-[#008069] rounded-t-2xl px-4 py-3 flex items-center gap-2.5 shadow-sm">
                    <div className="w-7 h-7 bg-white/25 rounded-full flex items-center justify-center shrink-0">
                      <img src="/logo.svg" alt="PagarMEI" className="w-4 brightness-0 invert" />
                    </div>
                    <div className="flex-1">
                      <strong className="text-white text-[0.78rem] block leading-tight">PagarMEI</strong>
                      <span className="text-white/65 text-[0.58rem]">Online agora</span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-emerald-300 shadow-[0_0_6px_rgba(110,231,183,0.8)]" />
                  </div>

                  {/* Chat body */}
                  <div
                    className="phone-bg rounded-b-2xl p-3 flex flex-col gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                    style={{ minHeight: 180 }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div key={active} className="flex flex-col gap-2">
                        {s.chat.map((msg, i) => (
                          <ChatBubble key={i} msg={msg} delay={i * 0.22} />
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <div className="inline-flex flex-col items-center gap-3">
            <motion.a
              href="https://wa.me/5511996740623?text=Oi%20Pagar%20MEI%2C%20quero%20come%C3%A7ar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="relative inline-flex items-center gap-3 text-white font-bold rounded-full px-9 py-[18px] text-[1.125rem] overflow-hidden group cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #00AE55 0%, #007A63 100%)',
                boxShadow: '0 8px 32px rgba(0,174,85,0.4), 0 2px 8px rgba(0,174,85,0.2)',
              }}
            >
              {/* Shimmer sweep on hover */}
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)' }}
              />
              {/* WhatsApp icon with pulse ring */}
              <span className="relative shrink-0">
                <span className="absolute -inset-1.5 rounded-full bg-white/25 animate-ping" style={{ animationDuration: '1.8s' }} />
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="relative z-10">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </span>
              Começar agora
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.a>
            {/* Microcopy */}
            <p className="text-[0.8rem] text-gray-400 font-medium m-0">
              Sem cadastro · Sem cartão · Disponível 24h
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
