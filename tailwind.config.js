/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          DEFAULT: '#4f46e5', // Indigo 600
          dark: '#1e1b4b', // Indigo 950
          light: '#818cf8', // Indigo 400
          accent: '#0ea5e9', // Sky 500
        },
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      animation: {
        'drift': 'drift 12s ease-in-out infinite',
        'gradient-text': 'gradientText 8s ease-in-out infinite',
        'spin-soft': 'spinSoft 10s linear infinite',
        'spin-reverse': 'spinReverse 10s linear infinite',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(-38px, 30px, 0) scale(1.06)' },
        },
        gradientText: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        spinSoft: {
          'to': { transform: 'rotate(360deg)' },
        },
        spinReverse: {
          'to': { transform: 'rotate(-360deg)' },
        }
      }
    }
  },
  plugins: [],
}