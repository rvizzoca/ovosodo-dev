import styled from '@emotion/styled'
import { Wave } from 'app/components/Icons'
import { FlexBox } from 'app/components/Layout/FlexBox'
import React, { memo } from 'react'

import { Icon } from './Icon'

export interface Props {
  list?: string[]
  modalStatus?: boolean
  title?: string
}

export const Benefits = memo(function Benefits({
  list,
  modalStatus,
  title,
}: Props) {
  return (
    <Container className={modalStatus ? 'visible' : undefined}>
      <Icon />

      <Wrapper dial={4} row space="between">
        {title ? <Title>{title}</Title> : null}

        {list ? (
          <List dial={5} row wrap>
            {list.map((item, index) => (
              <Item dial={5} key={index} row>
                {item}

                <Wave />
              </Item>
            ))}
          </List>
        ) : null}
      </Wrapper>
    </Container>
  )
})

const Container = styled.div`
  width: calc(100% - 5rem);
  color: ${({ theme }) => theme.colors.variants.neutralLight5};
  padding: 6.5625rem 5.833vw 2.8125rem;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  opacity: 0;
  transform: translateY(3.75rem);
  transition: 0.6s 0.4s ease-in-out;
  &.visible {
    opacity: 1;
    transform: none;
  }
`

const Wrapper = styled(FlexBox)`
  text-align: left;
  z-index: 2;
`

const Title = styled.div`
  max-width: 10.625rem;
  font-family: ${({ theme }) => theme.fontFamily.heading};
  font-size: 1.25rem;
  line-height: 1.6875rem;
`

const List = styled(FlexBox)``

const Item = styled(FlexBox)`
  font-family: ${({ theme }) => theme.fontFamily.paragraph};
  font-size: 0.875rem;
  letter-spacing: 0.0875rem;
  line-height: 1.0625rem;
  text-transform: uppercase;
  &:last-of-type {
    svg {
      display: none;
    }
  }

  svg {
    width: 1.875rem;
    height: auto;
    fill: ${({ theme }) => theme.colors.variants.neutralLight5};
    margin: 0 1.25rem;
  }
`
