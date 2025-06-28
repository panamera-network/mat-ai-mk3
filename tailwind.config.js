// Tailwind configuration //
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],

  safelist: [
    'animate-wave', // force Tailwind to keep this class
  ],
  
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(2)' },
        },
      },
      animation: {
        wave: 'wave 1s infinite ease-in-out',
      },
    },
  },
  plugins: [],
  
};
  

