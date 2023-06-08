/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        blinkDashboard: "#1E1E1E",
        blinkbg: "#252525",
        gray200: "#BABABA",
        gray300: "#989898",
        gray400: "#2e2e2e",
        error: "#fda29b",
      },
    },
  },
  plugins: [],
};
