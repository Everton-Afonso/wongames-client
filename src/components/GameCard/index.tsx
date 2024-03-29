import Image from 'next/image'
import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder
} from '@styled-icons/material-outlined'

import Button from '../../UI/Button'

import * as S from './styles'
import Ribbon, { RibbonColors, RibbonSizes } from '../Ribbon'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
  onFav?: () => void
}

const GameCard = ({
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small',
  onFav
}: GameCardProps) => {
  return (
    <S.WrapperGameCard>
      {!!ribbon && (
        <Ribbon color={ribbonColor} sizes={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}

      <S.ImageBox>
        <Image
          src={img}
          alt={title}
          fill={true}
          style={{
            objectFit: 'cover'
          }}
        />
      </S.ImageBox>

      <S.Content>
        <S.Info>
          <h3>{title}</h3>

          <span>{developer}</span>
        </S.Info>

        <S.FavButton role="button" onClick={onFav}>
          {favorite ? (
            <Favorite aria-label="Remove from Wishlist" />
          ) : (
            <FavoriteBorder aria-label="Add to Wishlist" />
          )}
        </S.FavButton>

        <S.BuyBox>
          {!!promotionalPrice && <S.Price $isPromotional>{price}</S.Price>}
          <S.Price>{promotionalPrice || price}</S.Price>

          <Button icon={<AddShoppingCart />} />
        </S.BuyBox>
      </S.Content>
    </S.WrapperGameCard>
  )
}

export default GameCard
