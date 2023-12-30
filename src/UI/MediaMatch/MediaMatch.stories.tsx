import { Meta, StoryObj } from '@storybook/react'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: StoryObj = {
  render: () => <MediaMatch renderingMode="desktop">Only on Desktop</MediaMatch>
}

export const Mobile: StoryObj = {
  render: () => <MediaMatch renderingMode="mobile">Only on Mobile</MediaMatch>
}

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
