/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#00BFFF',
        'gray-darker': '#333333',
        'gray-dark': '#666666',
        'gray-light': '#F5F5F5',
      },
      fontFamily: {
        'accent': ['Inter', 'sans-serif'],
        'main': ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}