/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f97316',
        secondary: '#153b8f',
        accent: '#126d39',
      },
    },
  },
  plugins: [],
}
