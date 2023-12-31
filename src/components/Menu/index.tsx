import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'

import Logo from '../../UI/Logo'

import * as S from './styles'

const Menu = () => {
  return (
    <S.WrapperMenu>
      <S.IconWapperMenu>
        <MenuIcon aria-label="Open Menu" />
      </S.IconWapperMenu>

      <S.LogoWapperMenu>
        <Logo hideOnMobile />
      </S.LogoWapperMenu>

      <section>
        <S.IconWapperMenu>
          <SearchIcon aria-label="Search" />
        </S.IconWapperMenu>

        <S.IconWapperMenu>
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </S.IconWapperMenu>
      </section>
    </S.WrapperMenu>
  )
}

export default Menu
