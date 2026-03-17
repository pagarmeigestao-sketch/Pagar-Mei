'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Monitoramento', href: '#monitoramento' },
  { label: 'Começar', href: '#comecar' },
]

const legalLinks = [
  { label: 'Termos de Uso', href: '/termos-de-uso' },
  { label: 'Política de Privacidade', href: '/privacidade' },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/pagarmei',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/pagarmei',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5511996740623',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    ),
  },
]

function BackToTop() {
  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      whileHover={{ y: -3, scale: 1.12 }}
      whileTap={{ scale: 0.92 }}
      className="w-9 h-9 rounded-xl flex items-center justify-center"
      style={{
        background: 'rgba(0,174,85,0.18)',
        border: '1px solid rgba(0,174,85,0.35)',
        color: '#4ade80',
      }}
      aria-label="Voltar ao topo"
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    </motion.button>
  )
}

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #021409 0%, #031510 55%, #031209 100%)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-60 right-[5%] w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,174,85,0.07) 0%, transparent 60%)' }}
        />
        <div
          className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,120,80,0.05) 0%, transparent 65%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(rgba(0,174,85,1) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Top separator */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(0,174,85,0.5) 40%, rgba(0,174,85,0.5) 60%, transparent 100%)' }}
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">


        {/* ── Main grid ── */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.6fr_1fr] gap-12">

          {/* Col 1: Brand */}
          <div>
            <Image
              src="/logo-white.svg"
              alt="Pagar MEI"
              width={120}
              height={32}
              className="mb-5"
            />
            <p className="text-[0.875rem] leading-relaxed mb-7" style={{ color: 'rgba(255,255,255,0.45)' }}>
              A forma mais simples de gerenciar seu MEI. Tudo pelo WhatsApp, sem complicação.
            </p>
            {/* Social icons */}
            <div className="flex gap-2">
              {socialLinks.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.93 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    color: 'rgba(255,255,255,0.4)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(0,174,85,0.18)'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,174,85,0.4)'
                    ;(e.currentTarget as HTMLElement).style.color = '#4ade80'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.09)'
                    ;(e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)'
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Col 2: Produto */}
          <div>
            <h5 className="text-[0.68rem] font-bold uppercase tracking-[0.14em] mb-5" style={{ color: 'rgba(255,255,255,0.28)' }}>
              Produto
            </h5>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map(l => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-2 text-[0.875rem] transition-all duration-200 hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    <span
                      className="w-0 group-hover:w-3 h-px transition-all duration-200 shrink-0"
                      style={{ background: '#00AE55' }}
                    />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200 inline-block">
                      {l.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h5 className="text-[0.68rem] font-bold uppercase tracking-[0.14em] mb-5" style={{ color: 'rgba(255,255,255,0.28)' }}>
              Contato
            </h5>
            <ul className="flex flex-col gap-5">
              {/* Address */}
              <li className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: 'rgba(0,174,85,0.12)', color: '#00AE55' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[0.8rem] font-medium text-white/80 m-0 leading-snug">Alameda Araguaia, 2044</p>
                  <p className="text-[0.78rem] text-white/40 m-0 leading-snug mt-0.5">Alphaville, Barueri/SP</p>
                </div>
              </li>
              {/* Phone */}
              <li>
                <motion.a
                  href="tel:+5511996740623"
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-3 group"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 group-hover:bg-[rgba(0,174,85,0.2)]"
                    style={{ background: 'rgba(0,174,85,0.12)', color: '#00AE55' }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 5.69 5.69l.9-.9a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 15.51z"/>
                    </svg>
                  </div>
                  <span className="text-[0.875rem] text-white/50 group-hover:text-white/80 transition-colors duration-200">(11) 99674-0623</span>
                </motion.a>
              </li>
              {/* Email */}
              <li>
                <motion.a
                  href="mailto:contato@pagarmei.com.br"
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-3 group"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 group-hover:bg-[rgba(0,174,85,0.2)]"
                    style={{ background: 'rgba(0,174,85,0.12)', color: '#00AE55' }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <span className="text-[0.875rem] text-white/50 group-hover:text-white/80 transition-colors duration-200">contato@pagarmei.com.br</span>
                </motion.a>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div>
            <h5 className="text-[0.68rem] font-bold uppercase tracking-[0.14em] mb-5" style={{ color: 'rgba(255,255,255,0.28)' }}>
              Legal
            </h5>
            <ul className="flex flex-col gap-2.5 mb-8">
              {legalLinks.map(l => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-2 text-[0.875rem] transition-all duration-200 hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    <span
                      className="w-0 group-hover:w-3 h-px transition-all duration-200 shrink-0"
                      style={{ background: '#00AE55' }}
                    />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200 inline-block">
                      {l.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            {/* Grupo */}
            <div
              className="rounded-xl px-4 py-3"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <p className="text-[0.7rem] text-white/30 m-0 leading-snug">
                Pagar MEI é uma empresa do grupo{' '}
                <span style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 600 }}>Meu Setor Contábil</span>
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="py-4 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-[0.78rem] m-0" style={{ color: 'rgba(255,255,255,0.25)' }}>
            &copy; {new Date().getFullYear()} Pagar MEI. Todos os direitos reservados.
          </p>
          <BackToTop />
        </div>

      </div>
    </footer>
  )
}
