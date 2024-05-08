/** @type {import('tailwindcss').Config} */
export default {
  content: ['/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        textPrimary: '#D3AF37',
        bgPrimary: '#252C33',
      },
    },
  },
  plugins: [],
};
