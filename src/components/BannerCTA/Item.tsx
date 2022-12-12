import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Image, Props as ImageProps } from 'app/components/Common/Image'
import { ChevronRight } from 'app/components/Icons'
import { FlexBox } from 'app/components/Layout/FlexBox'
import { theme } from 'app/theme'
import { rgba } from 'emotion-rgba'
import { Link } from 'gatsby'
import React, { memo } from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

export interface Props {
  image?: ImageProps
  title?: string
  URL: string
}

export const Item = memo(function Item({ image, title, URL }: Props) {
  if (!URL) {
    return null
  }

  const EXTERNAL_URL_REGEX = new RegExp('^(https?|ftp|www)://')
  const externalURL = URL && EXTERNAL_URL_REGEX.test(URL)

  const componentDOM = (
    <>
      {image ? (
        <LazyLoadComponent>
          <Image {...image} />
        </LazyLoadComponent>
      ) : null}

      <Wrapper>
        {title ? <Title className="title">{title}</Title> : null}

        <Icon className="icon" dial={5}>
          <ChevronRight />
        </Icon>
      </Wrapper>
    </>
  )

  return (
    <>
      {externalURL ? (
        <ExternalLink href={URL} rel="noopener" target="_blank">
          {componentDOM}
        </ExternalLink>
      ) : (
        <Container to={URL || ''}>{componentDOM}</Container>
      )}
    </>
  )
})

const Style = css`
  flex: 1;
  height: 66.7vh;
  max-height: 37.5rem;
  border-top: 0.0625rem solid ${rgba(theme.colors.variants.neutralDark5, 0.2)};
  position: relative;
  transition: 0.3s ease-in-out;
  &:nth-of-type(2) {
    border-left: 0.0625rem solid
      ${rgba(theme.colors.variants.neutralDark5, 0.2)};

    img {
      transform: translateX(calc(-50vw - 0.0625rem));
    }
  }
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    background: ${theme.colors.variants.neutralLight5};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    transition: 0.5s ease-in-out;
  }
  &:hover {
    img {
      opacity: 1 !important;
    }
    .title {
      opacity: 1 !important;
    }
    .icon {
      opacity: 1;
      margin-top: 1.625rem;
    }
  }

  img {
    width: 100vw;
    height: 100%;
    object-fit: cover;
    opacity: 0 !important;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
  }

  @media (max-width: 1199px) {
    display: block;
    width: 100%;
    height: 15rem;
    border: 0;
    position: relative;
    &:hover {
      .icon {
        margin-top: 0;
      }
    }
    &:before {
      background: ${theme.colors.variants.neutralDark4};
      opacity: 0.3;
    }
    &:nth-of-type(2) {
      border: 0;

      img {
        transform: none;
      }
    }

    img {
      width: 100%;
      opacity: 1 !important;
    }
  }
`

const ExternalLink = styled.a`
  ${Style}
`

const Container = styled(Link)`
  ${Style}
`

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.5s ease-in-out;
  z-index: 2;

  @media (max-width: 1199px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Title = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.heading};
  font-size: 3.125rem;
  font-weight: 300;
  line-height: 4.375rem;
  transition: 0.6s cubic-bezier(0.76, 0, 0.24, 1);

  @media (max-width: 1199px) {
    color: ${({ theme }) => theme.colors.variants.neutralLight5};
    font-size: 2.1875rem;
    line-height: 2.625rem;
  }
`

const Icon = styled(FlexBox)`
  width: 4.375rem;
  height: 4.375rem;
  background: ${({ theme }) => theme.colors.variants.neutralLight5};
  border-radius: 50%;
  opacity: 0;
  margin: -3.875rem auto 0;
  transition: 0.6s cubic-bezier(0.76, 0, 0.24, 1);

  svg {
    width: auto;
    height: 1.25rem;
    fill: none;
    stroke: ${({ theme }) => theme.colors.variants.neutralDark3};
  }

  @media (max-width: 1199px) {
    width: 3rem;
    height: 3rem;
    opacity: 1;
    margin: 0.25rem 0 0 1.25rem;

    svg {
      height: 1rem;
    }
  }
`
