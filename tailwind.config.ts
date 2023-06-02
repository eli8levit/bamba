import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        blob: "url(/blob.svg)",
      },
      fontFamily: {
        shantell: ["Shantell", ...defaultTheme.fontFamily.sans],
        pilowlava: ["Pilowlava", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "tree-poppy": {
          "50": "#fff9ed",
          "100": "#fff1d4",
          "200": "#ffdea8",
          "300": "#ffc670",
          "400": "#ffa237",
          "500": "#ff8f21",
          "600": "#f06a06",
          "700": "#c74f07",
          "800": "#9e3e0e",
          "900": "#7f360f",
          "950": "#451805",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
