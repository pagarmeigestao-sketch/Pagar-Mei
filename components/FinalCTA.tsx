'use client'

import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section
      id="comecar"
      className="py-16 md:py-[100px] bg-cta-gradient text-white relative overflow-hidden text-center"
    >
      {/* Decorative circles */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-white/[0.04] -top-[200px] -right-[100px] pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-white/[0.03] -bottom-[120px] -left-[60px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[760px] mx-auto px-6 relative z-10"
      >
        <div className="inline-block bg-white/18 border border-white/35 text-white px-3.5 py-1.5 rounded-full text-[0.8125rem] font-semibold tracking-wider uppercase mb-5 backdrop-blur-sm">
          Comece agora
        </div>

        <h2 className="text-[clamp(1.875rem,4vw,2.875rem)] font-bold text-white mb-4">
          Pronto para simplificar seu MEI?
        </h2>
        <p className="text-[1.1875rem] text-white/85 mb-10">
          Junte-se a mais de 10.000 empreendedores que pararam de perder tempo com burocracia.
        </p>

        <div className="flex flex-col items-center gap-4">
          <motion.a
            href="https://wa.me/5511996740623?text=Oi%20Pagar%20MEI%2C%20quero%20come%C3%A7ar"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, boxShadow: '0 8px 32px rgba(0,0,0,0.22)' }}
            className="inline-flex items-center gap-2.5 bg-white text-primary font-bold rounded-full px-8 py-[15px] text-[1.0625rem] shadow-green-glow"
          >
            <WaIcon />
            Quero começar agora grátis
          </motion.a>
          <span className="text-[0.875rem] text-white/65">
            Sem cartão de crédito. Cancele quando quiser.
          </span>
        </div>
      </motion.div>
    </section>
  )
}

function WaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M2.00018 11.9998C1.99611 9.94052 2.60742 7.93043 3.76672 6.20842C4.92601 4.4864 6.58495 3.12579 8.54719 2.28581C10.5094 1.44583 12.6953 1.15998 14.8553 1.45934C17.0153 1.75871 19.0634 2.63102 20.7711 3.97491C22.4789 5.3188 23.7788 7.08053 24.5243 9.06018C25.2697 11.0398 25.4297 13.1558 24.9852 15.1664C24.5408 17.1771 23.5103 18.9964 22.0223 20.4104C20.5342 21.8244 18.6506 22.7753 16.5922 23.1518C14.5338 23.5283 12.3862 23.3155 10.3952 22.5388L2.00018 24.9998L4.62518 17.1688C3.12656 15.3533 2.18349 13.1906 2.00018 10.9578" />
    </svg>
  )
}
