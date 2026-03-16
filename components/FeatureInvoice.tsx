'use client'

import { motion } from 'framer-motion'
import PhoneMockup from './PhoneMockup'
import { UserBubble, AssistantBubble, FileAttachment, DateLabel } from './ChatSimulation'

export default function FeatureInvoice() {
  return (
    <section className="py-28 bg-primary-subtle">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Text — left on desktop */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="order-2 lg:order-1"
        >
          <div className="section-tag">Nota Fiscal</div>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-heading mb-4">
            Emita nota fiscal pelo WhatsApp.
          </h2>
          <p className="text-[1.0625rem] text-brand-text leading-relaxed mb-6">
            Preencha os dados em conversa natural e rápida. Esqueça os sistemas lentos da prefeitura. Gere e envie a nota direto para o seu cliente em instantes.
          </p>
          <a
            href="#comecar"
            className="inline-flex items-center gap-1.5 font-semibold text-primary text-base mt-3 group hover:text-primary-dark transition-colors duration-200"
          >
            Criar minha primeira nota
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </a>
        </motion.div>

        {/* Phone visual — right on desktop */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.12 }}
          className="flex justify-center order-1 lg:order-2"
        >
          <PhoneMockup title="PagarMEI" subtitle="Online agora" chatHeight="min-h-[300px] max-h-[300px]">
            <DateLabel label="Hoje" />
            <UserBubble time="09:15">📝 emitir nota fiscal</UserBubble>
            <AssistantBubble time="09:15">
              💬 Qual o valor do serviço prestado?
            </AssistantBubble>
            <UserBubble time="09:16">💰 500 reais</UserBubble>
            <AssistantBubble time="09:16">
              🎉 Nota gerada com sucesso! Deseja enviar o PDF ao seu cliente?
              <FileAttachment name="nota_fiscal_500.pdf" />
            </AssistantBubble>
          </PhoneMockup>
        </motion.div>
      </div>
    </section>
  )
}
