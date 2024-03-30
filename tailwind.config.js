
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'desktop': {'max': '1275px'}, // max-width: 1279px
        'laptop': {'max': '1045px'}, // max-width: 1279px
        'small-laptop': {'max': '970px'}, // max-width: 1279px
        'big-tablet': {'max': '845px'}, // max-width: 845px
        'tablet': {'max': '800px'}, // max-width: 1044px
        'mobile': {'max': '690px'}, // max-width: 639px
      },
    },
  },
  plugins: [],
}