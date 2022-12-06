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
  const home = query.cms?.home

  if (!home) {
    return undefined
  }

  const translation = home.translations?.find(
    (t: any) => t?.languages_id?.code === pageContext.languageCode,
  )

  const slides = compact(
    compact(translation?.slides_list).map(({ slide_id }) => {
      const imageObj = slide_id?.image?.file?.childImageSharp?.gatsbyImageData
      const image = imageObj
        ? {
            // alt: slide_id.image?.title || undefined,
            sources: imageObj.images.sources[0].srcSet || undefined,
            src: imageObj.images.fallback.src || undefined,
            srcSet: imageObj.images.fallback.srcSet || undefined,
            width: imageObj?.width || undefined,
            height: imageObj?.height || undefined,
          }
        : undefined

      const translation = slide_id?.translations?.filter(
        (t) => t?.languages_code?.code === pageContext.languageCode,
      )[0]

      const title = translation?.title || undefined

      return {
        image,
        title,
      }
    }),
  )

  return {
    slides,
  }
}
