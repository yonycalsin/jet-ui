import * as React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button, ButtonProps } from './button'

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Click Me !',
}

export const Error = Template.bind({})

Error.args = {
  children: 'Click Me !',
  colorSchema: 'error',
}

export default {
  title: 'Core/Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
} as Meta
