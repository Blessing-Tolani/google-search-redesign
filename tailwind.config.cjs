/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkGray: '#5f6368',
        darkGray2: '#4d5156',
        lightGray2: '#70757a',
        lightGray1: '#E7E7EA',
        black1: '#202124',
        blueLink: '#1a0dab',
        lightGray3: '#f1f3f4',
      },
    },
  },
  plugins: [],
};
