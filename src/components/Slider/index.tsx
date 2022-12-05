import 'keen-slider/keen-slider.min.css'

import styled from '@emotion/styled'
import { Button, Props as ButtonProps } from 'app/components/Common/Button'
import { useKeenSlider } from 'keen-slider/react'
import React, { memo } from 'react'

export interface Props {
  cta?: ButtonProps
  description?: string
  images?: string[]
  label?: string
  pax?: string
  size?: string
  title?: string
}

export const Slider = memo(function Slider({
  cta,
  description,
  images,
  label,
  pax,
  size,
  title,
}: Props) {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log('slide changed')
      },
    },
    [
      // add plugins here
    ],
  )

  return (
    <Container>
      {images ? (
        <Slides ref={sliderRef} className="keen-slider">
          {images.map((item, index) => (
            <Slide className="keen-slider__slide" key={index}>
              <Image src={item} width="100%" height="100%" />
            </Slide>
          ))}
        </Slides>
      ) : null}
    </Container>
  )
})

const Container = styled.section``

const Inner = styled.div``

const Label = styled.div``

const Description = styled.div``

const CTA = styled(Button)``

const Slides = styled.div``

const Slide = styled.div``

const Image = styled.img``

const Info = styled.div``

const Title = styled.div``

const Pax = styled.div``

const Size = styled.div``
