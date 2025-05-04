// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('nativewind/preset')],
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",       // For Expo Router routes
    "./components/**/*.{js,jsx,ts,tsx}" // For shared components (optional)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
