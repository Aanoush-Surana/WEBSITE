/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      colors: {
        // IIIT Pune brand colors inspired by their maroon/dark logo
        brand: {
          50: '#fdf2f4',
          100: '#fce7ea',
          200: '#f9d1d8',
          300: '#f4aab8',
          400: '#ed7490',
          500: '#e24b6f',
          600: '#cc2d55',
          700: '#ab1f44',
          800: '#8f1d3e',
          900: '#7a1c3a',
          950: '#3d0a1a',
        },
        // Deep navy for dark backgrounds
        navy: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d4fe',
          300: '#a4b4fd',
          400: '#7e8bf9',
          500: '#6063f3',
          600: '#4e46e8',
          700: '#4338cb',
          800: '#3730a3',
          900: '#312d8f',
          950: '#1e1a54',
        },
        dark: {
          50: '#f8f9ff',
          100: '#eef0f8',
          200: '#d5d8ed',
          300: '#b0b5d7',
          400: '#858bb8',
          500: '#63689d',
          600: '#4d5283',
          700: '#3d406b',
          800: '#2a2d52',  
          900: '#1a1c35',
          950: '#0d0e1f',
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0d0e1f 0%, #1a1c35 40%, #2a1030 70%, #3d0a1a 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(30,26,84,0.8) 0%, rgba(61,10,26,0.8) 100%)',
        'accent-gradient': 'linear-gradient(135deg, #ab1f44 0%, #4338cb 100%)',
        'gold-gradient': 'linear-gradient(135deg, #d4a017 0%, #f5c842 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(204,45,85,0.3)',
        'glow-blue': '0 0 20px rgba(67,56,203,0.3)',
        'card': '0 4px 20px rgba(0,0,0,0.3)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
