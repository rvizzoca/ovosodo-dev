import { Props as HeaderProps } from 'app/components/Common/Header'
import { Props as MenuItemProps } from 'app/components/Common/Header/MenuItem'
import { HeaderDataQuery } from 'graphql-types'
import { compact, uniqBy } from 'lodash'

export const getHeaderProps = (
  data: HeaderDataQuery,
  languageCode: string,
  menuItems: { [key: string]: MenuItemProps[] }[],
  pageID?: string,
): HeaderProps | undefined => {
  const languagesList = data.allSitePage.nodes
    .filter((t) => t.pageContext?.id === pageID)
    .map((node) => ({
      pageID: node.pageContext?.id || undefined,
      code: node.pageContext?.languagePrefix || 'it',
      languagePrefix: node.pageContext?.languagePrefix || null,
      URL: node.path,
      sort: node.pageContext.sort || 1,
    }))

  const navigationItems = compact(
    compact(menuItems.map((lang) => lang[languageCode as 'it-IT']))[0],
  ).filter((t) => t.languageCode === languageCode)

  return {
    languagesList: uniqBy(languagesList, 'code'),
    menuItems: uniqBy(navigationItems, 'title') || undefined,
    pageID,
  }
}
