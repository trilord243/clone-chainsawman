/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      borde: "#dfe1e5",
      botones: "#f2f2f2",
    },
    extend: {
      backgroundImage: {
        Icon: "url('/src/assets/grid_view_black_24dp.svg')",
        Search: "url('/src/assets/search_black_24dp.svg')",
        mic: "url('/src/assets/googlemic_color_24dp.png')",
      },
    },
  },
  plugins: [],
};
