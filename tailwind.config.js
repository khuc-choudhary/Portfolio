/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7950E8',
        lavender: '#B69CFF',
        'lav-light': '#EDE5FF',
        'lav-soft': '#D9C8FF',
        canvas: '#FAF9FF',
        ink: '#211B3A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(121, 80, 232, 0.18)',
        glow: '0 20px 60px -10px rgba(121, 80, 232, 0.45)',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        floatSlow: { '0%,100%': { transform: 'translate(0,0)' }, '50%': { transform: 'translate(10px,-16px)' } },
        blink: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
        drift: { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '50%': { transform: 'translate(40px,30px) scale(1.12)' } },
        spinSlow: { to: { transform: 'rotate(360deg)' } },
        pulseNode: { '0%,100%': { opacity: 0.55, transform: 'scale(1)' }, '50%': { opacity: 1, transform: 'scale(1.35)' } },
        rise: { '0%': { transform: 'translateY(0)', opacity: 0 }, '15%': { opacity: 0.8 }, '100%': { transform: 'translateY(-120px)', opacity: 0 } },
        shimmer: { to: { backgroundPosition: '200% center' } },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 9s ease-in-out infinite',
        blink: 'blink 1s steps(1) infinite',
        drift: 'drift 18s ease-in-out infinite',
        'spin-slow': 'spinSlow 40s linear infinite',
        'pulse-node': 'pulseNode 3s ease-in-out infinite',
        rise: 'rise 8s ease-in infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
}
