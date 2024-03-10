import type { Config } from "tailwindcss";

import flowbite from "flowbite/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in-right": "fade-in-right 1s",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: "linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%)",
      },
      colors: {
        "night-sky": "#283e51",
        "night-sky-2": "#0a2342",
      },
      keyframes: {
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(50%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0%)",
          },
        },
      },
    },
  },
  plugins: [flowbite],
};
export default config;
