'use client'

import { useState } from 'react'

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Logo from '../../UI/Logo'
import MediaMatch from '../../UI/MediaMatch'
import Button from '../../UI/Button'

import RegisterBox from './components/RegisterBox'
import MenuNav from './components/MenuNav'

import * as S from './styles'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setisOpen] = useState<boolean>(false)

  const handleClosingAndOpeningMenu = () => {
    setisOpen(!isOpen)
  }

  return (
    <S.WrapperMenu>
      <MediaMatch renderingMode="mobile">
        <S.IconWapperMenu onClick={handleClosingAndOpeningMenu}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWapperMenu>
      </MediaMatch>

      <section>
        <S.LogoWapperMenu>
          <Logo hideOnMobile />
        </S.LogoWapperMenu>

        <MediaMatch renderingMode="desktop">
          <MenuNav />
        </MediaMatch>
      </section>

      <section>
        <S.IconWapperMenu>
          <SearchIcon aria-label="Search" />
        </S.IconWapperMenu>

        <S.IconWapperMenu>
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </S.IconWapperMenu>

        <MediaMatch renderingMode="desktop">
          {!username && <Button size="medium">Sign In</Button>}
        </MediaMatch>
      </section>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon
          aria-label="Close Menu"
          onClick={handleClosingAndOpeningMenu}
        />

        <MenuNav isLoggedIn={!!username} />

        {!username && <RegisterBox />}
      </S.MenuFull>
    </S.WrapperMenu>
  )
}

export default Menu
