/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      customClass: {
        input: 'custom-swal-input', // Apply custom class for the input field
      },
    },
  },
  plugins: [],
}

