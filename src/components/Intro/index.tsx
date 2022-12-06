import styled from '@emotion/styled'
import React, { memo, useState } from 'react'

export interface Props {
  description?: string
  label?: string
  title?: string
}

export const Intro = memo(function Intro({ description, label, title }: Props) {
  const [labelVisibility, setlabelVisibility] = useState(false)

  return (
    <Container>
      {label ? (
        <Label className={labelVisibility ? 'visible' : undefined}>
          {label}
        </Label>
      ) : null}

      {title ? (
        <Title
          onClick={() => {
            labelVisibility
              ? setlabelVisibility(false)
              : setlabelVisibility(true)
          }}
        >
          {title}
        </Title>
      ) : null}

      {description ? (
        <Description dangerouslySetInnerHTML={{ __html: description }} />
      ) : null}
    </Container>
  )
})

const Container = styled.section``

const Label = styled.div`
  opacity: 0;

  &.visible {
    opacity: 1;
  }
`

const Title = styled.h2``

const Description = styled.div``
