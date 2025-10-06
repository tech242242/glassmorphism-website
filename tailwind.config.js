/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        purple: {
          neon: '#7B2FF7',
          500: '#7B2FF7',
        },
        blue: {
          neon: '#22D3EE',
          400: '#22D3EE',
        },
        pink: {
          neon: '#EC4899',
          500: '#EC4899',
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'text-shimmer': 'text-shimmer 2.5s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px #7B2FF7' },
          '100%': { boxShadow: '0 0 30px #22D3EE, 0 0 40px #7B2FF7' },
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '-500% 0' },
          '100%': { backgroundPosition: '500% 0' },
        },
      },
    },
  },
  plugins: [],
}