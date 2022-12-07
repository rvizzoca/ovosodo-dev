import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { FlexBox } from 'app/components/Layout/FlexBox'
import { theme } from 'app/theme'
import React, { memo } from 'react'

export interface Props {
  onClick: () => void
  variant?: Variant
}

export const Close = memo(function Close({
  onClick,
  variant = 'default',
}: Props) {
  return (
    <Container dial={5} row onClick={onClick} variant={variant}>
      <Icon variant={variant} />
    </Container>
  )
})

const Container = styled(FlexBox)<ContainerProps>`
  width: 5rem;
  height: 5rem;
  background: ${({ theme }) => theme.colors.variants.neutralLight2};
  cursor: pointer;
  position: fixed;
  top: 0;
  right: 0;
  transition: 0.6s ease-in-out;
  z-index: 4;
  &:hover {
    > div {
      &:before,
      &:after {
        transform: none;
      }
    }
  }

  ${({ variant }) => {
    switch (variant) {
      case 'invert':
        return css`
          background: ${theme.colors.variants.neutralLight5};
        `
    }
  }}

  @media (max-width: 1199px) {
    width: 3.75rem;
    height: 3.75rem;
  }
`

const Icon = styled.div<ContainerProps>`
  display: block;
  width: 1.75rem;
  height: 1.75rem;
  position: relative;
  &:before,
  &:after {
    content: '';
    width: 1.875rem;
    height: 0.0625rem;
    background: ${({ theme }) => theme.colors.variants.neutralLight5};
    position: absolute;
    top: 0.75rem;
    left: -0.0625rem;
    transition: 0.2s ease-out;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }

  ${({ variant }) => {
    switch (variant) {
      case 'invert':
        return css`
          &:before,
          &:after {
            background: ${theme.colors.variants.neutralDark2};
          }
        `
    }
  }}
`

interface ContainerProps {
  variant: Variant
}

export type Variant = 'default' | 'invert'
