'use client'

import Highlight from '../../components/Highlight'

import { Container } from '../../components/Container'
import Heading from '../../UI/Heading'
import BannerSlider from '../../components/BannerSlider'
import GameCardSlider from '../../components/GameCardSlider'

import bannersMock from '../../components/BannerSlider/mock'
import { items } from '../../components/GameCardSlider/mock'
import highlightMock from '../../components/Highlight/mock'
// import * as S from './styles'

const HomePage = () => {
  return (
    <section>
      <Container>
        <BannerSlider items={bannersMock} />

        <Heading lineLeft lineColor="secondary" color="black">
          New Releases
        </Heading>

        <GameCardSlider items={items} color="black" />

        <Heading lineLeft lineColor="secondary" color="white">
          Most Populars
        </Heading>

        <Highlight {...highlightMock} />
        <GameCardSlider items={items} />

        <Heading lineLeft lineColor="secondary" color="white">
          Coming Soon
        </Heading>

        <GameCardSlider items={items} />

        <Highlight {...highlightMock} />
        <GameCardSlider items={items} />

        <Heading lineLeft lineColor="secondary" color="white">
          Free Games
        </Heading>

        <Highlight {...highlightMock} />
        <GameCardSlider items={items} />
      </Container>
    </section>
  )
}

export default HomePage
