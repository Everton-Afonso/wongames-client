import Heading from '../../UI/Heading'
import { Container } from '../../components/Container'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'

// import * as S from './styles'

const HomePage = () => {
  return (
    <section>
      <Container>
        <Menu />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary" color="black">
          New Releases
        </Heading>
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          Most Populars
        </Heading>
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          Free Games
        </Heading>
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          Coming Soon
        </Heading>
      </Container>

      <Container>
        <Footer />
      </Container>
    </section>
  )
}

export default HomePage
