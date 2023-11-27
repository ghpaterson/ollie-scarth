/** @type {import('tailwindcss').Config} */

const bicycleHero = "url('/images/bicycleHero.png')";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image":
          "url('https://images.pexels.com/photos/3178786/pexels-photo-3178786.jpeg')",
        "landing-about":
          "url('https://images.pexels.com/photos/3692639/pexels-photo-3692639.jpeg')",
        bicycleHero: bicycleHero,
      },
      fontFamily: {
        raleway: ["raleway", "sans-serif"],
        latosce: ["latosce", "sans-serif"],
        neueHaas: ["neue-haas", "sans-serif"],
        neueHaasMed: ["neue-haas-medium", "sans-serif"],
      },
      colors: {
        bone: "#F6F6F6",
        blak: "#111111",
        shade: "#2F2F2F",
        honey: "#FFCB74",
        sand: "#C0BAB2",
        olive: "#656839",
      },
    },
  },
  plugins: [],
};
