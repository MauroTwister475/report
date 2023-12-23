import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        shape: {
          100: '#F5F6FA',
        },
        input: {
          200: '#E8E8E9',
          300: '#3D3F47',
        },
        main: {
          500: 'rgb(130,87,229)',
          100: '#ffff'
        } 
      },
      textColor: {
        main: {
          500: 'rgb(130,87,229)',
        },
        input: {
          200: '#E8E8E9',
        }
      }
    },
  },
  // plugins: [require("daisyui")],
}
export default config
