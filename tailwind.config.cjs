/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1f1f1f',
        secondary: '#f5f5f5',
        accent: '#1da08a',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
