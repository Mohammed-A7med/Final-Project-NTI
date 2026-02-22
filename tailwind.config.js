export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serifCustom: ['Philosopher', 'serif'],
        sansCustom: ['Source Sans 3', 'sans-serif'],
      },
      colors: {
        cardBeige: '#f0eeeb',
        primaryDark: '#1a1a1a',
        accentGreen: '#6b8f71',
      },
    },
  },
  plugins: [],
};
