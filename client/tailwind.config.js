/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "flicker": "flicker 1.5s infinite",
        "float": "float 3s infinite ease-in-out",
        "glitch": "glitch 1s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "scale(0.8)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        flicker: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.6 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glitch: {
          "0%": { textShadow: "2px 2px #ff0080, -2px -2px #00ffff" },
          "50%": { textShadow: "-2px -2px #ff0080, 2px 2px #00ffff" },
          "100%": { textShadow: "2px 2px #ff0080, -2px -2px #00ffff" },
        },
      },
    },
  },
  plugins: [],
}
