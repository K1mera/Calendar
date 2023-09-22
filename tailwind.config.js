/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cormorant: "'Cormorant', serif",
        openSans: "'Open Sans', sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

