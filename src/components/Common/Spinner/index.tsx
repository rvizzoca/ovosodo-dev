import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { theme } from 'app/theme'
import { rgba } from 'emotion-rgba'
import { memo } from 'react'

export interface Props {
  className?: string
  variant?: Variant
}

export const Spinner = memo(function Spinner({
  className,
  variant = 'default',
}: Props) {
  return <Container className={className} variant={variant} />
})

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  transition: 0.2s;
  &.hidden {
    opacity: 0;
    visibility: hidden;
    z-index: -1;
  }
  &:before {
    content: '';
    width: 3rem;
    height: 3rem;
    animation: spin 1s infinite linear;
    background: none;
    border: 0.25rem solid ${({ theme }) => theme.colors.variants.primaryDark};
    border-top-color: transparent;
    border-radius: 100%;
    margin: -1.25rem 0 0 -1.25rem;
    position: absolute;
    top: 50%;
    left: 50%;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  ${({ variant }) => {
    switch (variant) {
      case 'white':
        return css`
          &:before {
            border-color: ${theme.colors.variants.neutralLight5};
            border-top-color: transparent;
          }
        `
      case 'form':
        return css`
          background: ${rgba(theme.colors.variants.neutralLight5, 0.9)};
        `
    }
  }}
`

interface ContainerProps {
  variant: Variant
}

export type Variant = 'default' | 'white' | 'form'
