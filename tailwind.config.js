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
        'first-bg' : "url('/src/assets/Alpine.png')",
        'linear-bg' : "linear-gradient(180deg, rgba(50, 42, 39, 0) 0%, rgba(45, 40, 40, 0.85) 33.85%, #2D2828 49.48%, #2D2828 68.75%, #2D2828 82.29%, #2D2828 100%)"
      },
      colors : {
        'rgba-gray' : 'rgba(255, 255, 255, 0.2)',
        'rgba-white' : 'rgba(255, 255, 255, 0.4)'

      },
      boxShadow : {
        'rgba-shadow' : "-15px 0px 15px rgba(0, 0, 0, 0.3)"
      }
    
    },
  },
  plugins: [],
}