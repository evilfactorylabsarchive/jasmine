const { primitives } = require('./dark')
const { createTheme } = require('baseui')

// NOTE: This is default theme.

// TODO: For now let's extend it from `darkThemePrimitives` from uber

const Jasmine = createTheme(
  {
    ...primitives
  },
  {
    typography: {
      font1000: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '48px',
        fontWeight: 'normal',
        lineHeight: '77px'
      },
      font900: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '36px',
        fontWeight: 'bold',
        lineHeight: '59px'
      },
      font800: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '24px',
        fontWeight: 'bold',
        lineHeight: '42px'
      },
      font700: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '20px',
        fontWeight: 'bold',
        lineHeight: '36px'
      },
      font600: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '16px',
        fontWeight: 'bold',
        lineHeight: '30px'
      },
      font500: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '14px',
        fontWeight: 'bold',
        lineHeight: '27px'
      },
      font400: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '24px'
      }
    }
  }
)

module.exports = Jasmine
