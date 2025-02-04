/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        coiny: ['Coiny', 'sans-serif'],
         bela: ['Belanosima', 'sans-serif'],
         inria: ['Inria Sans','sans-serif'],
      
      },
      colors:{
      'bgfundo': '#060505',
      'amarelo': '#D9DC00' ,
      'cinza': '#7A7A7A',
      'fundo': '#242424',
      'final': '#7D7C7C',
      'am': '#B0B300'
      }
    },

  },
  plugins: [],
}