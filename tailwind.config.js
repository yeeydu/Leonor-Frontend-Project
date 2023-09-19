/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      // Add new colors
      colors: {
        'custom-green-1': '#95C023',
        'custom-green-2': '#4D782E',
        
    },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
 // prefix: 'tw-',
}

