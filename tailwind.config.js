/** @type {import('tailwindcss').Config} */
export default {
  content: ['/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        textPrimary: '#D3AF37',
        bgPrimary: '#252C33',
      },
      backgroundImage: {
        'hero-pattern': "url('./Img/unsplash_SUTfFCAHV_A.png')",
        'show-room-link': "url('./Img/0206N-Kawasaki-Motorcycle-1.png')",
        'blogs-link': "url('./Img/unsplash_yhW0qm86dOo.png')",
        'payment-link': "url('./Img/unsplash_4ORysIjH-mY.png')",
      },
    },
  },
  plugins: [],
};
