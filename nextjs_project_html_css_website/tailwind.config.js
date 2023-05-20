/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: '--font-sans',
        serif: '--font-serif',
      },
      colors: {
        primarycolor: '--primary-color',
        secondarycolor: '--secondary-color',
        black200: '--black-200',
        black300: '--black-300',
        black400: '--black-400',
        black500: '--black-500',
        gray100: '--gray-100',
        colorwhite: '--color-white',
        colorcreamson: '--color-creamson',
      },
    },
  },
  plugins: [],
};
