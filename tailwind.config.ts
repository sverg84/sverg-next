import type { Config } from "tailwindcss";

import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
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
        hero: "linear-gradient(250deg, #00000000 0%, #011c02 90%)",
        "hero-lg": "linear-gradient(250deg, #00000000 0%, #062343 70%)",
        "utapau-dark":
          "linear-gradient(to right, #a6ecff, #a6ecff 50%, royalblue 50%)",
        "utapau-light":
          "linear-gradient(to right, #31ccff, #31ccff 50%, royalblue 50%)",
      },
      colors: {
        "night-sky": "#283e51",
        "night-sky-2": "#0a2342",
      },
      cursor: {
        grievous:
          "url(https://dv8qyiytu2cuu.cloudfront.net/grievous_cursor.png), auto",
        "obi-wan":
          "url(https://dv8qyiytu2cuu.cloudfront.net/obi_saber.png), auto",
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
      screens: {
        "2xs": "360px",
        xs: "480px",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
