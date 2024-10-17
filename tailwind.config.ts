import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "#5A98BF",
        text: "#011126",
        gray: "gray-300"
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
};
export default config;
