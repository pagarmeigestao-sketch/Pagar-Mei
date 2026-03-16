'use client'

import { motion } from 'framer-motion'
import PhoneMockup from './PhoneMockup'
import { UserBubble, AssistantBubble, DateLabel } from './ChatSimulation'

export default function FeatureDAS() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Phone visual */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex justify-center"
        >
          <PhoneMockup title="PagarMEI" subtitle="Online agora" chatHeight="min-h-[430px] max-h-[430px]">
            <DateLabel label="Hoje" />
            <AssistantBubble time="14:01">
              <span className="text-red-600">Oi! Notei que você tem uma dívida ativa na Receita de <strong>R$ 3.500,00</strong> referente a 2023/2024. ⚠️</span>
            </AssistantBubble>
            <AssistantBubble time="14:01">
              Mas calma! Encontrei <strong>2 opções de parcelamento</strong> para regularizar seu CNPJ hoje. Quer ver?
            </AssistantBubble>
            <UserBubble time="14:02">Quero sim!</UserBubble>
            <AssistantBubble time="14:03">
              Aqui estão:<br />
              • Opção A: 12x de R$ 310,00<br />
              • Opção B: 24x de R$ 160,00<br />
              Qual prefere?
            </AssistantBubble>
            <UserBubble time="14:04">Quero a opção B</UserBubble>
            <AssistantBubble time="14:05">
              <span className="text-[#00AE55] font-medium">Boa escolha! ✅ Estamos processando seu pedido. Em 2 minutos te mando o Termo e o primeiro boleto.</span>
            </AssistantBubble>
          </PhoneMockup>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.12 }}
        >
          <div className="section-tag">Parcelamento</div>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-heading mb-4">
            Parcele suas dívidas em segundos.
          </h2>
          <p className="text-[1.0625rem] text-brand-text leading-relaxed mb-6">
            Acumulou boletos de anos anteriores? Recupere seu CNPJ e parcele sua dívida direto na nossa conversa, de forma guiada e sem burocracia.
          </p>
          <a
            href="#comecar"
            className="inline-flex items-center gap-1.5 font-semibold text-primary text-base mt-3 group hover:text-primary-dark transition-colors duration-200"
          >
            Ver opções de parcelamento
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
