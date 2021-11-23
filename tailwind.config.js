module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
     backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#319795',
      "secondry": '#3182CE',
      'background': "#EBF4FF",
      'active': '#81E6D9'
     }),
    
    borderColor: theme => ({
      'primary': '#319795',
      'secondary': '#ffed4a',
      'outline': '#CBD5E0',
      'danger': '#e3342f',
     }),
     borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '8': '8px',
    },

    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      '1.26px': '1.26px'
     },
    extend: {
      inset: {
        '30px': '30px'
      },
      spacing: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        '10px': '10px',
        '17px': '17px',
        '18px': '18px',
        '21px': '21px',
        '22px': '22px',
        '25px': '25px',
        '30px': '30px',
        '67px': '67px',
        '81px': '81px',
        '128px': '128px',
        '159px': '159px',
        '280px': '280px'
       },

     fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '21px': '21px',
      '42px': '42px'
     },
       textColor: {
        'primary': '#319795',
        'secondry': '#3182CE',
        'heading': '#2D3748',
        'heading2': '#4A5568',
        'heading3': '#718096',
        'black': '#000000',
        'unactive': '#81E6D9',

      },
      letterSpacing: {
        '0.47px': '0.47px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
