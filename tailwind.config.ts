import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        diagonalFill: {
          '0%': { backgroundPosition: 'top left' },
          '100%': { backgroundPosition: 'bottom right' },
        }
      },
      animation: {
        diagonalFill: 'diagonalFill 1s ease-in-out forwards'
      }
    },
  },
  plugins: [],
} satisfies Config;
