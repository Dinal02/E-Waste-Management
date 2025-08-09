/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ Scan all JS/TS/React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
