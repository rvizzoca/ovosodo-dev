import {
  Header as HeaderComponent,
  Variant,
} from 'app/components/Common/Header'
import { Props as MenuItemProps } from 'app/components/Common/Header/MenuItem'
import { graphql, StaticQuery } from 'gatsby'
import React, { memo } from 'react'
import { createContext } from 'react'

import { getHeaderProps } from './getHeaderProps'

export interface Props {
  address?: string
  benefits?: any
  contactsPageURL?: string
  languageCode?: string
  languagePrefix?: string | null
  logo?: string
  logoSticky?: string
  menuItems: { [key: string]: MenuItemProps[] }[]
  pageID?: string
  phone?: string
  siteName?: string
  title?: string
  variant?: Variant
}

export const HeaderContext = createContext({})

export const Header = memo(function Header({
  address,
  benefits,
  contactsPageURL,
  languageCode,
  languagePrefix,
  logo,
  logoSticky,
  menuItems,
  pageID,
  phone,
  siteName,
  title,
  variant = 'default',
}: Props) {
  return (
    <StaticQuery
      query={graphql`
        query HeaderData {
          allSitePage {
            nodes {
              pageContext
              path
            }
          }
        }
      `}
      render={(data) => {
        const props = getHeaderProps(
          data,
          languageCode || 'it-IT',
          menuItems,
          pageID,
        )

        return props ? (
          <HeaderContext.Provider
            value={{
              address,
              benefits,
              contactsPageURL,
              languageCode,
              languagePrefix,
              logo,
              logoSticky,
              phone,
              siteName,
              title,
              variant,
            }}
          >
            <HeaderComponent {...props} />
          </HeaderContext.Provider>
        ) : null
      }}
    />
  )
})
