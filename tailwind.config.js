/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Cores baseadas no print da Creed Esporte
        'creed-black': '#000000',
        'creed-dark': '#0a0a0a', // Um cinza quase preto para cards
        'creed-green': '#00FF7F', // Verde neon vibrante
      },
    },
  },
  plugins: [],
}