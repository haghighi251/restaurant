/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    fontFamily: {
      'bold': ['CormorantGaramond-Bold'],
      'boldItalic': ['CormorantGaramond-BoldItalic'],
      'italic': ['CormorantGaramond-Italic'],
      'light': ['CormorantGaramond-Light'],
      'lightItalic': ['CormorantGaramond-LightItalic'],
      'medium': ['CormorantGaramond-Medium'],
      'mediumItalic': ['CormorantGaramond-MediumItalic'],
      'regular': ['CormorantGaramond-Regular'],
      'semiBold': ['CormorantGaramond-SemiBold'],
      'semiBoldItalic': ['CormorantGaramond-SemiBoldItalic'],
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
