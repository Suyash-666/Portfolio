module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'glow': '0 0 20px 2px #00fff7, 0 0 40px 4px #00fff7',
      },
      colors: {
        accent: '#00fff7',
      },
    },
  },
  plugins: [],
}
