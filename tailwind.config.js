/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Discord-inspired color system
        brand: {
          DEFAULT: '#5865F2', // Discord Blurple
          hover: '#4752C4',
          light: '#7289DA',
        },
        surface: {
          // Dark theme surfaces
          dark: {
            100: '#424549',
            200: '#36393F',
            300: '#2F3136',
            400: '#292B2F',
            500: '#202225',
            600: '#18191C',
          },
          // Light theme surfaces  
          light: {
            100: '#FFFFFF',
            200: '#F2F3F5',
            300: '#E3E5E8',
            400: '#D1D3D6',
          }
        },
        text: {
          // Text colors
          primary: '#DCDDDE',
          secondary: '#B9BBBE',
          muted: '#8E9297',
          light: '#2E3338',
          dark: '#060607',
        },
        status: {
          success: '#43B581',
          warning: '#FAA61A',
          danger: '#F04747',
          info: '#5865F2',
        }
      },
      fontSize: {
        'xxs': '0.625rem',
      },
      spacing: {
        badgeX: '0.5rem', // px-2 대체
        badgeY: '0.125rem', // py-0.5 대체
        badgeGap: '0.75rem', // gap-3 대체
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-in': 'slideIn 0.3s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      fontFamily: {
        sans: ['Inter', '"Segoe UI"', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Inter', '"Segoe UI"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'discord': '0.375rem',
      },
      boxShadow: {
        'discord': '0 1px 0 rgba(4,4,5,0.2),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05)',
        'discord-lg': '0 2px 10px 0 rgba(0,0,0,0.2)',
        'discord-xl': '0 8px 16px rgba(0,0,0,0.24)',
      }
    },
  },
  plugins: [],
}