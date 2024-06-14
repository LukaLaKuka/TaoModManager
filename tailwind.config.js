/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'primary': '#bf0020', // Rojo
      'dark': '#0d1117', // Negro
      'light': '#f8f2f2', // Blanco
      'darker': '#0C0E12',
      'gray': '#20242B',
      'light-blue': '#8790A0'
    },
    borderRadius: {
      'card': '1.875rem',
      'button': '0.625rem',
    },
    extend: {
      fontFamily: {
        yeon: ['Yeon Sung', 'sans-serif']
      }
    },
  },
  plugins: [],
}

