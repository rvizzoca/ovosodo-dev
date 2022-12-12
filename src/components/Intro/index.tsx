import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { FadeInUp } from 'app/components/Common/Animation/FadeInUp'
import { Image, Props as ImageProps } from 'app/components/Common/Image'
import { FlexBox } from 'app/components/Layout/FlexBox'
import { theme } from 'app/theme'
import { Media, MediaContextProvider, mediaStyle } from 'app/theme/media'
import React, { memo } from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

import { Icon } from './Icon'

export interface Props {
  description?: string
  image?: ImageProps
  title?: string
  videoURL?: string
  variant?: Variant
}

export const Intro = memo(function Intro({
  description,
  image,
  title,
  videoURL,
  variant = 'default',
}: Props) {
  return (
    <Container variant={variant}>
      <style type="text/css">{mediaStyle}</style>
      <MediaContextProvider>
        <Head dial={4} row space="between" wrap variant={variant}>
          {title ? (
            <FadeInUp>
              <Title variant={variant}>{title}</Title>
            </FadeInUp>
          ) : null}

          {image ? (
            <Media lessThan="desktopSmall">
              <MainImage>
                <LazyLoadComponent>
                  <Image {...image} />
                </LazyLoadComponent>
              </MainImage>
            </Media>
          ) : null}

          {description ? (
            <Media lessThan="desktopSmall">
              <FadeInUp>
                <Description
                  dangerouslySetInnerHTML={{ __html: description }}
                  variant={variant}
                />
              </FadeInUp>
            </Media>
          ) : null}

          {videoURL ? (
            <LazyLoadComponent>
              <Video autoPlay loop muted preload="auto">
                <Source src={videoURL} type="video/mp4" />
              </Video>
            </LazyLoadComponent>
          ) : null}
        </Head>

        {image ? (
          <Media greaterThanOrEqual="desktopSmall">
            <ParallaxProvider>
              <Parallax translateY={['0px', '-100px']}>
                <MainImage>
                  <LazyLoadComponent>
                    <Image {...image} />
                  </LazyLoadComponent>
                </MainImage>
              </Parallax>
            </ParallaxProvider>
          </Media>
        ) : null}

        <Icon variant={variant} />

        {description ? (
          <Media greaterThanOrEqual="desktopSmall">
            <FadeInUp>
              <Description
                dangerouslySetInnerHTML={{ __html: description }}
                variant={variant}
              />
            </FadeInUp>
          </Media>
        ) : null}
      </MediaContextProvider>
    </Container>
  )
})

const Container = styled.section<ContainerProps>`
  margin: 9.375rem auto 18.75rem;
  padding: 0 8.333vw;
  position: relative;

  ${({ variant }) => {
    switch (variant) {
      case 'nomedia':
        return css`
          max-width: 67rem;
          margin: 12.5rem auto;
          padding: 0 2.25rem;

          @media (max-width: 1199px) {
            max-width: none;
            margin: 6.25rem auto;
            padding: 0 1.5rem;
          }
        `
    }
  }}

  @media (max-width: 1199px) {
    margin: 6.25rem auto;
    padding: 0;
  }
`

const Head = styled(FlexBox)<ContainerProps>`
  > div {
    flex: 1;
    padding: 0 7.153vw;
  }

  ${({ variant }) => {
    switch (variant) {
      case 'nomedia':
        return css`
          > div {
            padding: 0;
          }
        `
    }
  }}

  @media (max-width: 1199px) {
    display: block;
    padding: 0;

    > div {
      padding: 0;
    }
  }
`

const Title = styled.h2<ContainerProps>`
  max-width: 26.875rem;
  font-family: ${({ theme }) => theme.fontFamily.heading};
  font-size: 3.125rem;
  font-weight: 300;
  line-height: 3.875rem;

  ${({ variant }) => {
    switch (variant) {
      case 'nomedia':
        return css`
          max-width: 40.625rem;

          @media (max-width: 1199px) {
            max-width: none;
          }
        `
    }
  }}

  @media (max-width: 1199px) {
    max-width: none;
    font-size: 2.5rem;
    line-height: 2.8125rem;
    padding: 0 1.5rem;
  }
`

const Video = styled.video`
  width: 40%;
  margin-bottom: 3.75rem;

  @media (max-width: 1199px) {
    width: 100%;
    margin-top: 6.25rem;
    margin-bottom: 0;
  }
`

const Source = styled.source``

const MainImage = styled.div`
  width: 18.958vw;
  max-width: 17.0625rem;
  height: 40.1vh;
  max-height: 22.5625rem;
  background: ${theme.colors.variants.neutralLight3};
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

  @media (max-width: 1199px) {
    width: calc(100% - 3rem);
    max-width: none;
    height: 58vh;
    max-height: 15.625rem;
    margin: 2.5rem auto 0;
    position: relative;
  }
`

const Description = styled.div<ContainerProps>`
  max-width: 43.75rem;
  font-family: ${({ theme }) => theme.fontFamily.paragraph};
  font-size: 1.0625rem;
  font-weight: 200;
  line-height: 2.125rem;
  margin: 3.75rem 7.153vw 0 auto;

  p {
    margin-block-end: 1em;
    &:last-of-type {
      margin-block-end: 0;
    }
  }

  ${({ variant }) => {
    switch (variant) {
      case 'nomedia':
        return css`
          margin-right: 0;
        `
    }
  }}

  @media (max-width: 1339px) {
    max-width: 37.5rem;
  }

  @media (max-width: 1199px) {
    max-width: none;
    font-size: 1.125rem;
    line-height: 2.125rem;
    margin: 2.5rem 0 0;
    padding: 0 1.5rem;
  }
`

interface ContainerProps {
  variant: Variant
}

export type Variant = 'default' | 'nomedia'
