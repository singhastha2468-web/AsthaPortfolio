/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0A24',
        night: '#16143A',
        violet: '#6046F0',
        lilac: '#B9A6FF',
        peach: '#FFB497',
        butter: '#FFE08A',
        bubblegum: '#FF8AC4',
        paper: '#F5F2FF',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
