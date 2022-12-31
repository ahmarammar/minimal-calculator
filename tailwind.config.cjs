/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgMain: "hsl(224, 28%, 35%)",
        bgScreen: "hsl(224, 36%, 15%)",
        bgKeypad: "hsl(223, 31%, 20%)",
        bgKey1: "hsl(30, 25%, 89%)",
        bgKey2: "hsl(225, 21%, 49%)",
        bgKey3: "hsl(6, 63%, 50%)",
        bgShadowKey1: "hsl(28, 16%, 65%)",
        bgShadowKey2: "hsl(6, 70%, 34%)",
        bgShadowKey3: "hsl(224, 28%, 35%)",
        textColor: "hsl(221, 14%, 31%)",
      },
    },
  },
  plugins: [],
}
