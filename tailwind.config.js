/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
     "./src/**/*.{html,js}",
    
  ],
  theme: {
    extend: {
      colors: {
      'earth': '#975823',
      'water': '#00a2ea'
    }
    },
    
  },
  plugins: [
    
  ],
}
