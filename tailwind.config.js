import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Your JS, TS, JSX, and TSX files
  ],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [daisyui],
};