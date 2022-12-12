import styled from '@emotion/styled'
import { FlexBox } from 'app/components/Layout/FlexBox'
import { useVocabularyData } from 'app/utils/vocabulary'
import React, { memo } from 'react'
import { isMobile } from 'react-device-detect'

import { Social } from './Social'

export interface Props {
  address?: string
  email?: string
  facebookURL?: string
  instagramURL?: string
  languageCode: string
  phone?: string
}

export const Contacts = memo(function Contacts({
  address,
  email,
  facebookURL,
  instagramURL,
  languageCode,
  phone,
}: Props) {
  return (
    <Container dial={2} row space="between">
      {address ? (
        <Item>
          <Label>{useVocabularyData('where-we-are', languageCode)}</Label>
          <Address dangerouslySetInnerHTML={{ __html: address }} />
        </Item>
      ) : null}

      <Item>
        <Label>{useVocabularyData('info-reservations', languageCode)}</Label>
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
            {phone}
          </Anchor>
        ) : null}

        {email ? (
          <>
            <Separator />
            <Anchor
              href={`mailto:${email}`}
              onClick={() => {
                typeof window.gtag !== 'undefined' &&
                  window.gtag('event', 'Click', {
                    event_category: 'Website',
                    event_label: 'Email Address',
                  })
              }}
            >
              {email}
            </Anchor>
          </>
        ) : null}
      </Item>

      {phone ? (
        <Item>
          <Label>{useVocabularyData('follow-us', languageCode)}</Label>

          <Social facebookURL={facebookURL} instagramURL={instagramURL} />
        </Item>
      ) : null}
    </Container>
  )
})

const Container = styled(FlexBox)`
  margin: 3.125rem auto 0;
  z-index: 2;

  @media (max-width: 1199px) {
    display: block;
  }
`

const Item = styled.div`
  width: 33.333%;
  color: ${({ theme }) => theme.colors.variants.neutralLight5};
  font-family: ${({ theme }) => theme.fontFamily.paragraph};
  font-size: 1.0625rem;
  line-height: 2rem;

  @media (max-width: 1199px) {
    width: 100%;
    margin-top: 2.5rem;
  }
`

const Label = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.heading};
  font-size: 1.25rem;
  line-height: 1.6875rem;
  margin-bottom: 1.875rem;

  @media (max-width: 1199px) {
    margin-bottom: 1.25rem;
  }
`

const Address = styled.div`
  font-weight: 300;
`

const Anchor = styled.a`
  color: ${({ theme }) => theme.colors.variants.neutralLight5};
  font-weight: 300;
  &:hover {
    text-decoration: underline;
  }
`

const Separator = styled.div``
