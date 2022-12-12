import styled from '@emotion/styled'
import { FlexBox } from 'app/components/Layout/FlexBox'
import React, { memo } from 'react'

import { Item, Props as ItemProps } from './Item'

export interface Props {
  items: ItemProps[]
}

export const BannerCTA = memo(function BannerCTA({ items }: Props) {
  if (items.length < 1) {
    return null
  }

  return (
    <Container row tag="section" wrap>
      {items.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </Container>
  )
})

const Container = styled(FlexBox)`
  &:hover {
    a {
      border-left-color: transparent;
      &:before {
        opacity: 0;
      }
      .title {
        color: ${({ theme }) => theme.colors.variants.neutralLight5};
        opacity: 0.3;
      }
    }
  }

  @media (max-width: 1199px) {
    display: block;
    &:hover {
      a {
        &:before {
          opacity: 0.3;
        }
        .title {
          opacity: 1;
        }
      }
    }
  }
`
