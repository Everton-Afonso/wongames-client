import Image from 'next/image'
import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined'

import Button from '../../UI/Button'

import * as S from './styles'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
}

const GameCard = ({
  title,
  developer,
  img,
  price,
  promotionalPrice
}: GameCardProps) => {
  return (
    <S.WrapperGameCard>
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

        <S.FavButton role="button">
          <FavoriteBorder aria-label="Add to Wishlist" />
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
