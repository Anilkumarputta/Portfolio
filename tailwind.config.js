/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Modern color palette
        primary: {
          light: '#60a5fa', // Bright blue light
          DEFAULT: '#2563eb', // Bold blue - more vibrant and visible
          dark: '#1e40af', // Deep blue
        },
        secondary: {
          light: '#A78BFA', // Light Purple
          DEFAULT: '#8B5CF6', // Purple
          dark: '#7C3AED',
        },
        accent: {
          light: '#FCD34D', // Light Amber
          DEFAULT: '#F59E0B', // Amber
          dark: '#D97706',
        },
        success: {
          light: '#6EE7B7',
          DEFAULT: '#10B981', // Green
          dark: '#059669',
        },
        error: {
          light: '#FCA5A5',
          DEFAULT: '#EF4444', // Red
          dark: '#DC2626',
        },
        warning: {
          light: '#FCD34D',
          DEFAULT: '#F59E0B',
          dark: '#D97706',
        },
        background: {
          light: '#F9FAFB',
          dark: '#111827',
        },
        text: {
          light: '#1F2937',
          dark: '#F9FAFB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.4,0,0.2,1)',
        'fade-in-fast': 'fadeIn 0.4s cubic-bezier(0.4,0,0.2,1)',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.4,0,0.2,1)',
        'slide-in': 'slideIn 0.5s cubic-bezier(0.4,0,0.2,1)',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.4,0,0.2,1)',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.7)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
