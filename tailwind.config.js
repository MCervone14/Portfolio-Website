/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E5090",
        lightPrimary: "#6781C6",
        secondary: "#FFFFFF",
        accent: "#FFB78A",
        title: "#1C1E53",
      },
    },
  },
  plugins: [],
};
