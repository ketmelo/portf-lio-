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
      'verde': '#17625b',
      'verdinho': '#4fc3a1',
      'azulEscuro': '#0c2b32',
      'azul': '#041c34',
      'azulzao': '#091116',
      'bgverde' : '#1C2825',
      'fundo': '#2e6f24'
      }
    },

  },
  plugins: [],
}