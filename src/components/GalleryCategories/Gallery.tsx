import 'keen-slider/keen-slider.min.css'

import styled from '@emotion/styled'
import { Arrow } from 'app/components/Common/Arrow'
import { Image, Props as ImageProps } from 'app/components/Common/Image'
import { Spinner } from 'app/components/Common/Spinner'
import { FlexBox } from 'app/components/Layout/FlexBox'
import { useKeenSlider } from 'keen-slider/react'
import { uniq } from 'lodash'
import React, { memo, useEffect, useState } from 'react'

export interface Props {
  clickedSlide?: number
  images: ImageProps[]
  isOpen?: boolean
}

export const Gallery = memo(function Gallery({
  clickedSlide,
  images,
  isOpen,
}: Props) {
  if (!images) {
    return null
  }

  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentCategory, setCurrentCategory] = useState<any>(
    (images[0] as any)?.category,
  )
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
    loop: images.length > 1 ? true : false,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel)
      setCurrentCategory((images[s.track.details.rel] as any).category)
    },
    detailsChanged(s) {
      images.length > 1 ? setDetails(s.track.details) : null
    },
  })

  useEffect(() => {
    const newLoaded = [...loaded]
    newLoaded[currentSlide] = true
    const newNextLoaded = [...nextLoaded]
    newNextLoaded[currentSlide + 1] = true

    setLoaded(newLoaded)
    setNextLoaded(newNextLoaded)

    if (clickedSlide !== undefined) {
      galleryRef.current?.moveToIdx(clickedSlide, false, { duration: 0 })
    }

    setLoaded(newLoaded)

    if (isOpen) {
      document.addEventListener('keydown', function (e) {
        switch (e.keyCode) {
          case 37:
            galleryRef.current?.prev()
            break
          case 39:
            galleryRef.current?.next()
            break
        }
      })
    }
  }, [clickedSlide, currentSlide, galleryRef, sliderRef])

  return (
    <Container>
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

              <Spinner variant="white" />
            </Inner>
          </Slide>
        ))}
      </Carousel>

      {currentCategory ? <Category>{currentCategory}</Category> : null}

      {images.length > 1 ? (
        <>
          <Arrows row space="between">
            <Arrow
              onClick={(e) => e.stopPropagation() || galleryRef.current?.prev()}
              variant="full"
            />
            <Arrow
              direction="R"
              onClick={(e) => e.stopPropagation() || galleryRef.current?.next()}
              variant="full"
            />
          </Arrows>

          <Counter>{`${currentSlide + 1}/${images.length}`}</Counter>
        </>
      ) : null}
    </Container>
  )
})

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.variants.neutralDark1};
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
`

const Carousel = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  outline: none;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  &:active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
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

const Category = styled.div`
  color: ${({ theme }) => theme.colors.variants.neutralDark1};
  font-family: ${({ theme }) => theme.fontFamily.default};
  font-size: 2.5rem;
  line-height: 3.375rem;
  position: absolute;
  bottom: 4.625rem;
  left: 6.111vw;
  z-index: 1;

  @media (max-width: 1199px) {
    display: none;
  }
`

const Arrows = styled(FlexBox)`
  position: absolute;
  bottom: 4.375rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;

  > div {
    margin: 0 0.375rem;
  }

  @media (max-width: 1199px) {
    bottom: 1.875rem;
  }
`

const Counter = styled(FlexBox)`
  color: ${({ theme }) => theme.colors.variants.neutralDark1};
  font-family: ${({ theme }) => theme.fontFamily.default};
  font-size: 2.5rem;
  line-height: 3.375rem;
  position: absolute;
  bottom: 4.625rem;
  right: 6.111vw;
  z-index: 1;

  @media (max-width: 1199px) {
    font-size: 1.875rem;
    line-height: 2.5rem;
    top: 1rem;
    right: auto;
    bottom: auto;
    left: 24px;
  }
`
