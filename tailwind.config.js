/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{html,js}", // or any other file extensions you're using
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E42961',  // Custom primary color (hexadecimal)
      },
    },
  },
  plugins: [
    require("daisyui"), // Add daisyUI plugin here
  ],
}

