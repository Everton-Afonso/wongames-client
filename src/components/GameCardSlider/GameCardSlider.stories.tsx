import { Meta, StoryObj } from '@storybook/react'

import { GameCardProps } from '../GameCard'
import GameCardSlider from '.'

import { items } from './mock'

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj<{ items: GameCardProps[] }> = {
  render: ({ items }) => (
    <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
      <GameCardSlider items={items} />
    </div>
  )
}
