/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#030315",
        secondary: "#a6adcb",
        tertiary: "#101233",
        accent: "#4fd1c5",
        "accent-soft": "#7c3aed",
        "black-100": "#12172f",
        "black-200": "#0a0d1f",
        "white-100": "#f8fafc",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        glow: "0 25px 90px -30px rgba(79, 209, 197, 0.35)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/1.png')",
        "noise-overlay": "radial-gradient(circle at 20% 20%, rgba(79,209,197,0.25), transparent 55%), radial-gradient(circle at 80% 10%, rgba(124,58,237,0.3), transparent 50%), radial-gradient(circle at 50% 80%, rgba(14,165,233,0.3), transparent 55%)",
      },
    },
  },
  plugins: [],
};
