/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut 6s ease-in-out',
      },

      keyframes: theme => ({
        fadeOut: {
          '0%': { },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      'dracula',
      {
        'blondy': {
          'primary' : '#65c3c8',
          'primary-focus' : '#42b2b8',
          'primary-content' : '#ffffff',
          'secondary' : '#ef9fbc',
          'secondary-focus' : '#e7739e',
          'secondary-content' : '#ffffff',
          'accent' : '#eeaf3a',
          'accent-focus' : '#e09915',
          'accent-content' : '#ffffff',
          'neutral' : '#261230',
          'neutral-focus' : '#200f29',
          'neutral-content' : '#ffffff', 
          'base-100' : '#faf7f5',
          'base-200' : '#efeae6',
          'base-300' : '#e7e2df',
          'base-content' : '#261230',
          'info' : '#1c92f2',
          'success' : '#009485',
          'warning' : '#ff9900',
          'error' : '#ff5724',
          '--rounded-box': '1rem',          
          '--rounded-btn': '1.9rem',        
          '--rounded-badge': '1.9rem',      
          '--animation-btn': '.25s',       
          '--animation-input': '.2s',       
          '--btn-text-case': 'uppercase',   
          '--navbar-padding': '.5rem',      
          '--border-btn': '1px',            
        },
        'grufty': {
          'primary' : '#793ef9',
          'primary-focus' : '#570df8',
          'primary-content' : '#ffffff',
          'secondary' : '#9141ac',
          'secondary-focus' : '#813d9c',
          'secondary-content' : '#ffffff',
          'accent' : '#37cdbe',
          'accent-focus' : '#2ba69a',
          'accent-content' : '#ffffff',
          'neutral' : '#2a2e37',
          'neutral-focus' : '#16181d',
          'neutral-content' : '#ffffff',
          'base-100' : '#3b424e',
          'base-200' : '#2a2e37',
          'base-300' : '#16181d',
          'base-content' : '#ebecf0',
          'info' : '#66c7ff',
          'success' : '#87cf3a',
          'warning' : '#e1d460',
          'error' : '#ff6b6b',
          '--rounded-box': '1rem',          
          '--rounded-btn': '.5rem',        
          '--rounded-badge': '1.9rem',      
          '--animation-btn': '.25s',       
          '--animation-input': '.2s',       
          '--btn-text-case': 'uppercase',   
          '--navbar-padding': '.5rem',      
          '--border-btn': '1px',            
        },
      },
    ],
  },
}
