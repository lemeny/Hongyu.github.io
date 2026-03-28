/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,md}',
    './src/**/*.{html,js,md}',
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          offwhite: '#f8f8f6',
          slate: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            400: '#94a3b8',
            600: '#475569',
            800: '#1e293b',
          },
          zinc: {
            50: '#fafafa',
            100: '#f4f4f5',
            300: '#d4d4d8',
            500: '#71717a',
            700: '#3f3f46',
            900: '#18181b',
          },
        },
      },
    },
  },
  plugins: [],
};
