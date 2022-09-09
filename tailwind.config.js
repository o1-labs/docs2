/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.tsx"],
  theme: {
    sm: "576px",
    // => @media (min-width: 576px) { ... }

    md: "960px",
    // => @media (min-width: 960px) { ... }

    lg: "1440px",
    // => @media (min-width: 1440px) { ... }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
