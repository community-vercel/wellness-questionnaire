/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6B9B8E',
          DEFAULT: '#3D6D5C',
          dark: '#1E4A3A',
          darker: '#0F2E21',
        },
        secondary: {
          light: '#F5EFE7',
          DEFAULT: '#EFE6DC',
          dark: '#E5D9CD',
        },
        accent: {
          DEFAULT: '#D4A574',
          dark: '#C08F5A',
        },
        beige: {
          light: '#F5EFE7',
          DEFAULT: '#E8DDD0',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

