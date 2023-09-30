/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'textGray': "#666666",
        'bgGray': "#F7F8FB",
        'pink-1000': "#e60278",
        'graybg': '#F6F6F6',
        'graytext': '#545b6a',
        'grayborder': '#D9D9D9',
        'bluetext': '#1c3f94',
      },
      backgroundImage: {
        'homeBanner': "url('/img/HomeBanner.PNG')",
      },
    },
  },
  plugins: [],
};
