import styled from '@emotion/styled'
import React, { memo } from 'react'

import { Card, Props as CardProps } from './Card'

export interface Props {
  cards: CardProps[]
  icon?: string
  label?: string
  title?: string
}

export const CardsList = memo(function CardsList({
  cards,
  icon,
  label,
  title,
}: Props) {
  if (!cards) {
    return null
  }
  if (cards.length < 1) {
    return null
  }
  return (
    <Container>
      <Wrapper>
        <Heading>
          {icon ? (
            <Icon src={icon} alt="Icon" width="100" height="100" />
          ) : null}
          {label ? <Label>{label}</Label> : null}
          {title ? <Title dangerouslySetInnerHTML={{ __html: title }} /> : null}
        </Heading>
        <Cards>
          {cards.map((item, index) => {
            return <Card key={index} {...item} />
          })}
        </Cards>
      </Wrapper>
    </Container>
  )
})

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
  background-color: ${({ theme }) => theme.colors.variants.neutralLight2};
`

const Wrapper = styled.div`
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1310px) {
    max-width: calc(100% - 60px);
  }

  @media screen and (max-width: 768px) {
    max-width: calc(100% - 40px);
  }
`

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const Icon = styled.img`
  width: 65px;
  height: 65px;
  aspect-ratio: 1;
  margin-bottom: 2.7125rem;
`

const Label = styled.div`
  margin-bottom: 1.75rem;
  color: ${({ theme }) => theme.colors.variants.neutralDark2};
  font-family: ${({ theme }) => theme.fontFamily.default};
  font-weight: 500;
  font-size: 0.8125rem;
  text-transform: uppercase;
`

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.variants.neutralDark1};
  font-family: ${({ theme }) => theme.fontFamily.default};
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2.5rem;

  @media (max-width: 650px) {
    font-size: 1.3rem;
  }

  span {
    font-weight: 600;
    font-size: 2.125rem;

    @media (max-width: 650px) {
      font-size: 1.925rem;
    }
  }
`

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  //utilizzato flex e questo "trick" per evitare flex-gap (poco supportato) o display: grid
  margin-left: -5%;
  margin-bottom: -2rem;
  margin-top: 5rem;

  @media (max-width: 1150px) {
    margin-left: -4%;
  }

  @media (max-width: 650px) {
    margin-top: 3.5rem;
    margin-left: 0;
  }
`
