import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
const config: Config = {
  prefix: "i-",
  content: [
    './index.html',
    './src/*.{jsx,tsx,html}',
    './src/**/*.{jsx,tsx,html}',
    './src/**/**/*.{jsx,tsx,html}',
  ],
  darkMode: ['selector','[class=dark]'],
  theme: {
    extend: {
      backgroundImage: {
        'drk': "url('https://raw.githubusercontent.com/nduartech/nduartech.github.io/master/packages/interests/public/interests.svg')",
        'lght': "url('https://raw.githubusercontent.com/nduartech/nduartech.github.io/master/packages/interests/public/interests-light.svg')",
      },
      colors: {
        'regal-blue': {
          '50': '#eef8ff',
          '100': '#ddf2ff',
          '200': '#b3e5ff',
          '300': '#6fd2ff',
          '400': '#23bcff',
          '500': '#00a3ff',
          '600': '#0082dd',
          '700': '#0066b3',
          '800': '#005793',
          '900': '#013f6a',
          '950': '#012d50',
        },
      },

    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        },
      })
    })
  ],
};

export default config;
