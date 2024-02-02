'use client'

import styled, { css } from 'styled-components'

export const WrapperMenu = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xxsmall} 0;
    justify-content: space-between;
    position: relative;

    section {
      display: flex;
      gap: 20px;
      align-items: center;
    }
  `}
`

export const LogoWapperMenu = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const IconWapperMenu = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    width: 24px;
    height: 24px;
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    @media screen and (min-width: 768px) {
      margin-left: ${theme.spacings.xsmall};
    }

    a {
      position: relative;
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.medium};
      margin: 0.3rem ${theme.spacings.small} 0;
      text-decoration: none;
      text-align: center;

      &:hover {
        &::after {
          content: '';
          position: absolute;
          display: block;
          height: 0.3rem;
          background-color: ${theme.colors.primary};
          animation: hoverAnimation 0.2s forwards;
        }

        @keyframes hoverAnimation {
          from {
            width: 0;
            left: 50%;
          }
          to {
            width: 100%;
            left: 0;
          }
        }
      }
    }
  `}
`

type MenuFullProps = {
  $isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, $isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: var(--white);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${$isOpen ? 1 : 0};
    pointer-events: ${$isOpen ? 'all' : 'none'};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 24px;
      height: 24px;
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;

      a {
        color: ${theme.colors.black};
        font-weight: ${theme.font.bold};
        font-size: ${theme.spacings.xlarge};
        margin-bottom: ${theme.spacings.small};
        transform: ${$isOpen ? 'translateY(0)' : 'translateY(3rem)'};
        transition: transform 0.3s ease-in-out;
      }
    }

    ${RegisterBox} {
      transform: ${$isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    > span {
      display: block;
      margin: ${theme.spacings.xxlarge} 0;
      font-size: ${theme.font.sizes.xsmall};
    }

    a {
      text-decoration: none;
      color: ${theme.colors.primary};
      border-bottom: 0.2rem solid ${theme.colors.primary};
    }
  `}
`
