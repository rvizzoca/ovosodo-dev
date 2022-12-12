import styled from '@emotion/styled'
import { FlexBox } from 'app/components/Layout/FlexBox'
import { useVocabularyData } from 'app/utils/vocabulary'
import { compact, uniqBy } from 'lodash'
import React, { memo } from 'react'

import { PolicyMenuItem, Props as PolicyMenuItemProps } from './PolicyMenuItem'

export interface Props {
  languageCode: string
  logoPartner?: string
  policyMenu?: { [key: string]: PolicyMenuItemProps[] }[]
  vat?: string
}

export const Bottom = memo(function Bottom({
  languageCode,
  logoPartner,
  policyMenu,
  vat,
}: Props) {
  const policyNav = compact(
    compact(policyMenu?.map((lang) => lang[languageCode as 'it-IT']))[0],
  ).filter((t) => t.languageCode === languageCode)

  return (
    <Container dial={4} row space="between" wrap>
      <LeftSide dial={4} row wrap>
        <Company>Sunny Holiday</Company>

        {vat ? (
          <Vat>{`${useVocabularyData('vat', languageCode)}: ${vat}`}</Vat>
        ) : null}
      </LeftSide>

      <CenterSide dial={5} row wrap>
        {policyMenu
          ? uniqBy(policyNav, 'title').map((item, index) => (
              <PolicyMenuItem key={index} {...item} />
            ))
          : null}

        <Credits
          aria-label="QNT Hospitality"
          href="https://www.qnt.it"
          rel="noopenet"
          target="_blank"
        >
          {useVocabularyData('credits', languageCode)}
        </Credits>
      </CenterSide>

      <RightSide dial={6} row wrap>
        {useVocabularyData('partner-link', languageCode)}
        {logoPartner ? (
          <Logo
            src={logoPartner}
            alt="Aparthotel Sheila"
            width="62"
            height="40"
          />
        ) : null}
      </RightSide>
    </Container>
  )
})

const Container = styled(FlexBox)`
  color: ${({ theme }) => theme.colors.variants.neutralLight5};
  font-family: ${({ theme }) => theme.fontFamily.paragraph};
  font-size: 0.9375rem;
  font-weight: 300;
  line-height: 1.875rem;
  margin-top: 6.5625rem;
  position: relative;
  z-index: 2;

  > div {
    width: 33.333%;
  }

  @media (max-width: 1199px) {
    display: block;

    > div {
      width: 100%;
    }
  }
`

const LeftSide = styled(FlexBox)`
  @media (max-width: 1199px) {
    justify-content: center;
  }
`

const Company = styled.div``

const Vat = styled.div`
  &:before {
    content: '-';
    margin: 0 0.375rem;
  }
`

const CenterSide = styled(FlexBox)``

const Credits = styled.a`
  font-weight: 500;
  margin: 0 0.9375rem;
  &:hover {
    text-decoration: underline;
  }
`

const RightSide = styled(FlexBox)`
  @media (max-width: 1199px) {
    display: block;
    margin-top: 1.875rem;
  }
`

const Logo = styled.img`
  margin-left: 1.25rem;

  @media (max-width: 1199px) {
    display: block;
    margin: 0.375rem auto 0;
  }
`
