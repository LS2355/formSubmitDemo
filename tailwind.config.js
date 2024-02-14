/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "textColor": "#a5a8ad",
        "sectionTitle" : "#e3e3e3",
        "lightGrey" : "rgb(59, 59, 59)", 
        "darkGrey" : "#0f0f0f",
        "darkishGrey" : "#2e2e2e",
        "accent" : "#387deb",
        "tan" : "#dbd7c8",
        "comment": "rgb(28,28,30)",
      }
    },
  },
  plugins: [],
}