/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Editorial New"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        ink: '#0a0a0a',
        paper: '#f2f0eb',
        'paper-2': '#e8e5de',
        muted: '#9a9590',
        accent: '#c8b89a',
      },
    },
  },
  plugins: [],
}
