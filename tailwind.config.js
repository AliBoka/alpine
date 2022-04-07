module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily : {
      'paytoneone' : ['Paytone One']
    },
    extend: {
      backgroundImage : {
        'bg-logo' : "url('/src/assets/logo-img.png')",
        'first-bg' : "url('/src/assets/Alpine.png')"
      },
    
    },
  },
  plugins: [],
}