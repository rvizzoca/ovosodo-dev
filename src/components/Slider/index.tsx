import 'keen-slider/keen-slider.min.css'

import styled from '@emotion/styled'
import { Button, Props as ButtonProps } from 'app/components/Common/Button'
// import { Props as ImageProps } from 'app/components/Common/Image'
import { FlexBox } from 'app/components/Layout/FlexBox'
import { useKeenSlider } from 'keen-slider/react'
import React, { memo } from 'react'

export interface Props {
  cta?: ButtonProps
  description?: string
  // images?: ImageProps[]
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
    <Wrapper>
      <Container row dial={5} tag="section">
        <Inner>
          <Label>{'Le camere'}</Label>
          <Description>
            {
              'Uno stile elegante unito alla praticità permette di sentirsi subito in un ambiente familiare.'
            }
          </Description>
          <CTA label="Camere & Suites" />
        </Inner>
        {images ? (
          <Slides ref={sliderRef} className="keen-slider">
            {images.map((item, index) => (
              <Slide className="keen-slider__slide" key={index}>
                <Image src={item} width="100%" height="100%" />
                <Info>
                  <Title>{'Titolo camera 1'}</Title>
                  <Pax>{'6 persone'}</Pax>
                  <Size>{'64mq'}</Size>
                </Info>
              </Slide>
            ))}
          </Slides>
        ) : null}
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

const Container = styled(FlexBox)`
  padding: 6rem 0;
`

const Inner = styled.div`
  width: 45%;
  margin-right: 5%;
`

const Label = styled.div`
  margin-bottom: 1.75rem;
  color: ${({ theme }) => theme.colors.variants.neutralDark2};
  font-family: ${({ theme }) => theme.fontFamily.default};
  font-weight: 500;
  font-size: 0.8125rem;
  text-transform: uppercase;
`

const Description = styled.div`
  color: ${({ theme }) => theme.colors.variants.neutralDark1};
  font-family: ${({ theme }) => theme.fontFamily.default};
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2.5rem;

  @media (max-width: 650px) {
    font-size: 1.3rem;
  }
`

const CTA = styled(Button)`
  margin-top: 2.1875rem;
`

const Slides = styled.div`
  width: 50%;
`

const Slide = styled.div`
  max-width: 785px;
  max-height: 550px;
`

const Image = styled.img``

const Info = styled.div``

const Title = styled.div``

const Pax = styled.div``

const Size = styled.div``
