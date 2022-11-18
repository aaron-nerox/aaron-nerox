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
      'dark': '#0F0202',
      'primary': '#F75656',
      'primary-dark': '#E82B2B',
      'primary-light': '#FFF4F4'
    },
    extend: {
      backgroundImage: {
        'splash': "url('./src/assets/images/splash_background_mobile.svg')",
        'hero': "url('./src/assets/images/header_background.png')",
        'diamond': "url('./src/assets/icons/ic_diamond_red.svg')",
        'about-banner': "url('./src/assets/images/about_banner.svg')",
      }
    },
  },
  plugins: [],
}
