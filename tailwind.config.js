/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customLightPink: '#E77984',
        customPink: '#E25866',
        customLightYellow: '#F7AB5F',
        customYellow: '#FF9933',
        customLightBlue: '#8391D9',
        customBlue: '#6C7ED6',
      },
    },
  },
  plugins: [],
}