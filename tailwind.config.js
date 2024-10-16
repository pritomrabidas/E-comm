/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container:{
        center:true
      },
      colors: {
        primary:"#FAFAFB",
        secondary:"#262626",
        brand:"#40BFFF",
      },
      fontFamily:{
        Poppins:["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
};
