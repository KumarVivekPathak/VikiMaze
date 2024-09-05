/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      screens: {
        xs: "300px",
        sm: "600px",
        md: "900px",
        lg: "1200px",
        "2x1": "1400px",
      }
    },
  },
  plugins: [],
}

