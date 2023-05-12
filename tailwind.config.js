/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 10px rgba(67,56,202, 0.35)",
          "0 0px 15px rgba(67,56,202, 0.2)",
        ],
      },
    },
  },
  plugins: [],
};
