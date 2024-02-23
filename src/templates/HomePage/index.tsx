'use client'

import Highlight from '../../components/Highlight'

import { Container } from '../../components/Container'
import Heading from '../../UI/Heading'
import BannerSlider from '../../components/BannerSlider'
import GameCardSlider from '../../components/GameCardSlider'

import bannersMock from '../../components/BannerSlider/mock'
import { items } from '../../components/GameCardSlider/mock'
import highlightMock from '../../components/Highlight/mock'

import * as S from './styles'

const HomePage = () => {
  return (
    <section>
      <S.SectionBanner>
        <BannerSlider items={bannersMock} />
      </S.SectionBanner>

      <S.SectionNews>
        <Container>
          <Heading lineLeft lineColor="secondary">
            New Releases
          </Heading>

          <GameCardSlider items={items} color="black" />
        </Container>
      </S.SectionNews>

      <Container>
        <S.SectionMostPopular>
          <Heading lineLeft lineColor="secondary" color="white">
            Most Populars
          </Heading>

          <Highlight {...highlightMock} />
          <GameCardSlider items={items} />
        </S.SectionMostPopular>

        <S.SectionUpcoming>
          <Heading lineLeft lineColor="secondary" color="white">
            Coming Soon
          </Heading>

          <GameCardSlider items={items} />

          <Highlight {...highlightMock} />
          <GameCardSlider items={items} />
        </S.SectionUpcoming>

        <S.SectionFreeGames>
          <Heading lineLeft lineColor="secondary" color="white">
            Free Games
          </Heading>

          <Highlight {...highlightMock} />
          <GameCardSlider items={items} />
        </S.SectionFreeGames>
      </Container>
    </section>
  )
}

export default HomePage
