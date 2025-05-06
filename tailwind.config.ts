import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#161D31', // Main dark background
        'brand-secondary-dark': '#1E293B', // Slightly lighter dark for cards/elements
        'brand-card': '#27344A', // Card background
        'brand-purple': '#7367F0', // Primary accent purple
        'brand-purple-light': '#8B80F3',
        'brand-purple-dark': '#5E50D9',
        'brand-text-light': '#D0D2D6', // Lighter text
        'brand-text-primary': '#FFFFFF', // Primary text (white)
        'brand-text-secondary': '#A0A7B8', // Muted text
        'brand-success': '#28C76F', // Green for success/icons
        'brand-info': '#00CFE8',
      },
      fontFamily: {
        sans: [
          '"Inter"', // Keeping Inter, common modern sans-serif
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        'purple-glow': '0 0 15px 0 rgba(115, 103, 240, 0.5)',
      }
    },
  },
  plugins: [],
} satisfies Config;
