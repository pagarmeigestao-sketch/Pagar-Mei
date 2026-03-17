'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import PhoneMockup from './PhoneMockup'
import { UserBubble, AssistantBubble, FileAttachment, DateLabel, TypingBubble } from './ChatSimulation'

const features = [
  {
    dot: 'bg-amber-400 shadow-[0_0_0_3px_rgba(245,158,11,0.18)]',
    title: 'Lembretes de vencimento',
    desc: 'Aviso automático dias antes do seu DAS vencer — sem surpresas.',
  },
  {
    dot: 'bg-red-400 shadow-[0_0_0_3px_rgba(239,68,68,0.18)]',
    title: 'Alertas de pendência fiscal',
    desc: 'Detectamos débitos e irregularidades no seu CNPJ em tempo real.',
  },
  {
    dot: 'bg-primary shadow-[0_0_0_3px_rgba(0,174,85,0.18)]',
    title: 'Status do CNPJ atualizado',
    desc: 'Verificação diária na Receita Federal e no Simples Nacional.',
  },
]

type Step = 0 | 1 | 2 | 3 | 4

export default function MonitoringSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-20%' })
  const [step, setStep] = useState<Step>(0)
  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!inView) return
    const timers = [
      setTimeout(() => setStep(1), 400),
      setTimeout(() => setStep(2), 1800),
      setTimeout(() => setStep(3), 2500),
      setTimeout(() => setStep(4), 4000),
    ]
    return () => timers.forEach(clearTimeout)
  }, [inView])

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight
  }, [step])

  return (
    <section id="monitoramento" ref={sectionRef} className="py-28 bg-brand-bg">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="section-tag">Monitoramento</div>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-heading mb-4">
            Seu MEI sempre em dia.
          </h2>
          <p className="text-[1.0625rem] text-brand-text leading-relaxed mb-8">
            Durma tranquilo. O PagarMEI monitora seu CNPJ 24 horas por dia e te avisa direto no WhatsApp antes que qualquer pendência vire problema.
          </p>

          <div className="flex flex-col gap-5 mb-9">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3.5"
              >
                <div className={`w-2.5 h-2.5 rounded-full shrink-0 mt-1 ${f.dot}`} />
                <div>
                  <strong className="block text-[0.9375rem] text-heading mb-0.5 font-semibold">{f.title}</strong>
                  <span className="text-sm text-brand-text leading-snug">{f.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <a
            href="#comecar"
            className="inline-flex items-center justify-center bg-primary text-white font-semibold rounded-full px-7 py-[15px] text-[1.0625rem] hover:bg-primary-hover hover:-translate-y-0.5 transition-all duration-200"
          >
            Ativar monitoramento
          </a>
        </motion.div>

        {/* Right: phone */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="relative flex justify-center items-center py-8"
        >
          {/* Live badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 bg-white border border-brand-border rounded-full px-4 py-1.5 inline-flex items-center gap-2 text-[0.8125rem] font-semibold text-heading shadow-card z-10 whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-primary dot-pulse" />
            Monitorando agora
          </motion.div>

          <PhoneMockup title="PagarMEI" subtitle="Online · monitora 24/7" chatHeight="min-h-[320px] max-h-[320px]">
            <div ref={chatRef} className="flex flex-col gap-2">
              <DateLabel label="Hoje" />

              <AnimatePresence>
                {step >= 1 && (
                  <AssistantBubble key="m1" time="08:00">
                    🔔 Atenção! Seu DAS de março vence em <strong>5 dias</strong>. Deseja gerar o boleto agora?
                  </AssistantBubble>
                )}
                {step >= 2 && (
                  <UserBubble key="m2" time="08:03">👍 sim, gera o boleto</UserBubble>
                )}
                {step === 3 && <TypingBubble key="t1" />}
                {step >= 4 && (
                  <AssistantBubble key="m3" time="08:03">
                    ✅ Boleto gerado com sucesso!
                    <FileAttachment name="DAS_Marco_2026.pdf" />
                  </AssistantBubble>
                )}
              </AnimatePresence>
            </div>
          </PhoneMockup>

          {/* Floating stat pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 400 }}
            className="absolute bottom-2 right-0 bg-primary text-white px-5 py-3 rounded-[20px] shadow-green flex flex-col items-center gap-0.5 z-10"
          >
            <strong className="text-[1.25rem] font-extrabold leading-none">+10.000</strong>
            <span className="text-[0.72rem] opacity-90">MEIs protegidos</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
