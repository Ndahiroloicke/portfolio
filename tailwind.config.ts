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
        foreground: "var(--foreground)",
      },
      // screens: {
      //   'custom': { 'min' : '750px' , 'max' : '968px'},
      //   'large': { 'min' : '1000px'}
      // }
    },
  },
  plugins: [],
};
export default config;
