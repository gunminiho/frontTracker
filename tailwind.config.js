/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'border-light': {
          '0%': {
            'border-image-source': 'linear-gradient(90deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%)'
          },
          '25%': {
            'border-image-source': 'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)'
          },
          '50%': {
            'border-image-source': 'linear-gradient(270deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)'
          },
          '75%': {
            'border-image-source': 'linear-gradient(360deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)'
          },
          '100%': {
            'border-image-source': 'linear-gradient(450deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)'
          },
        },
      },
      animation: {
        'border-light': 'border-light 5s linear infinite',
      },
    },
  },
  plugins: [],
}

