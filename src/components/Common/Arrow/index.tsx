import styled from '@emotion/styled'
import { ArrowRight } from 'app/components/Icons'
import { FlexBox } from 'app/components/Layout/FlexBox'
import { theme } from 'app/theme'
import { rgba } from 'emotion-rgba'
import React, { memo } from 'react'

export interface Props {
  className?: string
  direction?: 'L' | 'R'
  disabled?: boolean
  onClick?: (e: any) => void
}

export const Arrow = memo(function Arrow({
  className,
  direction = 'L',
  disabled,
  onClick,
}: Props) {
  return (
    <Container
      dial={5}
      className={`${className}${disabled ? ' disabled' : ''}`}
      onClick={onClick}
    >
      {direction === 'L' ? <ArrowRight /> : <ArrowRight />}
    </Container>
  )
})

const Container = styled(FlexBox)`
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
    height: 1.5rem;
    fill: ${({ theme }) => theme.colors.variants.neutralLight1};
    transition: 0.3s ease-in-out;
  }
`
