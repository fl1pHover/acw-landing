/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        // "3xl": "0 0px 30px 0px rgba(0, 0, 0, 0.1)",
        custom: "0 0px 30px rgba(0, 0, 0, 0.1)",

        // '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sec: {
          DEFAULT: "#13285a",
          600: "#1A2D4E",
        },
        light: "#ecf0f3",
        dark: "#0f1b24",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
