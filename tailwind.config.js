/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      worksans: ["Work Sans", "sans-serif"],
    },

    extend: {
      colors: {
        purple: "#3A243B",
        bgColor: "#3A434C",
      },
    },
  },
  plugins: [],
};
