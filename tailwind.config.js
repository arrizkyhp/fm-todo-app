/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/common/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dark-desktop': 'url(\'/images/bg-desktop-dark.jpg\')',
        'light-desktop': 'url(\'/images/bg-desktop-light.jpg\')',
      },
      colors: {
        primary: {
          brightBlue: '#3a7bfd',
        },
        gradient: {
          from: '#57ddff',
          to: '#c058f3',
        },
        lightTheme: {
          very: {
            light: {
              gray: '#fafafa',
              grayishBlue: '#e4e5f1',
            },
            dark: {
              grayishBlue: '#484b6a',
            },
          },
          normal: {
            light: {
              grayishBlue: '#d2d3db',
            },
            dark: {
              grayishBlue: '#9394a5',
            },
          },
        },
        darkTheme: {
          very: {
            dark: {
              blue: '#161722',
              desaturatedBlue: '#25273c',
              grayishBlue: '#4d5066',
              grayishBlue2: '#393a4c',
            },
          },
          normal: {
            light: {
              grayishBlue: '#cacde8',
              grayishBlueHover: '#e4e5f1',
            },
            dark: {
              grayishBlue: '#777a92',
            },
          },
        },
      },
    },
  },
  plugins: [],
};
