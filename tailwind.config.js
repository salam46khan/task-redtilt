/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lignt: "#e2e2e2",
        dark: "#1A0606"
      },
      fontFamily: {
        NormalFont: ["Poppins", "sans-serif"]
      },
      screens: {
        tablet: '768px',
        desktop: '976px',
      }
    },
  },
  plugins: [],
}

