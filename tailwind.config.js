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
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
      },
      animation: {
        slideDown: "slideDown 0.8s ease-in-out",
      },
    },
  },
  plugins: [],
};

// "./index.html",
