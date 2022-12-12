import styled from '@emotion/styled'
import { Wave } from 'app/components/Icons'
import { HeaderContext } from 'app/containers/Header'
import { motion } from 'framer-motion'
import React, { memo, useContext } from 'react'

import { MenuItem, Props as MenuItemProps } from './MenuItem'

export interface Props {
  menuItems: MenuItemProps[]
  modalStatus?: boolean
}

export const Navigation = memo(function Navigation({
  menuItems,
  modalStatus,
}: Props) {
  if (!menuItems) {
    return null
  }

  const { address, siteName } = useContext(HeaderContext) as any

  const halfMenuItems = Math.ceil(menuItems.length / 2)

  const variants = {
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + 0.2,
        duration: 0.4,
        stiffness: 1000,
        velocity: -100,
      },
    }),
    hidden: { opacity: 0, y: -40 },
  }

  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <Wrapper>
        <Head className={modalStatus ? 'visible' : undefined}>
          <Wave />

          {siteName ? <SiteName>{siteName}</SiteName> : null}

          {address ? (
            <Address dangerouslySetInnerHTML={{ __html: address }} />
          ) : null}
        </Head>

        <Nav>
          <NavList>
            {menuItems.slice(0, halfMenuItems).map((item, index) => (
              <NavLi
                key={index}
                custom={index}
                animate={modalStatus ? 'visible' : 'hidden'}
                variants={variants}
              >
                <MenuItem {...item} />
              </NavLi>
            ))}
          </NavList>

          <NavList>
            {menuItems.slice(halfMenuItems).map((item, index) => (
              <NavLi
                key={index}
                custom={index}
                animate={modalStatus ? 'visible' : 'hidden'}
                variants={variants}
              >
                <MenuItem {...item} />
              </NavLi>
            ))}
          </NavList>
        </Nav>
      </Wrapper>
    </Container>
  )
})

const Container = styled.div`
  width: calc(100% - 5rem);
  height: 100%;
  background: ${({ theme }) => theme.colors.variants.neutralLight1};
  overflow-y: auto;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 5rem;
  -webkit-overflow-scrolling: auto;

  @media (max-width: 1199px) {
    width: 100%;
    left: 0;
  }
`

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.variants.neutralLight5};
  padding: 6.25rem 0;
  text-align: center;
`

const Head = styled.div`
  opacity: 0;
  transform: translateY(-2.5rem);
  transition: 0.6s ease-in-out;
  &.visible {
    opacity: 1;
    transform: none;
  }

  > svg {
    width: 3.75rem;
    height: auto;
    fill: ${({ theme }) => theme.colors.variants.primaryDark};
  }

  @media (max-width: 1199px) {
    display: none;
  }
`

const SiteName = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.heading};
  font-size: 2.5rem;
  line-height: 3.375rem;
`

const Address = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.paragraph};
  font-size: 1.0625rem;
  line-height: 2rem;
  margin-top: 0.875rem;
`

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 9.3vh;

  @media (max-width: 1199px) {
    display: block;
    margin-top: 0;
    padding: 0 6.417vw;
  }
`

const NavList = styled.ul`
  &:first-of-type {
    margin-right: 6.417vw;
  }
  &:last-of-type {
    margin-left: 6.417vw;
  }

  @media (max-width: 1199px) {
    &:first-of-type {
      margin-right: 0;
    }
    &:last-of-type {
      margin-left: 0;
    }
  }
`

const NavLi = styled(motion.li)`
  min-width: 18.75rem;
  margin-top: 2.5rem;
  text-align: left;

  @media (max-width: 1199px) {
    margin-top: 1.875rem;
    opacity: 1 !important;
    transform: none !important;
  }
`
