/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,svelte}'],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0px 0px 3px #22c55e",
          "0px 0px 5px #22c55e",
        ],
      }
    },
  },
  plugins: [],
}