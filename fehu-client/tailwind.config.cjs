/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-brand": "#181818",
        "dark-gray-brand": "#101010",
        "medium-gray-brand": "#474747",
        "light-gray-brand": "#F0F0F0",
        "very-light-gray-brand": "#FBFBFB",
        "blue-brand": "#1E90FB",
        "orange-brand": "#F0984D",
      },
    },
    boxShadow: {
      sm: "0px 2px 4px 0px rgba(11, 10, 55, 0.15)",
      lg: "0px 8px 20px 0px rgba(18, 16, 99, 0.06)",
    },
  },
  plugins: [],
};
