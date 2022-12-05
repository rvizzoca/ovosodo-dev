import { Props as CardsListProps } from 'app/components/CardsList'
import { Props as SliderProps } from 'app/components/Slider'
import { CreatePagesQuery } from 'graphql-types'
import { compact } from 'lodash'

import { PageContext } from '.'

export interface Props {
  cardsListProps: CardsListProps | undefined
  sliderProps: SliderProps | undefined
}

export const getHomePageProps = (
  query: CreatePagesQuery,
  pageContext: PageContext,
): Props => {
  return {
    cardsListProps: getCardsListProps(query, pageContext),
    sliderProps: getSliderProps(query, pageContext),
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

const getSliderProps = (
  query: CreatePagesQuery,
  pageContext: PageContext,
): SliderProps | undefined => {
  const roomNode = query.cms?.room

  if (!roomNode) {
    return undefined
  }

  const images = roomNode.map(({ images }) => {
    compact(
      compact(images).map(({ directus_files_id }) => {
        const image = directus_files_id?.file?.childImageSharp

        return image
          ? {
              alt: directus_files_id?.title || undefined,
              sources: image.gatsbyImageData.images.sources[0].srcSet,
              src: image?.gatsbyImageData.images.fallback.src,
              srcSet: image?.gatsbyImageData.images.fallback.srcSet,
              width: image?.original?.width || 0,
              height: image?.original?.height || 0,
            }
          : undefined
      }),
    )

    return {
      images,
    }
  })

  return undefined
}
