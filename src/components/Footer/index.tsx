import Link from 'next/link'

import Heading from '../../UI/Heading'
import Logo from '../../UI/Logo'

import * as S from './styles'

const Footer = () => {
  return (
    <S.WrapperFooter>
      <section>
        <Logo color="black" />

        <S.WrapperFooterContainer>
          <div>
            <Heading
              color="black"
              size="medium"
              lineBottom
              lineColor="secondary"
            >
              Contato
            </Heading>
            <a href="mailto:sac@wongames.com">sac@wongames.com</a>
            <a href="tel:+55 21 33283719">+55 21 33283719</a>
          </div>

          <div>
            <Heading
              color="black"
              lineColor="secondary"
              lineBottom
              size="small"
            >
              Nos Acompanhe
            </Heading>

            <nav aria-labelledby="social media">
              <a
                href="https://www.instagram.com/won-games"
                target="_blank"
                rel="noopenner, noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.twitter.com/won-games"
                target="_blank"
                rel="noopenner, noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://www.youtube.com/won-games"
                target="_blank"
                rel="noopenner, noreferrer"
              >
                Youtube
              </a>
              <a
                href="https://www.facebook.com/won-games"
                target="_blank"
                rel="noopenner, noreferrer"
              >
                Facebook
              </a>
            </nav>
          </div>

          <div>
            <Heading
              color="black"
              lineColor="secondary"
              lineBottom
              size="small"
            >
              Links
            </Heading>

            <nav aria-labelledby="footer resources">
              <Link href="/">Home</Link>
              <Link href="/games">Store</Link>
              <Link href="/search">Buscar</Link>
            </nav>
          </div>

          <div aria-labelledby="footer-contact">
            <Heading
              color="black"
              lineColor="secondary"
              lineBottom
              size="small"
            >
              Localização
            </Heading>
            <span>Rua 7 de Maio</span>
            <span>527 - 89020330</span>
            <span>Rio de Janeiro, Brasil</span>
          </div>
        </S.WrapperFooterContainer>
      </section>

      <S.Copyright>Won Games 2020 © Todos os Direitos Reservados</S.Copyright>
    </S.WrapperFooter>
  )
}

export default Footer
