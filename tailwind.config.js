module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand / semantic design tokens (extracted from /public/images/LOGO nga.png)
        primary: "#026389",
        "primary-foreground": "#FFFFFF",

        secondary: "#03364B",
        "secondary-foreground": "#FFFFFF",

        accent: "#476C81",

        muted: "#E1E6E9",

        background: "#FFFFFF",
        foreground: "#03364B",

        border: "#C4D0D6",
      },
    },
  },
  plugins: [],
};