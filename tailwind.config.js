/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-glow': 'var(--primary-glow)',
        'secondary-glow': 'var(--secondary-glow)',
      },
      ringColor: {
        'primary-glow': 'var(--primary-glow)',
      },
      fontFamily: {
        sans: ['Instrument Sans', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
          '50%': {
            opacity: 0.8,
            transform: 'scale(1.05)',
          },
        },
      },
    },
  },
  plugins: [],
};