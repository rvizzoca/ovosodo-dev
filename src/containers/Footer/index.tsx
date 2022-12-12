import styled from '@emotion/styled'
import { theme } from 'app/theme'
import { rgba } from 'emotion-rgba'
import React, { memo } from 'react'

import { Bottom } from './Bottom'
import { Contacts } from './Contacts'
import { Props as PolicyMenuItemProps } from './PolicyMenuItem'

export interface Props {
  address?: string
  email?: string
  facebookURL?: string
  instagramURL?: string
  languageCode: string
  logo?: string
  logoPartner?: string
  phone?: string
  policyMenu?: { [key: string]: PolicyMenuItemProps[] }[]
  siteName?: string
  vat?: string
}

export const Footer = memo(function Footer({
  address,
  email,
  facebookURL,
  instagramURL,
  languageCode,
  logo,
  logoPartner,
  phone,
  policyMenu,
  siteName,
  vat,
}: Props) {
  return (
    <Container>
      {logo ? <Logo src={logo} alt={siteName} width="126" height="60" /> : null}

      <Contacts
        address={address}
        email={email}
        facebookURL={facebookURL}
        instagramURL={instagramURL}
        phone={phone}
        languageCode={languageCode}
      />

      <Bottom
        languageCode={languageCode}
        logoPartner={logoPartner}
        policyMenu={policyMenu}
        vat={vat}
      />
    </Container>
  )
})

const Container = styled.section`
  background: url('/footer.webp') no-repeat center;
  background-size: cover;
  padding: 3.75rem 5.556vw 2.5rem;
  position: relative;
  text-align: center;
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(
      ${rgba(theme.colors.variants.primaryDark, 1)},
      ${rgba(theme.colors.variants.primaryDark, 0.5)}
    );
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (max-width: 1199px) {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }
`

const Logo = styled.img`
  width: auto;
  position: relative;
  z-index: 2;

  @media (max-width: 1199px) {
    height: 2.5rem;
  }
`
