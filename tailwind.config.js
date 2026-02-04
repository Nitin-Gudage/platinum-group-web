/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#115af2',
        secondary: '#14171A',
        DarkBlue: '#0D47A1',
        accent: '#424769',
        background: '#E6E6E6',
        myGray: '#EAEFEF',
      },
    }
  },
  plugins: [],
}

