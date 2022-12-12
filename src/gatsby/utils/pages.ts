import { PageContext as HomePageContext } from 'app/templates/HomePage'
import { PageContext as RoomsPageContext } from 'app/templates/RoomsPage'
import { Page } from 'gatsby'
import { CreatePagesQuery } from 'graphql-types'
import { compact, flatten } from 'lodash'
import path from 'path'

const HOME_PAGE_TEMPLATE = path.resolve('src/templates/HomePage/index.tsx')
const ROOMS_PAGE_TEMPLATE = path.resolve('src/templates/RoomsPage/index.tsx')

export const getHomePages = (
  data: CreatePagesQuery,
): Page<HomePageContext>[] => {
  const translations = compact(data.cms.home?.translations)
    .filter(
      (
        x,
      ): x is {
        languages_id: {
          code: string
          prefix: string | null
          sort: number | null
        }
        metatag_title: string
        metatag_description: string
      } => {
        const { languages_id } = x

        return Boolean(
          languages_id &&
            languages_id.code &&
            languages_id.prefix !== undefined &&
            languages_id.sort !== undefined,
        )
      },
    )
    .map(({ languages_id }) => ({
      language: languages_id,
    }))

  return translations.map(({ language }) => ({
    path: `${language.prefix ? `/${language.prefix}` : '/'}`,
    component: HOME_PAGE_TEMPLATE,
    context: {
      id: data.cms.home?.id || '',
      languageCode: language.code,
      languagePrefix: language.prefix,
      sort: language.sort,
    },
  }))
}

export const getRoomsPages = (
  data: CreatePagesQuery,
): Page<RoomsPageContext>[] => {
  const translations = compact(data.cms.rooms?.translations)
    .filter(
      (
        x,
      ): x is {
        languages_code: {
          code: string
          prefix: string | null
          sort: number | null
        }
        title: string
        slug: string
        metatag_title: string
        metatag_description: string
      } => {
        const { languages_code, slug } = x

        return Boolean(
          languages_code &&
            languages_code.code &&
            languages_code.prefix !== undefined &&
            languages_code.sort !== undefined &&
            slug,
        )
      },
    )
    .map(({ languages_code, slug }) => ({
      language: languages_code,
      slug,
    }))

  return translations.map(({ language, slug }) => ({
    path: `${language.prefix ? `/${language.prefix}` : ''}/${slug}`,
    component: ROOMS_PAGE_TEMPLATE,
    context: {
      id: data.cms.rooms?.id || '',
      languageCode: language.code,
      languagePrefix: language.prefix,
      sort: language.sort,
    },
  }))
}

/* export const getRoomsPages = (
  data: CreatePagesQuery,
): Page<RoomsPageContext>[] => {
  const translations =
    data.cms.rooms?.status === 'published'
      ? compact(data.cms.rooms?.translations)
          .filter(
            (
              x,
            ): x is {
              languages_code: {
                code: string
                prefix: string | null
                sort: number | null
              }
              title: string
              slug: string
              metatag_title: string
              metatag_description: string
            } => {
              const { languages_code, slug } = x

              return Boolean(
                languages_code &&
                  languages_code.code &&
                  languages_code.prefix !== undefined &&
                  languages_code.sort !== undefined &&
                  slug,
              )
            },
          )
          .map(({ languages_code, slug }) => ({
            language: languages_code,
            slug,
          }))
      : []

  return translations.map(({ language, slug }) => ({
    path: `${language.prefix ? `/${language.prefix}` : ''}/${slug}`,
    component: ROOMS_PAGE_TEMPLATE,
    context: {
      id: data.cms.rooms?.id || '',
      languageCode: language.code,
      languagePrefix: language.prefix,
      sort: language.sort,
    },
  }))
} */
