import styled from '@emotion/styled'
import { CardsList } from 'app/components/CardsList'
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
      {context.cardsListProps ? (
        <CardsList {...context.cardsListProps} />
      ) : null}
    </Container>
  )
})

const Container = styled.main``
