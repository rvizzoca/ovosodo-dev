import styled from '@emotion/styled'
import React, { memo } from 'react'

import { Props as ZigzagProps, Zigzag } from './Zigzag'

export interface Props {
  zigzags: ZigzagProps[]
}

export const Zigzags = memo(function Zigzags({ zigzags }: Props) {
  if (!zigzags) {
    return null
  }
  if (zigzags.length < 1) {
    return null
  }

  return (
    <Wrapper>
      <Container>
        {zigzags.map((item, index) =>
          index % 2 ? (
            <Zigzag key={index} {...item} variant="inverted" />
          ) : (
            <Zigzag key={index} {...item} />
          ),
        )}
      </Container>
    </Wrapper>
  )
})

const Wrapper = styled.div`
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1310px) {
    max-width: calc(100% - 60px);
  }

  @media screen and (max-width: 768px) {
    max-width: calc(100% - 40px);
  }
`

const Container = styled.div`
  padding: 6rem 0;
`
