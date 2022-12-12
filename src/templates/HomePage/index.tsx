import styled from '@emotion/styled'
import { CardsList } from 'app/components/CardsList'
import { GalleryCategories } from 'app/components/GalleryCategories'
import { ItemsList } from 'app/components/ItemsList'
import { Slider } from 'app/components/Slider'
import {
  Props as StructuredDataProps,
  StructuredData,
} from 'app/components/StructuredData'
import { VideoPlayer } from 'app/components/VideoPlayer'
import { Zigzags } from 'app/components/Zigzags'
import { Footer, Props as FooterProps } from 'app/containers/Footer'
import { Header, Props as HeaderProps } from 'app/containers/Header'
import { PageProps } from 'gatsby'
import React, { memo } from 'react'

import { Props } from './contents'

export interface PageContext {
  id: string
  languageCode: string
  languagePrefix: string | null
  headerProps?: HeaderProps
  footerProps?: FooterProps
  structuredDataProps?: StructuredDataProps
}

export interface Context extends PageContext {
  props: Props
}

const zigzagProps = [
  {
    label: 'Mediterranean sea',
    title: '<strong>Montenapo</strong><br>Sea luxury experience',
    description:
      'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
    cta: {
      label: 'Scoprite',
      URL: '#',
    },
    image: { src: 'boat.jpeg' },
  },
  {
    label: 'La storia',
    title: '<strong>Una famiglia</strong><br>italiana',
    description:
      'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
    cta: {
      label: 'Chi siamo',
      URL: '#',
    },
    image: { src: 'boat.jpeg' },
  },
]

export default memo(function HomePageTemplate({
  pageContext,
}: PageProps<void, Context>) {
  const context = pageContext as any

  return (
    <Container>
      {/* {context.headerProps ? (
        <Header
          languageCode={context.languageCode}
          languagePrefix={context.languagePrefix}
          pageID={context.id}
          {...context.headerProps}
        />
      ) : null} */}
      {zigzagProps ? <Zigzags zigzags={zigzagProps} /> : null}
      {context.videoPlayerProps ? (
        <VideoPlayer {...context.videoPlayerProps} />
      ) : null}
      {context.cardsListProps ? (
        <CardsList {...context.cardsListProps} />
      ) : null}
      {context.sliderProps ? <Slider {...context.sliderProps} /> : null}
      {context.itemsListProps ? (
        <ItemsList {...context.itemsListProps} />
      ) : null}
      {context.galleryCategoriesProps ? (
        <GalleryCategories {...context.galleryCategoriesProps} />
      ) : null}
      {/* {context.footerProps ? (
        <Footer languageCode={context.languageCode} {...context.footerProps} />
      ) : null} */}
    </Container>
  )
})

const Container = styled.main``
