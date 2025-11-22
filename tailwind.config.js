/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./sections/**/*.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        emerald: "#0d6d2c",
        greenLight: "#3fa34d",
        navy: "#0f1e2c",
        ocean: "#1b4e75",
        coast: "#d8ecf3",
        textDark: "#4a4a4a",
        white: "#ffffff",
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"], // Same font everywhere
        body: ["Inter", "system-ui", "sans-serif"],
        accent: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-coastal":
          "linear-gradient(135deg, #d8ecf3 0%, #ffffff 50%, #d8ecf3 100%)",
        "gradient-ocean": "linear-gradient(180deg, #1b4e75 0%, #0f1e2c 100%)",
        "gradient-green": "linear-gradient(135deg, #0d6d2c 0%, #3fa34d 100%)",
      },
      boxShadow: {
        soft: "0 4px 30px rgba(0, 0, 0, 0.08)",
        lifted: "0 20px 60px rgba(0, 0, 0, 0.12)",
        "glow-green": "0 0 40px rgba(13, 109, 44, 0.3)",
        "glow-ocean": "0 0 40px rgba(27, 78, 117, 0.3)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      letterSpacing: {
        "ultra-wide": "0.2em",
      },
    },
  },
  plugins: [],
};
