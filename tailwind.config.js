/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primaryFirst': '#00754a',
      'primarySecond': '#d4e9e2',
      'secondaryFirst': '#f1f8f6',
      'secondarySecond': '#f3f1e7',
      'primaryText': '#1e3932',
      'secondaryText': '#000000',
      'white': '#fff',
      'hoverButtonDark': '#000000b3',
      'backgroungOpacity': '#0000003b',
    },
    extend: {},
  },
  plugins: [],
}
