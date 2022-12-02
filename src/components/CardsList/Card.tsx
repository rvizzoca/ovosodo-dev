import styled from '@emotion/styled'
import React, { memo } from 'react'

export interface Props {
  description?: string
  icon?: string
  title?: string
}

export const Card = memo(function Card({ description, icon, title }: Props) {
  return (
    <Container>
      {icon ? <Icon src={icon} /> : null}
      {title ? <Title>{title}</Title> : null}
      {description ? (
        <Description dangerouslySetInnerHTML={{ __html: description }} />
      ) : null}
    </Container>
  )
})

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 18.125rem;
  width: 28%;
  margin-left: 5%;
  margin-bottom: 2rem;
  padding: 3.75rem 2rem 2.8125rem;
  border-radius: 1.125rem;
  background-color: ${({ theme }) => theme.colors.variants.neutralLight1};
  box-shadow: 0px 10px 20px rgba(25, 10, 57, 0.13);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 1150px) {
    width: 29%;
    justify-content: center;
    margin-left: 4%;
    padding-top: 2.8125rem;
  }

  @media (max-width: 1024px) {
    width: 45%;
  }

  @media (max-width: 650px) {
    width: 100%;
    margin-left: 0;
  }
`

const Icon = styled.img`
  height: 2.8125rem;
  margin-bottom: 1.5rem;
`

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.variants.neutralDark1};
  font-family: ${({ theme }) => theme.fontFamily.default};
  font-weight: bold;
  font-size: 1.0625rem;
  text-align: center;
`

const Description = styled.div`
  margin-top: 0.875rem;
  color: ${({ theme }) => theme.colors.variants.neutralDark1};
  font-family: ${({ theme }) => theme.fontFamily.default};
  font-weight: 300;
  font-size: 0.8125rem;
  line-height: 1.375rem;
  text-align: center;
  opacity: 0.7;
`
