/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'slide': 'slide 5s linear infinite',
      },

      keyframes: {
        slide: {
          '0%, 100%': {
            'margin-top': '-270px',
          },
          '5%, 33%': {
            'margin-top': '-180px',
          },
          '38%, 66%': {
            'margin-top': '-90px',
          },
          '71%, 99.99%': {
            'margin-top': '0px'
          }
        },
      },
      
      

      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'mm': '947px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // Add any additional custom breakpoints here
      },
      colors: {
        primaryC: "#a21caf",
        accentC: "#D87AE7",
        blackC: "#0F0F0F",
        whiteC: "#FFFFFF",
        contentC: "#21093F",
      }
   

    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}

