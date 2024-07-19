/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    colors: {

      'eggshell': { DEFAULT: '#EEEBD8', 100: '#3f3a1c', 200: '#7e7537', 300: '#b7aa5a', 400: '#d2cb99', 500: '#eeebd8', 600: '#f1efe0', 700: '#f5f3e8', 800: '#f8f7ef', 900: '#fcfbf7' }, 

      'ash_gray': { DEFAULT: '#CBCFBE', 100: '#2b2e22', 200: '#565b44', 300: '#818965', 400: '#a7ae91', 500: '#cbcfbe', 600: '#d6d9cb', 700: '#e0e2d8', 800: '#eaece5', 900: '#f5f5f2' }, 
      
      'reseda_green': { DEFAULT: '#6B8673', 100: '#151b17', 200: '#2b352e', 300: '#405045', 400: '#556a5c', 500: '#6b8673', 600: '#879f8e', 700: '#a5b7aa', 800: '#c3cfc7', 900: '#e1e7e3' }, 
      
      'brunswick_green': { DEFAULT: '#1B4432', 100: '#060e0a', 200: '#0b1c14', 300: '#112a1f', 400: '#163729', 500: '#1b4432', 600: '#33805f', 700: '#4eb88a', 800: '#89d0b1', 900: '#c4e7d8' }, 
      
      'zomp': { DEFAULT: '#56A07D', 100: '#112019', 200: '#224032', 300: '#335f4b', 400: '#457f64', 500: '#56a07d', 600: '#75b597', 700: '#98c7b1', 800: '#badacb', 900: '#ddece5' }, 
      
      'persian_orange': { DEFAULT: '#E58241', 100: '#341907', 200: '#68320e', 300: '#9c4b15', 400: '#d0641c', 500: '#e58241', 600: '#ea9c68', 700: '#f0b58e', 800: '#f5ceb4', 900: '#fae6d9' }, 
      
      'pale_dogwood': { DEFAULT: '#EACBC9', 100: '#3e1b18', 200: '#7d3631', 300: '#b9524b', 400: '#d18e89', 500: '#eacbc9', 600: '#eed5d3', 700: '#f2dfde', 800: '#f6eae9', 900: '#fbf4f4' }, 
      
      'icterine': { DEFAULT: '#FFF64F', 100: '#423f00', 200: '#857e00', 300: '#c7bd00', 400: '#fff30a', 500: '#fff64f', 600: '#fff870', 700: '#fffa94', 800: '#fffbb8', 900: '#fffddb' }
    },

    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}

