const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",

    },

  });
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        mullish : ["Mulish","Lato", "saans-serif"]
      },
      colors:{
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#01B256",
        hover: "#f6dfbc",
        yellowtext: "#c86500",
        borderyellow: "#f0c482",
        yellowbtn: "#f9ead3",
        lightyellow: " #fcf4e8",
        customColor: 'rgb(32, 53, 83)'
      },
      backgroundImage: {
        'background-1': "url('./images/Background 1.png')",
        'background-2': "url('./images/Background 2')",
        'background-3': "url('./images/Background 3')",
        'background-card': "url('./images/card1.png')",
        'background-4': "url('./images/Background 4')",
        'background-6': "url('./images/ecardfirst.jpg')",
        'custom-gradient': 'linear-gradient(135deg, hsla(0, 0%, 100%, 1) 45%, hsla(185, 100%, 91%, 1) 87%, hsla(0, 0%, 100%, 1) 98%)',
        'gradient-card-1':' linear-gradient(90deg, rgba(190,201,200,1) 0%, rgba(170,201,200,1) 38%, rgba(120,201,200,1) 70%, rgba(90,201,200,1) 100%)',
        'gradient-card-2':'linear-gradient(90deg, rgba(229,244,232,1) 0%, rgba(190,240,200,1) 38%, rgba(150,240,200,1) 70%, rgba(120,240,200,1) 100%)',
        'gradient-card-3':'linear-gradient(90deg, rgba(190,180,200,1) 0%, rgba(170,180,200,1) 39%, rgba(150,180,200,1) 70%, rgba(120,180,200,1) 100%)',
        'gradient-card-4':'linear-gradient(90deg, rgba(215,254,255,1) 0%, rgba(210,253,255,1) 38%, rgba(205,253,255,1) 66%, rgba(180,255,254,1) 100%)',
        'gradient-img': 'linear-gradient(rgba(19, 38, 68, 0), rgb(19, 38, 68) 75%);',
      
      },
        screens: {
          'max-2xl': {'max': '1535px'},
          // => @media (max-width: 1535px) { ... }
    
          'max-xl': {'max': '1150px'},
          // => @media (max-width: 1279px) { ... }
          'max-1xl': {'max': '1200px'},
          'min-1200': {'min': '1201px'},
          'max-800px': {'max': '800px'},
          'min-800px': {'min': '801px'},
          'max-1100px': {'max': '1100px'},
          'min-1100px': {'min': '1100px'},
    
          'max-lg': {'max': '1023px'},
          // => @media (max-width: 1023px) { ... }
    
          'max-md': {'max': '754px'},
          // => @media (max-width: 767px) { ... }
    
          'max-sm': {'max': '1273px'},
          // => @media (max-width: 639px) { ... }
        },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'up': {
          from: { transform: 'translateY(-10px)' },
          to: { transform: 'translateY(-60px)' },
        },
        'up-2': {
          from: { transform: 'translateY(0px)' },
          to: { transform: 'translateY(-10px)' },
        },
        'bring-2': {
          to:{  opacity:'1',},
        },
         'bring': {
          to:{  opacity:'1',},            
          },
          'rotate-x': {
            '0%': { transform: 'rotateY(0deg)' },
            '100%': { transform: 'rotateY(180deg)' },
          },
          'moveUp': {
            '0%': { transform: 'translateY(0px)' },
            
            '100%': { transform: 'translateY(-1px)' },
          },
          'moveUp-2': {
            '0%': { transform: 'translateY(300px)' },
            
            '100%': { transform: 'translateY(265px)' },  
          },
          'moveUpDown': {
            '0%':  { transform: 'translateY(0px)' },
            '30%': { transform: 'translateY(-80px)' },
            '35%': { transform: 'translateY(-80px)' },
            '65%': { transform: 'translateY(-40px)' },
            '70%': { transform: 'translateY(-40px) ' },
            '95%': { transform: 'translateY(0px)'},
            '100%':{ transform: 'translateY(0px)' },
          },
          'roll-2': {
            '0%':  { transform: 'translateY(0px)' },
            '30%': { transform: 'translateY(-120px)' },
            '35%': { transform: 'translateY(-120px)' },
            '65%': { transform: 'translateY(-60px)' },
            '70%': { transform: 'translateY(-40px) ' },
            '95%': { transform: 'translateY(0px)'},
            '100%':{ transform: 'translateY(0px)' },
          },
          'roll': {
            '0%':  { transform: 'translateY(0px)' },
            '30%': { transform: 'translateY(-242px)' },
            '35%': { transform: 'translateY(-242px)' },
            '65%': { transform: 'translateY(-140px)' },
            '70%': { transform: 'translateY(-140px) ' },
            '95%': { transform: 'translateY(0px)'},
            '100%':{ transform: 'translateY(0px)' },
          },
      },
      animation: {
        'loop-scroll': 'loop-scroll 100s linear infinite',
        'up': 'up 450ms ease-in-out forwards',
        'up-2': 'up-2 300ms ease-in-out forwards',
        'bring': 'bring 500ms ease-in-out forwards',
        'bring-2': 'bring-2 400ms ease-in-out forwards',
        'rotate-x':'rotate-x 2s linear alternate',
        'move-up': 'moveUp 400ms ease-out forwards',
        'move-up-2': 'moveUp-2 450ms ease-out forwards',
        'move-up-down': 'moveUpDown 4s ease-in-out infinite',
        'roll': 'roll 4s linear infinite',
        'roll-2': 'roll-2 4s linear infinite',
        'none': 'none linear infinite',
      },
    },
  


      },
  plugins: [Myclass],
}

