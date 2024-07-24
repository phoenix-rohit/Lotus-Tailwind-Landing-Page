module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px", // Mobile Landscape
      msm: "600px",
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
        24: "2.4rem",
        32: "3.2rem",
        48: "4.8rem",
        64: "6.4rem",
        80: "8rem",
        96: "9.6rem",
        128: "12.8rem",
        144: "14.4rem",
        160: "16rem",
        182: "18.2rem",
        "2xl": "30rem",
        "2xxl": "33rem",
        "3xl": "35rem",
        "4xl": "40rem",
        "5xl": "50rem",
        "6xl": "60rem",
        "7xl": "70rem",
        "8xl": "80rem",
        "9xl": "90rem",
        "10xl": "100rem",
        "12xl": "120rem",
        "13xl": "130rem",
        "14xl": "140rem",
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
        "canary-yellow": "#FDEF00",
        "light-black": "rgb(0,0,0,.2)",
      },
      fontFamily: {
        sans: ["Manrope", "Roboto", "sans-serif"],
        montserrat: ["Montserrat"],
      },
      letterSpacing: {
        wide: "0.075em",
        wider: "0.2em",
        widest: "0.3em",
      },
    },
  },
  plugins: [],
};
