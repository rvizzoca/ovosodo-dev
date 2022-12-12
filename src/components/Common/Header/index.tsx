import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Button } from 'app/components/Common/Button'
import { Close } from 'app/components/Common/Close'
import { Props as MenuItemProps } from 'app/components/Common/Header/MenuItem'
import { Email, Phone } from 'app/components/Icons'
import { FlexBox } from 'app/components/Layout/FlexBox'
import { HeaderContext } from 'app/containers/Header'
import { theme } from 'app/theme'
import { Media, MediaContextProvider, mediaStyle } from 'app/theme/media'
import useLockedBody from 'app/utils/useLockedBody'
import { useVocabularyData } from 'app/utils/vocabulary'
import { rgba } from 'emotion-rgba'
import { Link } from 'gatsby'
import React, { memo, useContext, useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

import { Hamburger } from './Hamburger'
import { Props as LanguageItemProps } from './LanguageItem'
import { Languages } from './Languages'
import { Navigation } from './Navigation'
import { Syncrobox } from './Syncrobox'
import { Toolbars } from './Toolbars'

export interface Props {
  languagesList: LanguageItemProps[]
  menuItems: MenuItemProps[]
  pageID?: string
}

export const Header = memo(function Header({
  languagesList,
  menuItems,
}: Props) {
  const {
    benefits,
    contactsPageURL,
    languageCode,
    languagePrefix,
    logo,
    logoSticky,
    phone,
    siteName,
    variant,
  } = useContext(HeaderContext) as any

  const [_locked, setLocked] = useLockedBody()
  const [modalStatus, setModalStatus] = useState(false)
  const [modalIBEStatus, setModalIBEStatus] = useState(false)
  const [scroll, setScroll] = useState(false)

  const contactsPageSlug = contactsPageURL?.find(
    (t: any) => t?.languages_code?.code === languageCode,
  )?.slug

  const contactsRealPageURL = languagePrefix
    ? `/${languagePrefix}/${contactsPageSlug}`
    : `/${contactsPageSlug}`

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY > window.innerHeight)
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <Container>
      <style type="text/css">{mediaStyle}</style>
      <MediaContextProvider>
        <Head
          className={`${scroll ? 'fixed' : ''}${
            variant === 'compact' ? ' compact' : ''
          }`}
          dial={4}
          row
          variant={variant}
        >
          {logo ? (
            <Link
              className="logo"
              to={languagePrefix ? `/${languagePrefix}` : '/'}
            >
              {logo ? (
                <>
                  <Media lessThan="desktopSmall">
                    <Logo
                      src={logoSticky}
                      alt={siteName}
                      width="105"
                      height="50"
                    />
                  </Media>

                  <Media greaterThanOrEqual="desktopSmall">
                    <Logo
                      src={scroll || variant === 'compact' ? logoSticky : logo}
                      alt={siteName}
                      width="105"
                      height="50"
                    />
                  </Media>
                </>
              ) : null}
            </Link>
          ) : null}

          <Languages
            isSticky={scroll || variant === 'compact'}
            languagesList={languagesList}
            languagePrefix={languagePrefix || null}
          />

          <Media greaterThanOrEqual="desktopSmall">
            <BookingCTA
              label={useVocabularyData('book', languageCode)}
              onClick={() => {
                if (!modalStatus) {
                  setLocked(true)
                  setModalIBEStatus(true)
                } else {
                  setLocked(false)
                  setModalIBEStatus(false)
                }
              }}
            />
          </Media>
        </Head>

        <Sidebar>
          <Hamburger
            modalStatus={modalStatus}
            onClick={() => {
              if (!modalStatus) {
                setLocked(true)
                setModalStatus(true)
              } else {
                setLocked(false)
                setModalStatus(false)
              }
            }}
          />

          <Media greaterThanOrEqual="desktopSmall">
            {siteName ? <SiteName dial={5}>{siteName}</SiteName> : null}

            {contactsPageURL ? (
              <ContactsCTA to={contactsRealPageURL}>
                <Email />
              </ContactsCTA>
            ) : null}

            {phone ? (
              <Anchor
                href={`tel:${phone}`}
                onClick={() => {
                  if (isMobile) {
                    typeof window.gtag !== 'undefined' &&
                      window.gtag('event', 'Click', {
                        event_category: 'Website',
                        event_label: 'Phone Number',
                      })
                  }
                }}
              >
                <Phone />
              </Anchor>
            ) : null}
          </Media>
        </Sidebar>

        <Modal className={modalStatus ? 'open' : undefined}>
          <Navigation menuItems={menuItems} modalStatus={modalStatus} />
        </Modal>

        <Modal className={modalIBEStatus ? 'open' : undefined}>
          <Close
            onClick={() => {
              setLocked(false)
              setModalIBEStatus(false)
            }}
          />
          <Syncrobox
            benefits={benefits}
            languageCode={languageCode}
            languagePrefix={languagePrefix || 'it'}
            modalStatus={modalIBEStatus}
          />
        </Modal>

        <Media lessThan="desktopSmall">
          <Toolbars contactsPageURL={contactsRealPageURL} />
        </Media>
      </MediaContextProvider>
    </Container>
  )
})

const Container = styled.section`
  position: absolute;
  top: 0;
  left: 5rem;
  right: 0;
  z-index: 1000;
`

const HeaderFixedStyle = css`
  width: auto;
  background: ${theme.colors.variants.neutralLight5};
  position: fixed;
  top: 0;
  right: 0;
  left: 5rem;
  z-index: 10;

  @media (max-width: 1199px) {
    left: 3.75rem;
  }
`

const Head = styled(FlexBox)<HeadProps>`
  width: 100%;
  height: 5rem;
  border-bottom: 0.0625rem solid
    ${rgba(theme.colors.variants.neutralLight4, 0.4)};
  padding-left: 1.875rem;
  position: relative;
  &.fixed {
    animation: fadeInTop 0.3s;

    ${HeaderFixedStyle}
  }
  &.compact {
    animation: none !important;

    ${HeaderFixedStyle}
  }

  .logo {
    margin-right: auto;
  }

  @media (max-width: 1199px) {
    ${HeaderFixedStyle}

    animation: none !important;
    height: 3.75rem;
    padding-left: 1.5rem;

    .logo {
      img {
        width: auto;
        height: 2.25rem;
      }
    }
  }

  @keyframes fadeInTop {
    0% {
      top: -5rem;
    }
    100% {
      top: 0;
    }
  }
`

const Logo = styled.img``

const BookingCTA = styled(Button)`
  height: 5rem;
  letter-spacing: normal;
  padding: 0 3rem;
`

const Sidebar = styled.div`
  width: 5rem;
  background: ${({ theme }) => theme.colors.variants.neutralLight3};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  @media (max-width: 1199px) {
    width: 3.75rem;
    background: none;
    bottom: auto;
    z-index: 999;
  }
`

const SiteName = styled(FlexBox)`
  width: 5rem;
  background: ${({ theme }) => theme.colors.variants.neutralLight5};
  color: ${({ theme }) => theme.colors.variants.neutralDark2};
  font-family: ${({ theme }) => theme.fontFamily.paragraph};
  font-size: 0.6875rem;
  font-weight: 300;
  letter-spacing: 0.2062rem;
  line-height: 0.875rem;
  padding: 8.75rem 0;
  text-transform: uppercase;
  white-space: nowrap;
  writing-mode: vertical-rl;
  transform: scaleX(-1) scaleY(-1);
`

const IconStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 4.375rem;

  svg {
    width: 1.5rem;
    height: auto;
    fill: ${theme.colors.variants.neutralDark2};
  }
`

const ContactsCTA = styled(Link)`
  ${IconStyle}

  margin-top: 2.5rem;
`

const Anchor = styled.a`
  ${IconStyle}

  svg {
    stroke: ${theme.colors.variants.neutralDark2};
    stroke-width: 1;
  }
`

const Modal = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 5rem;
  visibility: hidden;
  z-index: -1;
  transition: 0.2s ease-out;
  &.open {
    opacity: 1;
    visibility: visible;
    z-index: 99;
  }
`

interface HeadProps {
  variant: Variant
}

export type Variant = 'default' | 'compact'
