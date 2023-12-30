import { Meta, StoryObj } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      control: false
    }
  }
} as Meta

export const Default: StoryObj<ButtonProps> = {}

Default.args = {
  children: 'Buy now'
}

export const WithIcon: StoryObj<ButtonProps> = {}

WithIcon.args = {
  children: 'Buy now',
  icon: <AddShoppingCart />
}
