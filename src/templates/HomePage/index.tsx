import styled from '@emotion/styled'
import { CardsList } from 'app/components/CardsList'
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
      {context.video ? <VideoPlayer video={context.video} /> : null}
      {context.listItems ? <ItemsList {...context.listItems} /> : null}
      {context.cardsListProps ? (
        <CardsList {...context.cardsListProps} />
      ) : null}
      {context.sliderProps ? <Slider {...context.sliderProps} /> : null}
    </Container>
  )
})

const Container = styled.main``
