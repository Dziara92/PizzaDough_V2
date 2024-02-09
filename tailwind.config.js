/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "420px",
      },
      colors: {
        primaryBgc: "#0D0D0D",
        buttonBgc: "#A61103",
      },
      fontFamily: {
        primaryFont: "Protest Strike",
      },
    },
  },
  plugins: [],
};

// "./index.html",
