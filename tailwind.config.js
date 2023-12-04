/** @type {import('tailwindcss').Config} */

const bicycleHero = "url('/images/bicycleHero.png')";
const OlliePortrait = "url('/images/OllieSelfPortrait.jpg')";
const OllieCamera = "url('/images/OllieCameraB&W.png')";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bicycleHero: bicycleHero,
        OlliePortrait: OlliePortrait,
        OllieCamera: OllieCamera,
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
