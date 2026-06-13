/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["'Kanit'", "sans-serif"],
      },
      colors: {
        bg: "#0C0C0C",
        surface: "#111111",
        border: "#1E1E1E",
        "border-light": "#2A2A2A",
        muted: "#555555",
        subtle: "#888888",
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-pause": "marquee 35s linear infinite paused",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
}
