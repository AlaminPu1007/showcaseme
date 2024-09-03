import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #00C0FD, #E70FAA)',
        'custom-radial':
          'radial-gradient(145.05% 100% at 50% 0, #1d2b41 0, #020509 57.38%, #0f1a29 88.16%)',
      },
      colors: {
        // define for text
        'theme-primary': '#666666',
        'theme-secondary': '#42446E',

        /** Dark mode schema will be goes here */

        'theme-dark-bg': '#1f1f38',
        'theme-btn': '#4db5ff',

        // define for text
        'theme-dark-primary': '#A7A7A7',
        'theme-dark-secondary': '#CCCCCC',
        'theme-dark-header-txt': '#D9D9D9',
        'theme-white': '#FFFFFF99',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          md: '1rem',
          lg: '0.5rem',
          xl: '0.5rem',
          '2xl': '0.5rem',
        },
        screens: {
          xl: '1235px',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
};
export default config;
