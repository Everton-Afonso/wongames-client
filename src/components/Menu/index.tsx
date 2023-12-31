import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'

import Logo from '../../UI/Logo'

import * as S from './styles'

const Menu = () => {
  return (
    <S.WrapperMenu>
      <S.IconWapperMenu>
        <MenuIcon />
      </S.IconWapperMenu>

      <S.LogoWapperMenu>
        <Logo hideOnMobile />
      </S.LogoWapperMenu>

      <section>
        <S.IconWapperMenu>
          <ShoppingCartIcon />
        </S.IconWapperMenu>

        <S.IconWapperMenu>
          <SearchIcon />
        </S.IconWapperMenu>
      </section>
    </S.WrapperMenu>
  )
}

export default Menu
