/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B3A5C",
          deep: "#132A43",
          soft: "#2D5278",
        },
        terracotta: {
          DEFAULT: "#C87856",
          soft: "#E29A7A",
          deep: "#9B5B3F",
        },
        gold: {
          DEFAULT: "#C9A66B",
          soft: "#E0C594",
          deep: "#A4823F",
        },
        ivory: {
          DEFAULT: "#FAF6EF",
          warm: "#F3EADB",
          deep: "#E8DCC4",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', "Georgia", "serif"],
        display: ['"Playfair Display"', '"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        doorLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        doorRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shineSweep: {
          "0%": { transform: "translateX(-120%) skewX(-12deg)" },
          "100%": { transform: "translateX(220%) skewX(-12deg)" },
        },
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
        "fade-up": "fadeUp 0.9s ease-out both",
        "scale-in": "scaleIn 0.8s ease-out both",
        "door-left": "doorLeft 1.8s cubic-bezier(0.77, 0, 0.175, 1) 0.4s forwards",
        "door-right": "doorRight 1.8s cubic-bezier(0.77, 0, 0.175, 1) 0.4s forwards",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "shine-sweep": "shineSweep 1.2s ease-out",
      },
      backgroundImage: {
        "gold-shimmer":
          "linear-gradient(90deg, transparent 0%, rgba(201,166,107,0.35) 50%, transparent 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
