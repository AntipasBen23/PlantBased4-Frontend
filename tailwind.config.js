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
        glow: 'glow 2s ease-in-out infinite', // Custom glow animation
        bounceGlow: 'bounceGlow 3s ease-in-out infinite', // Bounce-glow effect
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 8px #7C997A, 0 0 16px #7C997A', // Glow color updated to #7C997A
          },
          '50%': {
            boxShadow: '0 0 16px #7C997A, 0 0 24px #7C997A', // Glow color updated to #7C997A
          },
        },
        bounceGlow: {
          '0%, 100%': {
            transform: 'translateY(0) scale(1)',
            boxShadow: '0 0 8px #7C997A, 0 0 16px #7C997A', // Glow color updated to #7C997A
          },
          '50%': {
            transform: 'translateY(-5px) scale(1.05)',
            boxShadow: '0 0 16px #7C997A, 0 0 24px #7C997A', // Glow color updated to #7C997A
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
