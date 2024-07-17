module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px", // Mobile Landscape
      md: "768px", // Tablet Portrait
      lg: "1024px", // Table Landscape
      xl: "1280px", // Desktop
      "2xl": "1440px", // Large Desktop
      "3xl": "1920px", // Extra Large Desktop
    },

    extend: {
      spacing: {
        4: ".4rem",
        8: ".8rem",
        10: "1rem",
        12: "1.2rem",
        16: "1.6rem",
        32: "3.2rem",
        48: "4.8rem",
        64: "6.4rem",
        80: "8rem",
        96: "9.6rem",
        128: "12.8rem",
        144: "14.4rem",
        160: "16rem",
        182: "18.2rem",
      },
      fontSize: {
        xs: "1.2rem",
        sm: "1.4rem",
        base: "1.6rem",
        md: "1.8rem",
        lg: "2rem",
        xl: "2.4rem",
        "2xl": "3rem",
        "3xl": "3.6rem",
        "4xl": "4.4rem",
        "5xl": "5.2rem",
        "6xl": "6.2rem",
        "7xl": "7.4rem",
        "8xl": "8.6rem",
        "9xl": "9.8rem",
      },
      colors: {
        "rich-black": "#080A10",
        "canary-yellow": "#FFF200",
      },
      fontFamily: {
        sans: ["Montserrat", "Roboto", "sans-serif"],
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};
