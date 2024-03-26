/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage:{
        'cool-photo': "url('/src/images/background.jpeg')",
      }
    },
  },
  plugins: [],
}

