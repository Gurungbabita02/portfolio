/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // Define custom breakpoints
        sm: { max: '767px' },        // Small screens: 767px and below
        md: { min: '768px', max: '991px' }, // Medium screens: 768px - 991px
        lg: { min: '992px', max: '1280px' }, // Large screens: 992px - 1280px
        xl: { min: '1281px' },
        xlg: { min: '1281px', max: '1440px' }, // Large screens: 992px - 1280px
        xxl:{min:'1441px'}
      
      },
      colors:{
        purple:"#735DA5",
        lightpurple:"#d7c9ed",
        purple1:"rgb(94 82 153)",
        purple2:"rgb(153 128 175)",
        blue:"#1a2c54",
        red:"#e00000",
        lightgray:"#202020",
        black:"#0a0a0a",
        gray1:"#242323",
        gray2:"#cdc5c5"
      },
      boxShadow:{
        shadow1:"1px 1px 10px 4px #b5bbe9",
        shadow2:"4px 4px 16px 4px #e5e7ed"
      }
    },
  },
  plugins: [],
};
