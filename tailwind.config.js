/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: '#2E5077',
      },
      fontFamily: {
        Heading: ["Roboto", 'serif'],
      },
    },
  },
  plugins: [],
}