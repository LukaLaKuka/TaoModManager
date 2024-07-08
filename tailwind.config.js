/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        yeon: ['Yeon Sung', 'sans-serif'],
        abz: ['Abeezee', 'sans-serif'],
      },
      colors: {
        'primary': '#bf0020', // Rojo
        'primary-darker': '#960019',
        'dark': '#0d1117', // Negro
        'light': '#f8f2f2', // Blanco
        'darker': '#0C0E12', // Negro Negro
        'gray': '#20242B', // Gris (fondo tarjta)
        'light-blue': '#8790A0', // Azulado extraño
        'drown-gray': '#8B8B8B', // Gris apagado
        'transparent': 'transparent',
      },
      borderRadius: {
        'input': '0.25rem',
        'button': '0.625rem',
      },
    },
  },
  plugins: [],
}