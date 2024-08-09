/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      container:{
        center: true,
        padding:"1.25rem"
      },
      colors: {
        primary: "#2997FF",
        secondary: "#FF0000",
        danger: "FF7A00",
        light: "#FFF",
        black: "#000",
      },
      fontFamily: {
        sans: ['SF Pro', 'sans-serif'],
        
      },
    },
  },
  plugins: [],
}

