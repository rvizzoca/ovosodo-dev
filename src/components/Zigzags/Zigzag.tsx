import styled from '@emotion/styled'
import { Button, Props as ButtonProps } from 'app/components/Common/Button'
import { Image, Props as ImageProps } from 'app/components/Common/Image'
import { FlexBox } from 'app/components/Layout/FlexBox'
import React, { memo } from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

export interface Props {
  cta?: ButtonProps
  description?: string
  image?: ImageProps
  label?: string
  title?: string
  variant?: string
}

export const Zigzag = memo(function Zigzag({
  cta,
  description,
  image,
  label,
  title,
  variant = 'default',
}: Props) {
  return (
    <Container row dial={1} reverse={variant === 'inverted' ? true : false}>
      <ParallaxProvider>
        <Parallax translateY={['0px', '300px']}>
          <Box>
            {label ? <Label>{label}</Label> : null}
            {title ? (
              <Title dangerouslySetInnerHTML={{ __html: title }} />
            ) : null}
            {description ? (
              <Description dangerouslySetInnerHTML={{ __html: description }} />
            ) : null}
            {cta ? <CTA {...cta} /> : null}
          </Box>
        </Parallax>
      </ParallaxProvider>
      {image ? <Img {...image} /> : null}
    </Container>
  )
})

const Container = styled(FlexBox)``

const Box = styled.div`
  position: relative;
  left: 100px;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.variants.neutralLight1};
  z-index: 2;
`

const Label = styled.div``

const Title = styled.div``

const Description = styled.div``

const CTA = styled(Button)``

const Img = styled(Image)`
  z-index: -1;
`

interface ContainerProps {
  variant: Variant
}

export type Variant = 'default' | 'inverted'
