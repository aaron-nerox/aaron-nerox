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
      // 'primary': '#F75656',
      'primary-dark': '#E82B2B',
      'primary-light': '#FFF4F4',
      'purple': '#6A00F4',

      'light' : '#FCFCFA',  
      'dark' : '#000000',
      'primary' : '#3CCCFF',
      'grey-primary' : '#D9D9D9'
    },
    extend: {
      backgroundImage: {
        'splash': "url('@/assets/images/splash_background_mobile.svg')",
        'hero': "url('@/assets/images/header_background.png')",
        'about': "url('@/assets/images/about_background.png')",
        'skills': "url('@/assets/images/skills_background.png')",
        'project': "url('@/assets/images/project_background.png')",
        'not-found': "url('@/assets/images/not_found_bg.png')",
        'diamond' : "url('@/assets/icons/svg/ic_diamond_primary.svg')",
        'black-diamond' : "url('@/assets/icons/svg/black_diamond.svg')"
      }
    },
  },
  plugins: [],
}
