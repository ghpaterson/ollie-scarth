/** @type {import('tailwindcss').Config} */
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
      },
      fontFamily: {
        fungis: ["fungis", "sans-serif"],
        raleway: ["raleway", "sans-serif"],
      },
      colors: {
        bone: "#F6F6F6",
        blak: "#111111",
        shade: "#2F2F2F",
        honey: "#FFCB74",
      },
    },
  },
  plugins: [],
};
