'use client'

import styled from 'styled-components'

export const WrapperMenu = styled.menu`
  display: flex;
  align-items: center;
  padding: var(--xxsmall-spacings) 0;
  justify-content: space-between;
  position: relative;

  section {
    display: flex;
    gap: 20px;
  }
`

export const LogoWapperMenu = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const IconWapperMenu = styled.div`
  color: var(--white);
  cursor: pointer;
  width: 24px;
  height: 24px;
`
