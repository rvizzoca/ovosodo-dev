import styled from '@emotion/styled'
import React, { memo } from 'react'

export interface Props {
  className?: string
  onClick?: (e: any) => void
}

export const Dot = memo(function Dot({ className, onClick }: Props) {
  return <Container className={className} onClick={onClick} />
})

const Container = styled.div`
  width: 0.625rem;
  height: 0.625rem;
  background: ${({ theme }) => theme.colors.variants.neutralLight5};
  border-radius: 50%;
  cursor: pointer;
  margin: 0 0.625rem;
  opacity: 0.3;
  &.active {
    opacity: 1;
  }
`
