/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      covered: ["Covered By Your Grace", "cursive"],
      manrope: ["Manrope", "sans-serif"],
    },

    extend: {
      colors: {
        "primary-black": "#1c1c1c",
        "primary-gray": "#efefef",
        "primary-gray-mid": "#d1d7dc",
        "primary-gray-dark": "#4e4e4e",
        "primary-green": "#e8eee7",
      },
    },
  },
  plugins: [],
};
