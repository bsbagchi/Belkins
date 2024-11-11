import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 10s linear infinite',  // Duration of 10s, infinite loop
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },  // Start from the right
          '100%': { transform: 'translateX(-100%)' },  // End at the left
        },
      },
    },
  },
  plugins: [],
};
export default config;
