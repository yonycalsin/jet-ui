import * as React from 'react'

import { styled } from '../../theme/config'

const StyledButton = styled('button', {
  color: 'red',
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
