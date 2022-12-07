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
      'primary-light': '#FFF4F4',
      'purple': '#6A00F4'
    },
    extend: {
      backgroundImage: {
        'splash': "url('@/assets/images/splash_background_mobile.svg')",
        'hero': "url('@/assets/images/header_background.png')",
        'about': "url('@/assets/images/about_background.png')",
        'skills': "url('@/assets/images/skills_background.png')",
        'project': "url('@/assets/images/project_background.png')",
        'not-found': "url('@/assets/images/not_found_bg.png')"
      }
    },
  },
  plugins: [],
}
