import styled from '@emotion/styled'
import { Facebook, Instagram } from 'app/components/Icons'
import { FlexBox } from 'app/components/Layout/FlexBox'
import React, { memo } from 'react'

export interface Props {
  facebookURL?: string
  instagramURL?: string
}

export const Social = memo(function Social({
  facebookURL,
  instagramURL,
}: Props) {
  if (!facebookURL && !instagramURL) {
    return null
  }

  return (
    <Container dial={5} row>
      {facebookURL ? (
        <Anchor
          aria-label="Facebook"
          href={facebookURL}
          rel="noreferrer"
          target="_blank"
        >
          <Facebook />
        </Anchor>
      ) : null}

      {instagramURL ? (
        <Anchor
          aria-label="Instagram"
          href={instagramURL}
          rel="noreferrer"
          target="_blank"
        >
          <Instagram />
        </Anchor>
      ) : null}
    </Container>
  )
})

const Container = styled(FlexBox)``

const Anchor = styled.a`
  margin: 0 0.9375rem;
  &:hover {
    svg {
      fill: ${({ theme }) => theme.colors.variants.neutralDark2};
    }
  }

  svg {
    width: auto;
    height: 1.25rem;
    fill: ${({ theme }) => theme.colors.variants.neutralLight5};
    transition: 0.2s ease-in-out;
  }
`
