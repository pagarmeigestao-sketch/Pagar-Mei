import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PagarMEI | Resolva tudo do seu MEI pelo WhatsApp',
  description:
    'Pague DAS, emita notas fiscais, consulte pendências e mantenha seu CNPJ em dia com uma simples mensagem no WhatsApp.',
  keywords: 'MEI, DAS, nota fiscal, CNPJ, WhatsApp, microempreendedor',
  openGraph: {
    title: 'PagarMEI | Resolva tudo do seu MEI pelo WhatsApp',
    description:
      'Pague DAS, emita notas fiscais, consulte pendências e mantenha seu CNPJ em dia com uma simples mensagem no WhatsApp.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans bg-white text-brand-text antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
