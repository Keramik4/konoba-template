const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", defaultTheme.fontFamily.sans],
      },
      colors: {
        "gray-light": "#e0e0e0",
        blue: "#0288d1",
      },
    },
  },
  plugins: [],
}
