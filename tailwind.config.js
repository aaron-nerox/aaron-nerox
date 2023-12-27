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
      'purple': '#6A00F4',
      'light' : '#FCFCFA',  
      'dark' : '#000000',
      'dark-70' : '#262626',
      'dark-50': '#535353',
      'primary' : '#3CCCFF',
      'grey-primary' : '#D9D9D9'
    },
    extend: {
      backgroundImage: {
        'diamond' : "url('@/assets/icons/svg/ic_diamond_primary.svg')",
        'black-diamond' : "url('@/assets/icons/svg/black_diamond.svg')"
      }
    },
  },
  plugins: [],
}
