/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      sm: '20.4375rem',
      md: '45rem',
      xl: '74rem',
    },

    colors: {
      "transparent": "transparent",
      "neutral": "#fff",
      "neutral-100": "#EEEFF4",
      "neutral-200": "#C8CCD8",
      "neutral-400": "#7D828F",
      "neutral-500": "#60636D",
      "neutral-800": "#1B1D23",
      "danger": "#DF5656"
    },

    extend: {},
  },
  plugins: [],
}