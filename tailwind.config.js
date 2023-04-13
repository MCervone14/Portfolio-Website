/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#222",
      secondary: "#FFF",
      accent: "#FF7961",
    },
    extend: {},
  },
  plugins: [],
};
