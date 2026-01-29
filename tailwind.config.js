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
        primary: {
          light: '#a7f3d0', // Mint
          DEFAULT: '#06b6d4', // Cyan
          dark: '#0e7490',
        },
        accent: {
          light: '#fcd34d', // Gold
          DEFAULT: '#f59e42', // Orange
          dark: '#b45309',
        },
        highlight: {
          light: '#f9a8d4', // Pink
          DEFAULT: '#e11d48', // Rose
          dark: '#be185d',
        },
        info: {
          light: '#c7d2fe', // Periwinkle
          DEFAULT: '#6366f1', // Indigo
          dark: '#3730a3',
        },
        success: {
          light: '#bbf7d0',
          DEFAULT: '#22c55e',
          dark: '#166534',
        },
        warning: {
          light: '#fef9c3',
          DEFAULT: '#eab308',
          dark: '#a16207',
        },
        danger: {
          light: '#fee2e2',
          DEFAULT: '#ef4444',
          dark: '#991b1b',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.4s cubic-bezier(0.4,0,0.2,1)',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.4,0,0.2,1)',
        'gradient-border': 'gradientBorder 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'scale(0.98)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        gradientBorder: {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
