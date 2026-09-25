/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        voka: {
          green: "#1F5D42",
          "green-dark": "#174632",
          "green-light": "#E7F0EA",

          orange: "#E9783D",
          "orange-light": "#FCEDE5",

          cream: "#FAF8F3",
          white: "#FFFFFF",

          ink: "#1C211D",
          muted: "#687069",
          border: "#E5E7E2",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
