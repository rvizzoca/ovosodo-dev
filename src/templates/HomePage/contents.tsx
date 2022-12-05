import { Props as CardsListProps } from 'app/components/CardsList'
import { CreatePagesQuery } from 'graphql-types'
import { compact } from 'lodash'

import { PageContext } from '.'

export interface Props {
  cardsListProps: CardsListProps | undefined
}

export const getHomePageProps = (
  query: CreatePagesQuery,
  pageContext: PageContext,
): Props => {
  return {
    cardsListProps: getCardsListProps(query, pageContext),
  }
}

const getCardsListProps = (
  query: CreatePagesQuery,
  pageContext: PageContext,
): CardsListProps | undefined => {
  const home = query.cms?.home

  if (!home) {
    return undefined
  }

  const translation = home.translations?.find(
    (t: any) => t?.languages_id?.code === pageContext.languageCode,
  )

  const cards = compact(
    compact(translation?.cards_list).map(({ card_id }) => {
      const icon = card_id?.icon?.file?.publicURL || undefined

      const translation = card_id?.translations?.filter(
        (t) => t?.languages_code?.code === pageContext.languageCode,
      )[0]

      const description = translation?.description || undefined
      const title = translation?.title || undefined

      return {
        description,
        icon,
        title,
      }
    }),
  )

  return {
    cards,
    label: 'Test',
    title: 'Questo il titolo',
  }
}
