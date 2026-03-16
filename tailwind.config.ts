import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00AE55',
          dark: '#007A63',
          hover: '#009E4D',
          light: '#E0F2E9',
          subtle: '#F0FDF4',
        },
        heading: '#0F1923',
        brand: {
          text: '#4B5563',
          muted: '#9CA3AF',
          bg: '#F9FAFB',
          border: '#E5E7EB',
          dark: '#0F1923',
        },
        wa: {
          bg: '#efeae2',
          header: '#008069',
          bubble: '#d9fdd3',
          green: '#25D366',
          online: '#4ade80',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'green-glow': '0 8px 28px rgba(0, 174, 85, 0.18)',
        green: '0 8px 28px rgba(0, 174, 85, 0.32)',
        'green-lg': '0 12px 40px rgba(0, 174, 85, 0.40)',
        'card': '0 4px 12px rgba(0,0,0,0.08)',
        'card-lg': '0 12px 32px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.05)',
        'xl-card': '0 24px 48px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.06)',
        'phone': '0 32px 64px rgba(0,0,0,0.28), 0 8px 24px rgba(0,0,0,0.2)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(160deg, #00AE55 0%, #007A63 55%, #005A4A 100%)',
        'cta-gradient': 'linear-gradient(160deg, #00AE55 0%, #007A63 100%)',
        'dark-gradient': 'linear-gradient(160deg, #111827 0%, #0F1923 100%)',
      },
    },
  },
  plugins: [],
}

export default config
