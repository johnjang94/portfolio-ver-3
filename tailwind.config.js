/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "white-to-black": "white-to-black 5s ease-in-out forwards",
        "gradient-shift": "gradient-shift 2s ease infinite",
      },
      backgroundImage: {
        glow: "url('/src/assets/accessory/background.png')",
        design: "url('/src/assets/design/televu.png')",
        animated: "url('/src/assets/accessory/background2.gif')",
        nightSky: "url('/src/assets/accessory/nightSky.jpeg')",
        notFound: "url('/src/assets/not-found/notfoundbackground.png')",
        notFound2: "url('/src/assets/not-found/notfoundbackground2.png')",
        background: "url('/src/assets/accessory/background.gif')",
      },
    },
    keyframes: {
      "white-to-black": {
        "0%": { backgroundColor: "white", color: "black" },
        "100%": { backgroundColor: "black", color: "white" },
      },
      "gradient-shift": {
        "0%": { "background-position": "0% 50%" },
        "50%": { "background-position": "100% 50%" },
        "100%": { "background-position": "0% 50%" },
      },
    },
  },
  variants: {
    extend: {
      animation: ["group-hover"],
      fontFamily: {
        verdana: ["Verdana", "sans-serif"],
      },
    },
  },
  plugins: [],
};
