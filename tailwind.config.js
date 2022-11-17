/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'transparent' : 'transparent',
      'white': '#ffffff',
      'black': '#000000',
      'primary': '#F75656',
      'primary-light': '#FFF4F4'
    },
    extend: {
      backgroundImage: {
        'splash': "url('./src/assets/images/splash_background_mobile.svg')"
      }
    },
  },
  plugins: [],
}
