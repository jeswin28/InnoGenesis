/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#008080',    // Teal
        secondary: '#F5F5DC',  // Cream
        tertiary: '#B8C6D0',   // Misty Blue
        accent: {
          denim: '#6E8B9F',    // Faded Denim
          navy: '#2E5A88',     // Light Navy Blue
          light: '#F5F5DC',    // Cream for light backgrounds
          dark: '#2E5A88',     // Navy for dark accents
        },
        misty: {
          light: '#D9E1E7',    // Light Misty Blue
          DEFAULT: '#B8C6D0',  // Misty Blue
          dark: '#6E8B9F',     // Dark Misty Blue (Faded Denim)
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #008080, #2E5A88)',
      },
    },
  },
  plugins: [],
};