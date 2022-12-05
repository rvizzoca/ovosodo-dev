import styled from '@emotion/styled'
import { CardsList } from 'app/components/CardsList'
import { SEO } from 'app/components/SEO'
import { Slider } from 'app/components/Slider'
import React, { memo } from 'react'

const cardsContent = [
  {
    icon: 'icon-1.svg',
    title: 'FIT',
    description:
      'Wellby Fit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus tortor eget lectus luctus, ut pretium quam rutrum. ',
  },
  {
    icon: 'icon-2.svg',
    title: 'Swim',
    description:
      'Wellby Fit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus tortor eget lectus luctus, ut pretium quam rutrum. ',
  },
  {
    icon: 'icon-3.svg',
    title: 'SPA',
    description:
      'Wellby Fit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus tortor eget lectus luctus, ut pretium quam rutrum. ',
  },
  {
    icon: 'icon-4.svg',
    title: 'Salus',
    description:
      'Wellby Fit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus tortor eget lectus luctus, ut pretium quam rutrum. ',
  },
  {
    icon: 'icon-5.svg',
    title: 'Beauty',
    description:
      'Wellby Fit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus tortor eget lectus luctus, ut pretium quam rutrum. ',
  },
]

const sliderImages = [
  'https://www.roomofandrea.it/wp-content/uploads/2020/01/rooms.jpg',
  'https://www.xotels.com/wp-content/uploads/2020/03/hotel-room-type-xotels-hotel-management-company.webp',
  'https://www.ikea.com/images/a-slattum-upholstered-bed-and-various-white-nordli-chests-of-6b6a06f902c303389a40adc08c3512fc.jpg',
]

export default memo(function HomePageTemplate() {
  return (
    <Container>
      <SEO />
      <CardsList
        cards={cardsContent}
        icon="icon-logo.svg"
        label="Prodotti della suite"
        title="Un sistema completo e modulare,<br><span>per tutti i target</span>"
      />
      <Slider images={sliderImages} />
    </Container>
  )
})

const Container = styled.main``
