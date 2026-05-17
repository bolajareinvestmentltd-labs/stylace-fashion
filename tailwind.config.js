/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1A',   // Luxury Black (Text & Footers)
        secondary: '#4A4A4A', // Dark Gray (Subtext)
        accent: '#D4AF37',    // Gold (Highlights & Accents)
        cream: '#F9F8F6',     // Off-white/Cream (Backgrounds)
        espresso: '#2B1B17',  // Deep dark brown (From the old footer)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}