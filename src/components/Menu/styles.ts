'use client'

import styled, { css } from 'styled-components'

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

export const MenuNav = styled.div`
  a {
    position: relative;
    font-size: var(--medium);
    margin: 0.3rem var(--small-spacings) 0;
    text-decoration: none;
    text-align: center;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: var(--primary);
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
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ isOpen }) => css`
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
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: var(--xsmall-spacings);
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
        color: var(--black);
        font-weight: var(--bold);
        font-size: var(--xlarge);
        margin-bottom: var(--small-spacings);
        transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
        transition: transform 0.3s ease-in-out;
      }
    }

    ${RegisterBox} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`

export const RegisterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 var(--xlarge-spacings) var(--xlarge-spacings);

  > span {
    display: block;
    margin: var(--xxsmall-spacings) 0;
    font-size: var(--xsmall);
  }

  a {
    text-decoration: none;
    color: var(--primary);
    border-bottom: 0.2rem solid var(--primary);
  }
`
