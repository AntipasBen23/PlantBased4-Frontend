/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      customClass: {
        input: 'custom-swal-input', // Apply custom class for the input field
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 8px #ffa200, 0 0 16px #e68a00',
          },
          '50%': {
            boxShadow: '0 0 16px #ffa200, 0 0 24px #e68a00',
          },
        },
      },
    },
  },
  plugins: [],
};
