import { createStitches } from '@stitches/react'
import { normalize } from 'stitches-normalize-css'
import { errorDark } from './colors/dark/error'
import { grayDark } from './colors/dark/gray'
import { successDark } from './colors/dark/success'
import { warningDark } from './colors/dark/warning'
import { error } from './colors/light/error'
import { gray } from './colors/light/gray'
import { success } from './colors/light/success'
import { warning } from './colors/light/warning'

const { styled, css, theme, createTheme, getCssText, globalCss, keyframes, config } = createStitches({
  theme: {
    colors: {
      ...gray,
      ...error,
      ...success,
      ...warning,
    },
    space: {
      0: '0px',
      1: '8px',
      2: '16px',
      3: '24px',
      4: '32px',
      5: '40px',
      6: '48px',
      7: '56px',
      8: '64px',
      9: '72px',
      10: '80px',
    },
  },
})

const darkTheme = createTheme('dark-theme', {
  colors: {
    ...grayDark,
    ...errorDark,
    ...successDark,
    ...warningDark,
  },
})

const globalStyles = globalCss(...normalize)

export { styled, css, theme, createTheme, getCssText, globalCss, keyframes, config, darkTheme, globalStyles }
