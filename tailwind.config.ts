import type { Config } from 'tailwindcss'

const config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00B894',
        secondary: '#6C757D',
        tertiary: '#8B7AD9',
        white: '#FFFFFF',
        mono100: '#F8F9FA',
        mono200: '#CED4DA',
        mono300: '#495057',
        error: '#E03131',
        social: '#03C75A',
      },
      fontSize: {
        h1: ['3.052rem', { lineHeight: '1.2' }],
        h2: ['2.441rem', { lineHeight: '1.25' }],
        h3: ['1.953rem', { lineHeight: '1.3' }],
        h4: ['1.563rem', { lineHeight: '1.4' }],
        h5: ['1.25rem', { lineHeight: '1.5' }],
        h6: ['1rem', { lineHeight: '1.6' }],
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
