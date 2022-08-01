module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f9f9f8',
        border: '#e7e7e9',
        gray: {
          0: '#d1d2d2',
          1: '#767a7f'
        }
      }
    },
  },
  plugins: [],
}