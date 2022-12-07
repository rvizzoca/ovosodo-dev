import { Props as CardsListProps } from 'app/components/CardsList'
import { Props as GalleryCategoriesProps } from 'app/components/GalleryCategories'
import { Props as ItemsListProps } from 'app/components/ItemsList'
import { Props as SliderProps } from 'app/components/Slider'
import { Props as VideoPlayerProps } from 'app/components/VideoPlayer'
import { CreatePagesQuery } from 'graphql-types'
import { compact } from 'lodash'

import { PageContext } from '.'

export interface Props {
  cardsListProps: CardsListProps | undefined
  itemsListProps: ItemsListProps | undefined
  galleryCategoriesProps: GalleryCategoriesProps | undefined
  sliderProps: SliderProps | undefined
  videoPlayerProps: VideoPlayerProps | undefined
}

export const getHomePageProps = (
  query: CreatePagesQuery,
  pageContext: PageContext,
): Props => {
  return {
    videoPlayerProps: getVideoPlayerProps(query, pageContext),
    cardsListProps: getCardsListProps(query, pageContext),
    sliderProps: getSliderProps(query, pageContext),
    itemsListProps: getItemsListProps(query, pageContext),
    galleryCategoriesProps: getGalleryCategoriesProps(query, pageContext),
  }
}

const getVideoPlayerProps = (
  query: CreatePagesQuery,
  pageContext: PageContext,
): VideoPlayerProps | undefined => {
  const home = query.cms?.home

  if (!home) {
    return undefined
  }

  const translation = home.translations?.find(
    (t: any) => t?.languages_id?.code === pageContext.languageCode,
  )

  const video = translation?.video_file?.file?.publicURL

  return video
    ? {
        languageCode: pageContext.languageCode,
        video,
      }
    : undefined
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

const getItemsListProps = (
  query: CreatePagesQuery,
  pageContext: PageContext,
): ItemsListProps | undefined => {
  const home = query.cms?.home

  if (!home) {
    return undefined
  }

  const translation = home.translations?.find(
    (t: any) => t?.languages_id?.code === pageContext.languageCode,
  )

  const items = translation?.test_list || undefined

  return {
    items,
  }
}

const getGalleryCategoriesProps = (
  query: CreatePagesQuery,
  pageContext: PageContext,
): GalleryCategoriesProps | undefined => {
  const home = query.cms?.home

  if (!home) {
    return undefined
  }

  const categories = compact(home.categories_list).map(
    ({ gallery_categories_id }) => {
      const translation = gallery_categories_id?.translations?.find(
        (t: any) => t?.languages_code?.code === pageContext.languageCode,
      )

      const images = compact(
        compact(gallery_categories_id?.images).map(({ directus_files_id }) => {
          const image = directus_files_id?.file?.childImageSharp

          return image
            ? {
                alt: directus_files_id?.title || undefined,
                category: translation?.title,
                sources: image.gatsbyImageData.images.sources[0].srcSet,
                src: image?.gatsbyImageData.images.fallback.src,
                srcSet: image?.gatsbyImageData.images.fallback.srcSet,
                width: image?.original?.width || 0,
                height: image?.original?.height || 0,
              }
            : undefined
        }),
      )

      const thumbnails = compact(
        compact(gallery_categories_id?.images).map(({ directus_files_id }) => {
          const image = directus_files_id?.file?.childImageSharp?.thumbnails

          return image
            ? {
                alt: directus_files_id?.title || undefined,
                sources: image.images.sources[0].srcSet,
                src: image?.images.fallback.src,
                srcSet: image?.images.fallback.srcSet,
                width: image?.width || 0,
                height: image?.height || 0,
              }
            : undefined
        }),
      )

      const title = translation?.title

      return title
        ? {
            languageCode: pageContext.languageCode,
            images: compact(images),
            thumbnails: compact(thumbnails),
            title,
          }
        : undefined
    },
  )

  return categories
    ? {
        categories: compact(categories),
        languageCode: pageContext.languageCode,
      }
    : undefined
}
