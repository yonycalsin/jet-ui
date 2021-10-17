import { createStitches } from '@stitches/react'
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

export { styled, css, theme, createTheme, getCssText, globalCss, keyframes, config, darkTheme }
