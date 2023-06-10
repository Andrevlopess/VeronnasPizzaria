/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        sspin: 'sspin 15s linear infinite',
      },
      keyframes: {
        sspin: {
          'from': { transform: 'rotate(-0deg)' },
          'to': { transform: 'rotate(360deg)' },
        }
      },
    },
  },
  plugins: [],
};
