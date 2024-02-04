import { Meta, StoryObj } from '@storybook/react'
import BannerSlider, { BannerSliderProps } from '.'

import items from './mock'

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj<BannerSliderProps> = {
  render: (args) => (
    <div style={{ maxWidth: '1280px', maxHeight: '584px', margin: '0 auto' }}>
      <BannerSlider {...args} />
    </div>
  )
}
