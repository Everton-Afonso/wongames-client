import { Meta, StoryObj } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

import item from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...item },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj<HighlightProps> = {
  render: (args) => (
    <div style={{ maxWidth: '65rem' }}>
      <Highlight {...args} />
    </div>
  )
}

export const WithFloatImage: StoryObj<HighlightProps> = {
  render: (args) => (
    <div style={{ maxWidth: '65rem' }}>
      <Highlight {...args} />
    </div>
  )
}

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
