/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        googlesans: ['google-sans', 'sans-serif'],
      },
      colors: {
        "primary-blue": "#4285F4",
        "primary-green": "#34A853",
        "primary-yellow": "#F9AB00",
        "primary-red": "#EA4335",
        "primary-white": "#F1F3F4",
        "primary-black": "#000000",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}