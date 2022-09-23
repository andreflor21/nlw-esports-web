/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        background: "url(/background.png)",
        "nlw-gradient":
          "linear-gradient(89.86deg, #9572FC 28.08%, #43E7AD 50.94%, #E1D55D 82.57%)",
        "card-gradient":
          " linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)",
      },
    },
  },
  plugins: [],
};
