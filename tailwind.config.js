/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        darkBlue: "rgb(21, 28, 46)",
        semiDarkBlue: "rgb(33, 42, 70)",
        lightBlue: "rgb(52, 119, 245)",
        royalBlue: "rgb(39, 79, 153)",
        white: "rgb(251, 253, 255)",
        gray: "rgb(141, 147, 160)",
      },
      fontFamily: {
        mono: ["Space Mono"],
      },
    },
  },
  plugins: [],
};
