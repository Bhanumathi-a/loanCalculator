/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#effaff",
          100: "#daf3ff",
          200: "#beeaff",
          300: "#91dfff",
          400: "#5ecafc",
          500: "#38aef9",
          600: "#2291ee",
          700: "#1974d1",
          800: "#1c62b1",
          900: "#1c538c",
          950: "#163455",
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
