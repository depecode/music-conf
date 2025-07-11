/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      translate: {
        '-4/5': '-80%',
      },
      height: {
        '100': '25rem', // Adds a new class h-100 for 25rem height
      },
      width: {
        '100' : '25rem',
      },
    },
  },
  plugins: [],
}

