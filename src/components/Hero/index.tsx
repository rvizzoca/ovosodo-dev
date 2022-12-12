import styled from '@emotion/styled'
import { Image, Props as ImageProps } from 'app/components/Common/Image'
import { Spinner } from 'app/components/Common/Spinner'
/* import { Play } from 'app/components/Icons' */
import { Media, MediaContextProvider, mediaStyle } from 'app/theme/media'
import React, { memo, useLayoutEffect, useRef, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { Helmet } from 'react-helmet'
import { useInView } from 'react-intersection-observer'

export interface Props {
  claim?: string
  image?: ImageProps
  mobileImage?: ImageProps
  payoff?: string
  hasVideo?: boolean
}

export const Hero = memo(function Hero({
  claim,
  image,
  mobileImage,
  payoff,
  hasVideo,
}: Props) {
  if (!image && !hasVideo) {
    return null
  }

  const videoRef = useRef<any>()
  const [playIconStatus, setPlayIconStatus] = useState(true)

  const [claimRef, isClaimVisible] = useInView()

  useLayoutEffect(() => {
    if (!isMobile && videoRef.current) {
      videoRef.current.play()
    }
  }, [videoRef])

  return (
    <>
      {mobileImage ? (
        <Helmet>
          <link
            rel="preload"
            as="image"
            href={mobileImage.src}
            imageSrcSet={mobileImage.srcSet}
          />
        </Helmet>
      ) : null}

      <Container>
        <style type="text/css">{mediaStyle}</style>
        <MediaContextProvider>
          {mobileImage ? (
            <Media lessThan="ipadVertical">
              <Picture {...mobileImage} />
            </Media>
          ) : null}

          {image ? (
            <Media greaterThanOrEqual="ipadVertical">
              <MainImage>
                <Spinner variant="white" />

                <Image {...image} />
              </MainImage>
            </Media>
          ) : null}

          {hasVideo ? (
            <VideoWrapper>
              <Video
                ref={videoRef}
                loop
                muted
                playsInline
                poster="/video.webp"
                preload="none"
              >
                <Source src="/concapark.mp4" type="video/mp4" />
              </Video>

              {playIconStatus ? (
                <Media lessThan="ipadVertical">
                  <SVG
                    onClick={() => {
                      videoRef.current.play()
                      setPlayIconStatus(false)
                    }}
                  >
                    {/* <Play /> */}
                  </SVG>
                </Media>
              ) : null}
            </VideoWrapper>
          ) : null}

          {claim ? (
            <Wrapper>
              <Claim
                ref={claimRef}
                className={isClaimVisible ? 'visible' : undefined}
              >
                {claim}
              </Claim>

              {payoff ? (
                <Payoff className={isClaimVisible ? 'visible' : undefined}>
                  {payoff}
                </Payoff>
              ) : null}
            </Wrapper>
          ) : null}
        </MediaContextProvider>
      </Container>
    </>
  )
})

const Container = styled.section`
  height: 100vh;
  max-height: -webkit-fill-available;
  background: ${({ theme }) => theme.colors.variants.neutralDark3};
  overflow: hidden;
  position: relative;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.variants.neutralDark4};
    backface-visibility: hidden;
    opacity: 0.3;
    position: absolute;
    top: 0%;
    left: 0;
    z-index: 3;
  }
`

const Picture = styled(Image)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`

const MainImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
`

const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const Video = styled.video`
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const SVG = styled.div`
  svg {
    width: 5rem;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 3;
    transform: translate(-50%, calc(-50% - 2.5rem));
  }
`

const Source = styled.source``

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.variants.neutralLight5};
  position: absolute;
  bottom: 5.9375rem;
  right: 8.333vw;
  left: 8.333vw;
  z-index: 4;

  @media (max-width: 1199px) {
    bottom: 8.375rem;
    right: 1.5rem;
    left: 1.5rem;
  }
`

const Claim = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.heading};
  font-size: 2.8125rem;
  font-weight: 300;
  opacity: 0;
  line-height: 3.4375rem;
  transform: translateY(3.75rem);
  transition: 0.6s 0.1s ease-in-out;
  &.visible {
    opacity: 1;
    transform: none;
  }

  @media (max-width: 1199px) {
    font-size: 2.1875rem;
    line-height: 2.625rem;
  }
`

const Payoff = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.paragraph};
  font-size: 1.0625rem;
  font-weight: 200;
  line-height: 2.125rem;
  margin-top: 1.1875rem;
  opacity: 0;
  transform: translateY(3.75rem);
  transition: 0.6s 0.2s ease-in-out;
  &.visible {
    opacity: 1;
    transform: none;
  }

  @media (max-width: 1199px) {
    font-size: 1rem;
    line-height: 1.875rem;
    margin-top: 0.75rem;
  }
`
