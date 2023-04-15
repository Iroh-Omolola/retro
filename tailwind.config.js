/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      xxs: "320px",
      xs: "480px",
      sm: "640px",
      md: "786px",
      mmd: "800px",
      lg: "1024px",
      wlg: "1023px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1700px",
    },

    extend: {
      backgroundImage: {
        hero: "url('/src/assets/images/hero.svg')",
      },
    },
    colors: {
      text_one: "#101828",
      paragraph_color: "#475467",
      text_two: "#344054",
      shadow: "rgba(16, 24, 40, 0.1)",
      shadow_btn: "rgba(16, 24, 40, 0.05)",
    },
    fontFamily: {
      lato: ["/src/components/assets/font/Identification-05C.otf"],
    },
  },

  plugins: [require("flowbite/plugin")],
};
