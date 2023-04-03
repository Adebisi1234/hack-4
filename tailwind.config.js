/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F8FBE8",
        "dark-green": "#112B32",
        "deep-cream": "#E3F0AA",
        red: "#FB89FB",
        "light-blue": "#DDEAE3",
        "light-green": "#C8E5E1"
      }
    },
  },
  plugins: [],
}

