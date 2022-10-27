/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      first: "#00ABB3",
      second: "#3C4048",
      third: "#B2B2B2",
      fourth: "#EAEAEA",
    },
    extend: {
      backgroundImage: {
        hero: "url('https://c4.wallpaperflare.com/wallpaper/375/950/354/studio-ghibli-forest-green-background-trees-hd-wallpaper-preview.jpg')",
      },
    },
  },
  plugins: [],
};
