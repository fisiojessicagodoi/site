/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideUp: 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      colors: {
        rosa: {
          claro: '#F8BBD0',
          escuro: '#F06292',
        },
        lilas: {
          claro: '#E1BEE7',
          escuro: '#8E24AA',
        },
        nude: '#F5E9E2',
        bege: '#F3E5AB',
        branco: '#FFFFFF',
        cinza: {
          claro: '#F5F5F5',
          escuro: '#4A4A4A',
        },
        dourado: '#FFD700',
        terracota: {
          100: '#f3ded3', // claro, menos saturado
          600: '#d9a08b', // base do gradiente, menos saturado
          700: '#b97e67', // escuro, menos saturado
          800: '#8c5a44', // mais escuro, menos saturado
          900: '#5a3323', // quase marrom, menos saturado
        },
      },
      backgroundImage: {
        'sand-to-coral': 'linear-gradient(to right, #F5E9E2, #d9a08b)',
      },
    },
  },
  plugins: [],
};