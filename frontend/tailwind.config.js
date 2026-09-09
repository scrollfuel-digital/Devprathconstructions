/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#C9A063",
        "gold": "#C9A063",
        "gold-light": "#F0D060",
        "gold-dark": "#8C6A2D",
        "cream": "#F8F5EF",
        "cream-light": "#FCF9F4",
        "dark-surface": "#172235",
        "rich-black": "#F8F5EF", // Note: Usually rich-black is a dark hex, but leaving as you defined it
        "surface": "#FFFFFF",
        "on-surface": "#172235",
        "on-surface-variant": "#666666",
        "outline-variant": "rgba(201, 160, 99, 0.25)",
      },
      borderRadius: {
        "card": "0.75rem",
        "button": "0.5rem",
        "full": "9999px"
      },
      spacing: {
        "container-max": "1400px",
        "margin-desktop": "5rem",
        "section-gap": "6rem",
        "margin-mobile": "1.5rem",
        "gutter": "2rem"
      },
      fontFamily: {
        "sans": ["Poppins", "sans-serif"],
        "heading": ["Poppins", "sans-serif"],
        "body": ["Poppins", "sans-serif"],
        "headline-display": ["Poppins", "sans-serif"],
        "headline-lg": ["Poppins", "sans-serif"],
        "headline-md": ["Poppins", "sans-serif"],
        "label-caps": ["Poppins", "sans-serif"],
        "body-lg": ["Poppins", "sans-serif"],
        "body-md": ["Poppins", "sans-serif"]
      },
      // MERGED KEYFRAMES AND ANIMATIONS HERE
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
      }
    },
  },
  plugins: [],
}