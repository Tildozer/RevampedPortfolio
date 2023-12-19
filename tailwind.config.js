/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {pattern: /#32CD32/},
    {pattern: /#FFFFFF/},
    {pattern: /#f7df1e/},
    {pattern: /#007acc/},
    {pattern: /#264de4/},
    {pattern: /#06b6d4/},
    {pattern: /#e34c26/},
    {pattern: /#027DFD/},
    {pattern: /#0175C2/},
  ],
  theme: {
    extend: {
      fontFamily: {
        "Bebas" : ['Bebas Neue', 'verdana'],
        "Playfair": ['Playfair Display', 'serif'],
      },
      screens: {
        "xs": '530px'
      },
      colors: {
        "#32CD32": '#32CD32',
        "#FFFFFF": '#FFFFFF',
        "#f7df1e": '#f7df1e',
        "#007acc": '#007acc',
        "#264de4": '#264de4',
        "#06b6d4": '#06b6d4',
        "#e34c26": '#e34c26',
        "#027DFD": '#027DFD',
        '#0175C2': '#0175C2'
      }
    },
  },
  plugins: [],
};
