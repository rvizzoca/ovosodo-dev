import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Calendar, Email, Phone } from 'app/components/Icons'
import { FlexBox } from 'app/components/Layout/FlexBox'
import { HeaderContext } from 'app/containers/Header'
import { theme } from 'app/theme'
import { useVocabularyData } from 'app/utils/vocabulary'
import { Link } from 'gatsby'
import React, { memo, useContext, useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

export interface Props {
  contactsPageURL?: string
}

export const Toolbars = memo(function Toolbars({ contactsPageURL }: Props) {
  const { languageCode, languagePrefix, phone } = useContext(
    HeaderContext,
  ) as any

  const [scrollDir, setScrollDir] = useState('up')

  useEffect(() => {
    const threshold = 0
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      setScrollDir(scrollY > lastScrollY ? 'down' : 'up')
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollDir])

  return (
    <Container
      className={scrollDir == 'down' ? 'hidden' : ''}
      dial={5}
      row
      stretch
    >
      {contactsPageURL ? (
        <Item to={contactsPageURL}>
          <Email />
          <Label>{useVocabularyData('request', languageCode)}</Label>
        </Item>
      ) : null}

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
        <Label>{useVocabularyData('call', languageCode)}</Label>
      </Anchor>

      <Anchor
        href={`https://booking.hotelkennedy.org/book/simple/step1?hotel=44656&lang=${languagePrefix}`}
        rel="noopener"
        target="_blank"
      >
        <Calendar />
        <Label>{useVocabularyData('book', languageCode)}</Label>
      </Anchor>
    </Container>
  )
})

const Container = styled(FlexBox)`
  width: 100%;
  background: ${({ theme }) => theme.colors.variants.neutralDark2};
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 50;
  transition: 0.3s ease-out;
  &.hidden {
    transform: translateY(6rem);
  }
`

const Style = css`
  background: ${theme.colors.variants.primaryDark};
  color: ${theme.colors.variants.neutralLight5};
  flex: 1;
  font-family: ${theme.fontFamily.paragraph};
  font-size: 0.75rem;
  letter-spacing: 0.0375rem;
  line-height: 1.125rem;
  padding: 0.625rem 1.25rem 0.5rem;
  position: relative;
  text-align: center;
  text-transform: lowercase;
  &:first-of-type {
    svg {
      fill: ${theme.colors.variants.neutralLight5};
      stroke: none;
    }
  }
  &:nth-of-type(3) {
    &:after {
      display: none;
    }
    svg {
      stroke-width: 1.5;
    }
  }
  &:after {
    content: '';
    width: 0.0625rem;
    height: 100%;
    background: ${theme.colors.variants.neutralLight5};
    opacity: 0.2;
    position: absolute;
    top: 0;
    right: 0;
  }

  svg {
    width: auto;
    height: 1.25rem;
    fill: none;
    margin-bottom: 0.125rem;
    stroke: ${theme.colors.variants.neutralLight5};
  }
`

const Item = styled(Link)`
  ${Style}
`

const Anchor = styled.a`
  ${Style}
`

const Label = styled.span`
  display: block;
  opacity: 0.4;
`
