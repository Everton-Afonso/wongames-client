import { Meta, StoryObj } from '@storybook/react'
import { Settings } from 'react-slick'

import styled from 'styled-components'

import Slider from '.'

export default {
  title: 'Slider',
  component: Slider
} as Meta

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true
}

const Slide = styled.div`
  background: gray;
  width: 300px;
  padding: 100px 0;
  border: 1px solid red;
  color: white;
  text-align: center;
`

export const Horizontal: StoryObj = {
  render: () => (
    <Slider settings={settings}>
      <Slide>1</Slide>
      <Slide>2</Slide>
      <Slide>3</Slide>
      <Slide>4</Slide>
      <Slide>5</Slide>
      <Slide>6</Slide>
    </Slider>
  )
}

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true
}

export const Vertical: StoryObj = {
  render: () => (
    <Slider settings={verticalSettings}>
      <Slide>1</Slide>
      <Slide>2</Slide>
      <Slide>3</Slide>
      <Slide>4</Slide>
      <Slide>5</Slide>
      <Slide>6</Slide>
    </Slider>
  )
}
