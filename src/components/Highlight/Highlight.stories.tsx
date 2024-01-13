import { Meta, StoryObj } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead está de de volta!',
    subtitle: 'Venha conhecer as novas aventuras de John Marston',
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj<HighlightProps> = {
  render: (args) => <Highlight {...args} />
}
