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
        'hero-pattern': "url('.././unsplash_SUTfFCAHV_A.png')",
        'show-room-link': "url('.././0206N-Kawasaki-Motorcycle-1.png')",
        'blogs-link': "url('.././unsplash_yhW0qm86dOo.png')",
        'payment-link': "url('.././unsplash_4ORysIjH-mY.png')",
        'register-page': "url('.././DOBZLDOXNNHOTFOMLNVZQG2CHA-1.png')",
        'articles-page': "url('.././1227958138.png')",
        'article-page': "url('.././unsplash_Got-SV5YRPg.png')",
      },
    },
  },
  plugins: [],
};
