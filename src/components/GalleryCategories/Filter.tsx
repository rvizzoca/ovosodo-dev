import styled from '@emotion/styled'
import React, { memo } from 'react'

export interface Props {
  active?: boolean
  category: string
  onClick?: (e: any) => void
  title: string
}

export const Filter = memo(function Filter({
  active = false,
  category,
  onClick,
  title,
}: Props) {
  if (!title) {
    return null
  }

  return (
    <Container
      className={active ? 'active' : undefined}
      data-category={category}
      onClick={onClick}
    >
      {title}
    </Container>
  )
})

const Container = styled.div`
  color: ${({ theme }) => theme.colors.variants.neutralDark2};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fontFamily.paragraph};
  font-size: 1rem;
  letter-spacing: 0.1rem;
  line-height: 1.25rem;
  margin: 0 1.25rem;
  opacity: 0.4;
  position: relative;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;
  &:hover {
    &:after {
      right: 0;
    }
  }
  &.active {
    opacity: 1;
    pointer-events: none;
    &:after {
      right: 0;
    }
  }
  &:after {
    content: '';
    height: 0.0625rem;
    background: ${({ theme }) => theme.colors.variants.neutralDark2};
    position: absolute;
    bottom: -0.25rem;
    right: 100%;
    left: 0;
    transition: 0.3s ease-in-out;
  }
`
