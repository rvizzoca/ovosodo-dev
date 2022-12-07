import styled from '@emotion/styled'
import { Services } from 'app/components/Services'
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

export default memo(function RoomsPageTemplate({
  pageContext,
}: PageProps<void, Context>) {
  const context = pageContext as any

  return (
    <Container>
      {context.servicesProps ? <Services {...context.servicesProps} /> : null}
    </Container>
  )
})

const Container = styled.main``
