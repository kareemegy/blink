/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        Gray1000: "#1A1A1A",
        Gray50: "#535353",
        Gray300: "#989898",
        Gray200: "#BABABA",
        GraySecondary:"#C9C9C9",
        blinkDashboard: "#1E1E1E",
        blinkbg: "#252525",
        gray400: "#2e2e2e",
        gray500: "#535353",
        bdwhite: "#757575",
        inputColor: " #9a9a9a",
        error: "#fda29b",
      },
    },
  },
  plugins: [],
};
