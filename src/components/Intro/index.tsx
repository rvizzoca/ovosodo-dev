import styled from '@emotion/styled'
import React, { memo } from 'react'

export interface Props {
  description?: string
  label?: string
  title?: string
}

export const Intro = memo(function Intro({ description, label, title }: Props) {
  return (
    <Container>
      {label ? <Label>{label}</Label> : null}

      {title ? <Title>{title}</Title> : null}

      {description ? (
        <Description dangerouslySetInnerHTML={{ __html: description }} />
      ) : null}
    </Container>
  )
})

const Container = styled.section``

const Label = styled.div``

const Title = styled.h2``

const Description = styled.div``
