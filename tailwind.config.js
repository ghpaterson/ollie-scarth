/** @type {import('tailwindcss').Config} */

const OlliePortrait = "url('/images/OllieSelfPortrait.jpg')";
const OllieCamera = "url('/images/OllieCameraB&W.png')";
const OllieMirror = "url('/images/BeardMirror.JPG')";
const ChefHero = "url('/images/ChefHero.png')";
const OllieTukTuk = "url('/images/OllieTukTuk.png')";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        OlliePortrait: OlliePortrait,
        OllieCamera: OllieCamera,
        OllieMirror: OllieMirror,
        ChefHero: ChefHero,
        OllieTukTuk: OllieTukTuk,
      },
      fontFamily: {
        raleway: ["raleway", "sans-serif"],
        neueHaas: ["neue-haas", "sans-serif"],
        neueHaasMed: ["neue-haas-medium", "sans-serif"],
      },
      colors: {
        bone: "#F6F6F6",
        blak: "#111111",
        shade: "#2F2F2F",
        sand: "#C0BAB2",
      },
    },
  },
  plugins: [],
};
