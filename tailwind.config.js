/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // @media (min-width: 640px) { ... }
      md: "768px",
      // @media (min-width: 768px) { ... }
      lg: "1024px",
      // @media (min-width: 1024px) { ... }
      xl: "1280px",
      // @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // @media (min-width: 1536px) { ... }
      tall: { raw: "(max-height: 768px)" },
      // @media (max-height: 768px) { ... }
    },
    extend: {},
    colors: { gold: "#daa520", greytext: "#A1A1AA", mywhite: "#F7F7DF" },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: false,
    themes: false,
    base: false,
    utils: false,
    logs: false,
    rtl: false,
  },
};
