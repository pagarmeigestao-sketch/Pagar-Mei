'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 h-[76px] flex items-center bg-white shadow-[0_1px_0_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]"
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        <Link href="#" className="no-underline">
          <Image
            src="/logo.svg"
            alt="PagarMEI"
            width={140}
            height={36}
            priority
          />
        </Link>

        <Link
          href="https://wa.me/5511996740623?text=Oi%20Pagar%20MEI%2C%20quero%20come%C3%A7ar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 font-bold rounded-full text-sm px-5 py-2.5 transition-all duration-200 bg-primary text-white hover:bg-primary-hover hover:-translate-y-0.5"
        >
          Quero começar
        </Link>
      </div>
    </motion.header>
  )
}
