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
          50: '#020617', // slate-950
          100: '#0f172a', // slate-900
          200: '#1e293b', // slate-800
          300: '#334155', // slate-700
          400: '#475569', // slate-600
          500: '#64748b', // slate-500
          600: '#cbd5e1', // slate-300
          700: '#e2e8f0', // slate-200
          800: '#f1f5f9', // slate-100
          900: '#ffffff', // white
          950: '#f0f4ff', // light blue
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 60%, #e0e9ff 100%)',
        'card-gradient': 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        'accent-gradient': 'linear-gradient(135deg, #ab1f44 0%, #4338cb 100%)',
        'gold-gradient': 'linear-gradient(135deg, #b45309 0%, #d97706 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(204,45,85,0.15)',
        'glow-blue': '0 0 20px rgba(67,56,203,0.15)',
        'card': '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)',
        'card-hover': '0 10px 25px -5px rgba(0,0,0,0.05), 0 8px 10px -6px rgba(0,0,0,0.05)',
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
