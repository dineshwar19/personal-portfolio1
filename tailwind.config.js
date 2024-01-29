/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        128: "36rem",
      },
      width: {
        128: "36rem",
      },
    },
    fontFamily: {
      signature: ["Pacifico"],
      name: ["Quicksand"],
      new: ["IBM Plex Serif"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
