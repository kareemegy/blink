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
        Gray900: "#252525",
        DarkestWhite: "#9A9A9A",
        GraySecondary: "#C9C9C9",
        Lightest: "#4C4C4C",
        Darker: "#2D2D2D",
        EventBg: "#2E2E2E",
        Primary700: "#1A1A1A66",
        blinkDashboard: "#1E1E1E",
        blinkbg: "#252525",
        gray400: "#2e2e2e",
        gray500: "#535353",
        bdwhite: "#757575",
        inputColor: " #9a9a9a",
        inputBg: "#000000",
        error: "#fda29b",
      },
    },
  },
  plugins: [],
};
