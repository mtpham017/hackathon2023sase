/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.svelte',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', 'sans-serif'], // Replace with your preferred font stack
      },
      colors: {
        primary: '#007BFF', // Define your primary color
        secondary: '#6C757D', // Define your secondary color
        // Add more custom color definitions as needed
      },
      backgroundColor: {
        primary: '#007BFF', // Set a background color for the primary theme
        secondary: '#6C757D', // Set a background color for the secondary theme
        // Add more custom background color definitions as needed
      },
    },
  },
  plugins: [],
}
