/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Agbalumo:["Agbalumo","serif"]
      },
      keyframes: {
        lighting: {
          '0%, 100%': { borderColor: '#ffffff' }, // Starting and ending color
          '50%': { borderColor: '#cd0131' }, // Midway color
        },
      },
      animation: {
        'lighting-effect': 'lighting 2s linear infinite', // Animation duration and loop
      },
    },
    
  },
  variants: {
    extend: {
      placeholderColor: ['hover'], 
    },
  },
  plugins: [],
}

