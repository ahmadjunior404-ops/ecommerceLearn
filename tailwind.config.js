/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Cinzel', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bounce-in': {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'blob-float-1': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(80px, -60px) scale(1.15)' },
          '66%': { transform: 'translate(-40px, 50px) scale(0.9)' },
        },
        'blob-float-2': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-90px, 70px) scale(1.2)' },
          '66%': { transform: 'translate(50px, -40px) scale(0.85)' },
        },
        'blob-float-3': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(60px, 60px) scale(1.25)' },
        },
        'gradient-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'bounce-in': 'bounce-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'blob-1': 'blob-float-1 12s ease-in-out infinite',
        'blob-2': 'blob-float-2 15s ease-in-out infinite',
        'blob-3': 'blob-float-3 18s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 10s ease infinite',
      }
    },
  },
  plugins: [],
}