/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {"extend": {
      "animation": {
        "flip-in-x": "flip-in-x 0.6s ease-out"
      },
      "flip-in-x": {
        "0%": {
          "opacity": "0",
          "transform": "rotateY(90deg)"
        },
        "100%": {
          "opacity": "1",
          "transform": "rotateY(0deg)"
        }
      }
    }
  },
    
  plugins: [],
}

