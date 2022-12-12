import 'keen-slider/keen-slider.min.css'

import styled from '@emotion/styled'
import { Button } from 'app/components/Common/Button'
import { Dot } from 'app/components/Common/Dot'
import { Image, Props as ImageProps } from 'app/components/Common/Image'
import { Spinner } from 'app/components/Common/Spinner'
import { FlexBox } from 'app/components/Layout/FlexBox'
import { theme } from 'app/theme'
import { Media, MediaContextProvider, mediaStyle } from 'app/theme/media'
import { useVocabularyData } from 'app/utils/vocabulary'
import { rgba } from 'emotion-rgba'
import { useKeenSlider } from 'keen-slider/react'
import { uniq } from 'lodash'
import React, { memo, useEffect, useRef, useState } from 'react'

import { Cursor } from './Cursor'

export interface Props {
  buttonURL?: string
  languageCode?: string
  images: ImageProps[]
}

export const BannerGallery = memo(function BannerGallery({
  buttonURL,
  languageCode,
  images,
}: Props) {
  if (!images) {
    return null
  }

  const containerRef = useRef<any>()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [details, setDetails] = useState<any>(null)
  const [loaded, setLoaded] = useState<boolean[]>([])
  const [nextLoaded, setNextLoaded] = useState<boolean[]>([])

  function positionStyle(idx: any) {
    if (!details) {
      return undefined
    }

    const position = details.slides[idx].distance
    const x = (galleryRef.current?.size || window.innerWidth) * -position
    return {
      transform: `translate3d(${x}px, 0px, 0px)`,
      WebkitTransform: `translate3d(${x}px, 0px, 0px)`,
    }
  }

  const [sliderRef, galleryRef] = useKeenSlider({
    defaultAnimation: {
      duration: 1800,
    },
    drag: false,
    loop: images.length > 1 ? true : false,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel)
    },
    detailsChanged(s) {
      images.length > 1 ? setDetails(s.track.details) : null
    },
    breakpoints: {
      '(max-width: 1199px)': {
        drag: true,
      },
    },
  })

  useEffect(() => {
    const newLoaded = [...loaded]
    newLoaded[currentSlide] = true
    const newNextLoaded = [...nextLoaded]
    newNextLoaded[currentSlide + 1] = true

    setLoaded(newLoaded)
    setNextLoaded(newNextLoaded)
  }, [currentSlide, galleryRef, sliderRef])

  return (
    <Container ref={containerRef}>
      <style type="text/css">{mediaStyle}</style>
      <MediaContextProvider>
        <Carousel ref={sliderRef}>
          {uniq(images).map((item, index) => (
            <Slide key={index} className="keen-slider__slide">
              <Inner style={positionStyle(index)}>
                <Image
                  alt={loaded[index] || nextLoaded[index] ? item.alt : ''}
                  animationStart={
                    loaded[index] || nextLoaded[index] ? true : false
                  }
                  {...(loaded[index] || nextLoaded[index] ? item : null)}
                />

                <Spinner />
              </Inner>
            </Slide>
          ))}
        </Carousel>

        <Media lessThan="desktopSmall">
          {images.length > 1 ? (
            <Dots dial={5} row>
              {images.map((_item, index) => (
                <Dot
                  key={index}
                  className={currentSlide === index ? 'active' : undefined}
                  onClick={() => {
                    galleryRef.current?.moveToIdx(index)
                  }}
                />
              ))}
            </Dots>
          ) : null}
        </Media>

        {images.length > 1 ? (
          <>
            <Cursor container={containerRef} gallery={galleryRef} />

            <Counter dial={7} row>
              <Current>
                {(currentSlide + 1).toString().padStart(2, '0')}
              </Current>
              <Total>{`/ ${images.length.toString().padStart(2, '0')}`}</Total>
            </Counter>
          </>
        ) : null}

        {buttonURL ? (
          <CTA
            label={useVocabularyData('book-now', languageCode || 'it-IT')}
            URL={buttonURL}
            rel="noopener"
            target="_blank"
            variant="outline"
          />
        ) : null}
      </MediaContextProvider>
    </Container>
  )
})

const Container = styled.section`
  overflow: hidden;
  position: relative;
  &:hover {
    cursor: none;
  }
`

const Carousel = styled.div`
  display: flex;
  width: 100%;
  height: 77.8vh;
  max-height: 43.75rem;
  outline: none;
  overflow: hidden;
  position: relative;
  &:after {
    content: '';
    width: 100%;
    height: 43%;
    background: linear-gradient(
      ${rgba(theme.colors.variants.neutralDark4, 0)},
      ${rgba(theme.colors.variants.neutralDark4, 0.6)}
    );
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 3;
  }

  @media (max-width: 1199px) {
    height: 66.8vh;
    max-height: 17.5rem;
    &:after {
      display: none;
    }
  }
`

const Slide = styled.div`
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
  }
`

const Inner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition-timing-function: cubic-bezier(0.76, 0, 0.24, 1);
`

const Counter = styled(FlexBox)`
  color: ${({ theme }) => theme.colors.variants.neutralLight5};
  font-weight: 300;
  position: absolute;
  bottom: 4.75rem;
  left: 8.333vw;
  z-index: 3;

  @media (max-width: 1199px) {
    display: none;
  }
`

const Current = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.heading};
  font-size: 3.75rem;
  line-height: 4.375rem;
`

const Total = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.paragraph};
  font-size: 1.1875rem;
  line-height: 2.5rem;
  margin-left: 1.4375rem;
`

const Dots = styled(FlexBox)`
  padding-top: 1.875rem;

  > div {
    margin: 0 1.5625rem;
  }
`

const CTA = styled(Button)`
  background: ${({ theme }) => theme.colors.variants.primaryLight};
  border-color: transparent;
  position: absolute !important;
  bottom: 5.5rem;
  left: 50%;
  position: relative;
  z-index: 3;
  transform: translateX(-50%);
  &:hover {
    background: transparent;
    border-color: ${({ theme }) => theme.colors.variants.neutralLight5};
  }
`
