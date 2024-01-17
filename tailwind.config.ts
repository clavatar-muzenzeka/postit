import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "bg-yellow-light": "#FCFCF8",
        "bg-yellow": "#FBF7E3",
        "coorporate-blue": "#192a6b",
        "coorporate-blue-light": "#5678e2",
        "coorporate-orange": "#af2d00",
        "coorporate-cyan": "#00FFF7",
      },
      fontSize: {
        "2xs": ".65rem",
      },
    },
  },
  plugins: [],
  mode: "jit",
};
export default config
