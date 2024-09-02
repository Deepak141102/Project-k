/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",          // Ensure this includes your HTML files
    "./src/**/*.{js,jsx,ts,tsx}", // Includes JavaScript/TypeScript files
  ],
  theme: {
    extend: {
      fontFamily: {
        mochiypop: ["Mochiy Pop P One", "sans-serif"],
      },
      backgroundPosition: {
        "-center-custom": "-25rem -340px",
      },
      
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'xs': '480px',  // Custom breakpoint for extra small screens
      },
    },
  },
  plugins: [],
};
