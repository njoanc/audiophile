/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,js,tsx,jsx}"],
  theme: {
    colors: {
      dark_orange: "#D87D4A",
      light_orange: "#FBAF85",
      dark_black: "#101010",
      light_dark: "#000000",
      dark_white_smoke: "#F1F1F1",
      light_white_smoke: "#FAFAFA",
      light_white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        semibold: 600,
        extrabold: 800,
      },
    },
  },
  plugins: [],
};
