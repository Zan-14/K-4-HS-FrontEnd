/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'textGray': "#666666",
        'bgGray': "#F7F8FB",
        'pink-1000': "#e60278",
      },
      backgroundImage: {
        'homeBanner': "url('/img/HomeBanner.PNG')",
      },
    },
  },
  plugins: [],
};
