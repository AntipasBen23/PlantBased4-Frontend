/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        times: ['Times New Roman', 'serif'], // Times New Roman added earlier
        arial: ['Arial', 'sans-serif'], // Added Arial font family
      },
      fontSize: {
        custom24: '24px', // Times New Roman custom size (bold 24px)
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
      customClass: {
        input: 'custom-swal-input', // Apply custom class for the input field
      },
    },
  },
  plugins: [],
};
