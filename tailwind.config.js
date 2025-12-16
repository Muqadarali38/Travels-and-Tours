/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',      // Sky blue
        secondary: '#f59e0b',    // Warm amber/sunset
        accent: '#14b8a6',       // Teal/ocean
        'ocean': '#0891b2',      // Deep ocean blue
        'sunset': '#ea580c',     // Warm orange
        'earth': '#78716c',      // Earth tone
        'blue-dark': '#0369a1',
        'blue-light': '#38bdf8',
        'teal-dark': '#0d9488',
        'teal-light': '#2dd4bf',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0ea5e9 0%, #0891b2 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0369a1 0%, #0ea5e9 50%, #14b8a6 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #0c4a6e 0%, #0891b2 50%, #06b6d4 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
        'gradient-travel': 'linear-gradient(135deg, #0369a1 0%, #0ea5e9 30%, #14b8a6 60%, #0d9488 100%)',
      },
    },
  },
  plugins: [],
}

