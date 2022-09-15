/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/bkg.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 10.08%, #43E7AD 51.94%, #E1D55D 74.57%)'
      },
    },
  },
  plugins: [],
}
