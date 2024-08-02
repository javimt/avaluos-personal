/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#194186',
        secondary: '#35B8D6',
        third:'#D2CB3C'
      },
      fontFamily: {
        sans: ['Fira Sans'],
        popins: ["Poppins", "sans-serif"]
      },
    },
  },
  plugins: [],
}