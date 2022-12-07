import styled from '@emotion/styled'
import { CardsList } from 'app/components/CardsList'
import { GalleryCategories } from 'app/components/GalleryCategories'
import { ItemsList } from 'app/components/ItemsList'
import { Slider } from 'app/components/Slider'
import { VideoPlayer } from 'app/components/VideoPlayer'
import { PageProps } from 'gatsby'
import React, { memo } from 'react'

import { Props } from './contents'

export interface PageContext {
  id: string
  languageCode: string
  languagePrefix: string | null
}

export interface Context extends PageContext {
  props: Props
}

export default memo(function HomePageTemplate({
  pageContext,
}: PageProps<void, Context>) {
  const context = pageContext as any

  return (
    <Container>
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
    </Container>
  )
})

const Container = styled.main``
