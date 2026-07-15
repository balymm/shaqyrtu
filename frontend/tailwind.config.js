/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBF6EC",
        ivory: "#FFFDF8",
        gold: {
          DEFAULT: "#B8944F",
          light: "#D9BE86",
          dark: "#8E6E32",
        },
        ink: "#3B342A",
        line: "#E4D6B8",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        script: ["'Great Vibes'", "cursive"],
        body: ["'Montserrat'", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(59, 52, 42, 0.25)",
      },
      backgroundImage: {
        "gold-radial":
          "radial-gradient(circle at 50% 0%, rgba(184,148,79,0.18), transparent 60%)",
      },
    },
  },
  plugins: [],
};
