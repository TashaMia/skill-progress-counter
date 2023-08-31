/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors:{
      'primary': '#5FA8D3',
      'secondary': '#1B4965',
      'tertiary': '#CAE9FF'
     }
    },
  },
  plugins: [],
}

