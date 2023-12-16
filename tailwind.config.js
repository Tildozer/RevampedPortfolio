/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Bebas' : ['Bebas Neue', 'verdana'],
        'Playfair': ['Playfair Display', 'serif'],
      },
      screens: {
        xs: '530px'
      }
    },
  },
  plugins: [],
};
