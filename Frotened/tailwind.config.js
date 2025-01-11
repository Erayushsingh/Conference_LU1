/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  
  ],
  theme: {
    extend: {
      animation: {
        flash: 'flash 2s ease-in-out infinite alternate',
        marquee: 'marquee 20s linear infinite',
        'zoom-out-in': 'zoom-out-in 4s ease-in-out infinite',  
      },
      keyframes: {
        flash: {
          '0%, 100%': { opacity: 1 },  
          '50%': { opacity: 0 }, 
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'zoom-out-in': {
          '0%': {
            transform: 'scale(1)', 
            opacity: 1,
          },
          '50%': {
            transform: 'scale(0.8)', 
            opacity: 1,
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 1, 
          },
        },
      },
    },
  },
  plugins: [],
};

