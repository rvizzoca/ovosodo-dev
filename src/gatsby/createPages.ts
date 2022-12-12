import { PageContext as HomePageContext } from 'app/templates/HomePage'
import { PageContext as RoomsPageContext } from 'app/templates/RoomsPage'
import { CreatePagesArgs } from 'gatsby'
import { CreatePagesQuery } from 'graphql-types'
import path from 'path'

import { collectGQLQueries } from '../gatsby/collectGraphQLFragments'
import { getHomePageProps } from '../templates/HomePage/contents'
import { getRoomsPageProps } from '../templates/RoomsPage/contents'
import { getHomePages, getRoomsPages } from './utils/pages'

export const createPages = async ({
  actions,
  graphql,
  reporter,
}: CreatePagesArgs): Promise<void> => {
  const fragments = await collectGQLQueries(
    path.resolve(__dirname, 'fragments'),
  )

  const { data, errors } = await graphql<CreatePagesQuery>(`
    ${fragments}

    query CreatePages {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
      cms {
        languages {
          code
          prefix
        }
        ...HomeQuery
        ...RoomsQuery
      }
    }
  `)

  if (!data) {
    reporter.error(`CreatePages query errored`)
    reporter.info(JSON.stringify(errors, null, 2))
    return
  }

  const homePages = getHomePages(data)
  const roomsPages = getRoomsPages(data)

  homePages.forEach((page) => {
    if (page.context) {
      const props = getHomePageProps(data, page.context)

      actions.createPage<HomePageContext>({
        ...page,
        context: {
          ...page.context,
          ...props,
        },
      })
      reporter.info(
        `Created page ${page.path} (Home ${JSON.stringify(page.context)})`,
      )
    }
  })
  roomsPages.forEach((page) => {
    if (page.context) {
      const props = getRoomsPageProps(data, page.context)

      actions.createPage<RoomsPageContext>({
        ...page,
        context: {
          ...page.context,
          ...props,
        },
      })
      reporter.info(
        `Created page ${page.path} (Rooms ${JSON.stringify(page.context)})`,
      )
    }
  })
}
