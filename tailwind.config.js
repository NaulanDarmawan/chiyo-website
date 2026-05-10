module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./assets/data/content.json",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        6: "repeat(6, minmax(0, 1fr))", // Mendaftarkan grid-rows-6
      },
      gridColumnStart: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
      },
      gridRowStart: {
        5: "5",
        6: "6",
      },
      colors: {
        "chiyo-neon": "#00FF99",
        "chiyo-pink": "#FF007A",
      },
    },
  },
};
