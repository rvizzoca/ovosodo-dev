import styled from '@emotion/styled'
import { CardsList } from 'app/components/CardsList'
import { Slider } from 'app/components/Slider'
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

const sliderImages = [
  'https://www.roomofandrea.it/wp-content/uploads/2020/01/rooms.jpg',
  'https://www.xotels.com/wp-content/uploads/2020/03/hotel-room-type-xotels-hotel-management-company.webp',
  'https://www.ikea.com/images/a-slattum-upholstered-bed-and-various-white-nordli-chests-of-6b6a06f902c303389a40adc08c3512fc.jpg',
]

export default memo(function HomePageTemplate({
  pageContext,
}: PageProps<void, Context>) {
  const context = pageContext as any

  return (
    <Container>
      {context.cardsListProps ? (
        <CardsList {...context.cardsListProps} />
      ) : null}
      <Slider images={sliderImages} />
    </Container>
  )
})

const Container = styled.main``
