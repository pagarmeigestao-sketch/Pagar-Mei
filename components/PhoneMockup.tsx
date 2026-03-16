'use client'

import { motion } from 'framer-motion'

interface PhoneMockupProps {
  title?: string
  subtitle?: string
  children: React.ReactNode
  float?: boolean
  chatHeight?: string
}

export default function PhoneMockup({
  title = 'PagarMEI',
  subtitle = 'Online agora',
  children,
  float = false,
  chatHeight = 'min-h-[360px] max-h-[360px]',
}: PhoneMockupProps) {
  const content = (
    <div className="relative w-[272px] select-none mx-auto">

      {/* Dark gray volume buttons — left */}
      <div className="absolute -left-[4px] top-[100px] w-[4px] h-7 bg-gradient-to-r from-[#3A3A3C] to-[#4A4A4C] rounded-l-[3px] shadow-[-1px_0_2px_rgba(0,0,0,0.3)]" />
      <div className="absolute -left-[4px] top-[140px] w-[4px] h-11 bg-gradient-to-r from-[#3A3A3C] to-[#4A4A4C] rounded-l-[3px] shadow-[-1px_0_2px_rgba(0,0,0,0.3)]" />
      <div className="absolute -left-[4px] top-[168px] w-[4px] h-11 bg-gradient-to-r from-[#3A3A3C] to-[#4A4A4C] rounded-l-[3px] shadow-[-1px_0_2px_rgba(0,0,0,0.3)]" />
      {/* Power button — right */}
      <div className="absolute -right-[4px] top-[128px] w-[4px] h-16 bg-gradient-to-l from-[#3A3A3C] to-[#4A4A4C] rounded-r-[3px] shadow-[1px_0_2px_rgba(0,0,0,0.3)]" />

      {/* Dark gray outer ring */}
      <div
        className="rounded-[46px] p-[1.5px]"
        style={{
          background: 'linear-gradient(160deg, #5A5A5C 0%, #3E3E40 40%, #2C2C2E 100%)',
          boxShadow: '0 40px 100px rgba(0,0,0,0.4), 0 16px 40px rgba(0,0,0,0.25), inset 0 1.5px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.4)',
        }}
      >
        {/* Dark gray body */}
        <div
          className="rounded-[44.5px] p-[3px]"
          style={{
            background: 'linear-gradient(180deg, #48484A 0%, #3A3A3C 40%, #2C2C2E 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.2)',
          }}
        >
          {/* Screen */}
          <div className="rounded-[42px] overflow-hidden bg-[#efeae2]">

            {/* Status bar + WA header — all green, no black */}
            <div className="bg-[#008069]">
              {/* Status bar row */}
              <div className="px-5 pt-2.5 pb-0 flex items-center justify-between relative h-9">
                <span className="text-white/95 text-[0.6rem] font-semibold tracking-wide">9:41</span>

                {/* Dynamic Island */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-[6px] w-[62px] h-[20px] rounded-full"
                  style={{ background: '#05473B' }}
                />

                {/* Status icons */}
                <div className="flex items-center gap-[3px]">
                  <svg width="13" height="9" viewBox="0 0 14 10" fill="white">
                    <rect x="0" y="6" width="2" height="4" rx="0.5" opacity="0.4"/>
                    <rect x="3" y="4" width="2" height="6" rx="0.5" opacity="0.6"/>
                    <rect x="6" y="2" width="2" height="8" rx="0.5" opacity="0.8"/>
                    <rect x="9" y="0" width="2" height="10" rx="0.5" opacity="1"/>
                  </svg>
                  <svg width="13" height="9" viewBox="0 0 16 12" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M1 4.5C4.5 1 11.5 1 15 4.5" opacity="1"/>
                    <path d="M3.5 7C5.5 5 10.5 5 12.5 7" opacity="0.8"/>
                    <path d="M6 9.5C7 8.5 9 8.5 10 9.5" opacity="0.6"/>
                    <circle cx="8" cy="11" r="1" fill="white" stroke="none"/>
                  </svg>
                  <svg width="19" height="9" viewBox="0 0 22 11" fill="none">
                    <rect x="0.5" y="0.5" width="17" height="10" rx="2.5" stroke="white" strokeOpacity="0.7"/>
                    <rect x="2" y="2" width="13" height="7" rx="1.5" fill="white"/>
                    <path d="M18.5 3.5V7.5C19.3 7.1 20 6.1 20 5.5C20 4.9 19.3 3.9 18.5 3.5Z" fill="white" fillOpacity="0.4"/>
                  </svg>
                </div>
              </div>

              {/* WA contact bar */}
              <div className="px-3 py-2 flex items-center gap-2.5">
                <svg width="9" height="15" viewBox="0 0 10 16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                  <path d="M8 2L2 8L8 14"/>
                </svg>
                <div className="w-8 h-8 bg-white/25 rounded-full flex items-center justify-center overflow-hidden shrink-0 ring-[1.5px] ring-white/20">
                  <img src="/logo.svg" alt="PagarMEI" className="w-5 brightness-0 invert" />
                </div>
                <div className="flex-1 min-w-0">
                  <strong className="text-white text-[0.8125rem] block leading-tight truncate">{title}</strong>
                  <span className="text-white/65 text-[0.6rem]">{subtitle}</span>
                </div>
                <div className="flex items-center gap-3 opacity-75">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.26 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.17 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                    <circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Chat area */}
            <div className={`phone-bg ${chatHeight} overflow-y-auto flex flex-col gap-2 p-3`}>
              {children}
            </div>

            {/* Input bar */}
            <div className="bg-[#f0f2f5] px-2 py-2 flex items-center gap-2 border-t border-[#D8DBE0]">
              <div className="flex-1 bg-white rounded-full px-3 py-1.5 flex items-center gap-2 shadow-sm">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B0B8C1" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                <span className="text-[0.625rem] text-gray-400 flex-1">Mensagem</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B0B8C1" strokeWidth="1.5"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#008069] flex items-center justify-center shrink-0 shadow-sm">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
              </div>
            </div>

            {/* Home bar */}
            <div className="bg-[#f0f2f5] flex items-center justify-center py-1.5">
              <div className="w-[90px] h-[4px] bg-[#C8CAD0]/70 rounded-full" />
            </div>

          </div>
        </div>
      </div>
    </div>
  )

  if (float) {
    return (
      <motion.div
        animate={{ y: [0, -11, 0] }}
        transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
      >
        {content}
      </motion.div>
    )
  }

  return content
}
