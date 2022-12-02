import styled from '@emotion/styled'
import { CardsList } from 'app/components/CardsList'
import { SEO } from 'app/components/SEO'
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
    </Container>
  )
})

const Container = styled.main``
