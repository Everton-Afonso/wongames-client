import { Meta, StoryObj } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstr Games',
    img: '/img/red-dead-img.jpg',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  argTypes: {
    onFav: {
      action: 'clicked'
    },
    ribbon: { type: 'string' }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj<GameCardProps> = {
  render: (args) => (
    <div style={{ maxWidth: '18.75rem' }}>
      <GameCard {...args} />
    </div>
  )
}

export const WithRibbon: StoryObj<GameCardProps> = {
  render: (args) => (
    <div style={{ maxWidth: '18.75rem' }}>
      <GameCard {...args} />
    </div>
  )
}

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary'
}
