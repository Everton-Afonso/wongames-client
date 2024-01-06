import * as S from '../../styles'

type MenuNavPros = {
  isLoggedIn: boolean
}

const MenuNav = ({ isLoggedIn }: MenuNavPros) => {
  return (
    <S.MenuNav>
      <a href="#">Home</a>
      <a href="#">Explore</a>

      {isLoggedIn && (
        <>
          <a href="#">My account</a>
          <a href="#">Wishlist</a>
        </>
      )}
    </S.MenuNav>
  )
}

export default MenuNav
