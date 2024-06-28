/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
  "animation": {
    "background-shine": "background-shine 2s linear infinite"
  },
  "keyframes": {
    "background-shine": {
      "from": {
        "backgroundPosition": "0 0"
      },
      "to": {
        "backgroundPosition": "-200% 0"
      }
    }
  }
}
    ,
  },
  plugins: [],
  darkMode: 'class',
}