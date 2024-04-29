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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'custom-gradient': 'linear-gradient(#E70FAA, #00C0FD)',
      },
      colors: {
        // define for text
        'theme-primary': '#666666',
        'theme-secondary': '#42446E',

        /** Dark mode schema will be goes here */

        'theme-dark-bg': '#191919',

        // define for text
        'theme-dark-primary': '#A7A7A7',
        'theme-dark-secondary': '#CCCCCC',
        'theme-dark-header-txt': '#D9D9D9',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '2rem',
          sm: '2rem',
          md: '1rem',
          lg: '0.5rem',
          xl: '0rem',
          '2xl': '0rem',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
};
export default config;
