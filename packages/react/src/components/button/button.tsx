import * as React from 'react'

import { styled } from '../../theme/config'

const StyledButton = styled('button', {
  // Reset
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom reset?
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  variants: {
    colorSchema: {
      error: {
        backgroundColor: '$error6',
        color: 'white',
      },
    },
  },
})

export type StyledButtonProps = React.ComponentProps<typeof StyledButton>

export interface ButtonProps extends Omit<StyledButtonProps, 'css'> {
  children: React.ReactNode
}

export function Button(props: ButtonProps) {
  const { children, ...restProps } = props

  return <StyledButton {...restProps}>{children}</StyledButton>
}
