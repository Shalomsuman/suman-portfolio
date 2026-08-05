/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D9488',
          dark: '#0F766E',
          light: '#14B8A6',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F4E4C1',
          dark: '#B8941F',
        },
        teal: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
          950: '#042F2E',
        },
        royal: {
          DEFAULT: '#5B21B6',
          light: '#8B5CF6',
          dark: '#2E1065',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        accent: ['Cinzel', '"Playfair Display"', 'serif'],
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(0.8)' },
          '50%': { opacity: 1, transform: 'scale(1.3)' },
        },
      },
      animation: {
        blob: 'blob 8s infinite',
        float: 'float 5s ease-in-out infinite',
        shimmer: 'shimmer 4s linear infinite',
        twinkle: 'twinkle 2.6s ease-in-out infinite',
      },
      boxShadow: {
        gold: '0 10px 40px -10px rgba(212, 175, 55, 0.45)',
        teal: '0 10px 40px -10px rgba(13, 148, 136, 0.45)',
        royal: '0 10px 40px -10px rgba(91, 33, 182, 0.5)',
      },
    },
  },
  plugins: [],
}
