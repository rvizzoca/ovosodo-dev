import styled from '@emotion/styled'
import { FlexBox } from 'app/components/Layout/FlexBox'
import React, { memo } from 'react'

export interface Props {
  modalStatus?: boolean
  onClick?: () => void
}

export const Hamburger = memo(function Hamburger({
  modalStatus,
  onClick,
}: Props) {
  return (
    <Container
      className={modalStatus ? 'open' : undefined}
      dial={5}
      onClick={onClick}
    >
      <Wrapper>
        <Line />
        <Line />
        <Line />
      </Wrapper>
    </Container>
  )
})

const Container = styled(FlexBox)`
  width: 5rem;
  height: 5rem;
  background: ${({ theme }) => theme.colors.variants.primaryDark};
  cursor: pointer;
  position: relative;
  &.open {
    &:hover {
      > div {
        > div {
          &:last-of-type {
            width: 1.875rem;
          }
        }
      }
    }
    > div {
      > div {
        transition: none;
        &:nth-of-type(1) {
          transform: rotate(45deg);
        }
        &:nth-of-type(2) {
          display: none;
        }
        &:nth-of-type(3) {
          transform: rotate(-45deg) translateY(-0.0625rem);
        }
      }
    }
  }
  &:hover {
    > div {
      > div {
        &:last-of-type {
          width: 0.9375rem;
        }
      }
    }
  }

  @media (max-width: 1199px) {
    width: 3.75rem;
    height: 3.75rem;
  }
`

const Wrapper = styled.div``

const Line = styled.div`
  width: 1.875rem;
  height: 0.0625rem;
  background: ${({ theme }) => theme.colors.variants.neutralLight5};
  transition: 0.3s width ease-in-out;
  &:nth-of-type(2) {
    margin: 0.375rem 0;
  }
`
