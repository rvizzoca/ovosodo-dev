import { css } from '@emotion/react'
import styled from '@emotion/styled'
/* import { ChevronLeft, ChevronRight } from 'app/components/Icons' */
import { FlexBox } from 'app/components/Layout/FlexBox'
import { theme } from 'app/theme'
import { rgba } from 'emotion-rgba'
import React, { memo } from 'react'

export interface Props {
  className?: string
  direction?: 'L' | 'R'
  disabled?: boolean
  onClick?: (e: any) => void
  variant?: Variant
}

export const Arrow = memo(function Arrow({
  className,
  direction = 'L',
  disabled,
  onClick,
  variant = 'default',
}: Props) {
  return (
    <Container
      dial={5}
      className={`${className}${disabled ? ' disabled' : ''}`}
      onClick={onClick}
      variant={variant}
    >
      {/* {direction === 'L' ? <ChevronLeft /> : <ChevronRight />} */}
    </Container>
  )
})

const Container = styled(FlexBox)<ContainerProps>`
  width: 3.9375rem;
  height: 3.9375rem;
  background: ${rgba(theme.colors.variants.neutralDark1, 0.1)};
  border: 0.0625rem solid transparent;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &.disabled {
    pointer-events: none;
  }
  &:hover {
    background: none;
    border-color: ${rgba(theme.colors.variants.neutralDark1, 0.2)};
  }

  svg {
    width: auto;
    height: 1rem;
    fill: none;
    stroke: ${({ theme }) => theme.colors.variants.neutralDark1};
    stroke-width: 1;
    transition: 0.3s ease-in-out;
  }

  ${({ variant }) => {
    switch (variant) {
      case 'full':
        return css`
          background: ${theme.colors.variants.neutralDark1};
          &:hover {
            background: ${theme.colors.variants.neutralDark2};

            svg {
              stroke: ${theme.colors.variants.neutralDark1};
            }
          }

          svg {
            stroke: ${theme.colors.variants.neutralDark2};
          }
        `
      case 'banner':
        return css`
          background: ${rgba(theme.colors.variants.neutralDark1, 0.3)};

          svg {
            stroke: ${theme.colors.variants.neutralDark2};
          }
        `
    }
  }}
`

interface ContainerProps {
  variant: Variant
}

export type Variant = 'default' | 'full' | 'banner'
