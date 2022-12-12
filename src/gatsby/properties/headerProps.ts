// @ts-nocheck

import { Props as HeaderProps } from 'app/containers/Header'
import { compact } from 'lodash'

function headerProps(data: any): HeaderProps {
  /* const logo = compact(data.logo.nodes)[0].publicURL || undefined */
  const siteName = data.site?.siteMetadata?.title || undefined

  const menuItems = compact(data.cms.languages).map((language) => {
    const code = language.code || 'it-IT'

    let locationLabel: string
    let restaurantsLabel: string

    switch (code) {
      case 'de-DE':
        locationLabel = 'Location'
        restaurantsLabel = 'Food & Drink'
        break
      case 'en-US':
        locationLabel = 'Location'
        restaurantsLabel = 'Food & Drink'
        break
      default:
        locationLabel = 'Location'
        restaurantsLabel = 'Food & Drink'
    }

    return {
      [code]: [
        ...compact(data.cms.home?.translations).map((node) => ({
          id: data.cms.home?.id || undefined,
          languageCode: node.languages_code?.code || code,
          languagePrefix: node.languages_code?.prefix || '',
          title: 'Home',
          url: node.languages_code?.prefix
            ? `/${node.languages_code?.prefix}`
            : '/',
        })),
        ...(data.cms.rooms?.status === 'published'
          ? compact(data.cms.rooms.translations)
              .filter((t) => t.languages_code?.code === code)
              .map((node) => ({
                id: data.cms.rooms?.id || undefined,
                languageCode: node.languages_code?.code || code,
                title: node?.title,
                url: `${
                  node.languages_code?.prefix
                    ? `/${node.languages_code?.prefix}`
                    : ''
                }/${node.slug}`,
              }))
          : []),
        ...(data.cms.services?.status === 'published'
          ? compact(data.cms.services.translations)
              .filter((t) => t.languages_code?.code === code)
              .map((node) => ({
                id: data.cms.services?.id || undefined,
                languageCode: node.languages_code?.code || code,
                title: node?.title,
                url: `${
                  node.languages_code?.prefix
                    ? `/${node.languages_code?.prefix}`
                    : ''
                }/${node.slug}`,
              }))
          : []),
        ...(data.cms.pool?.status === 'published'
          ? compact(data.cms.pool.translations)
              .filter((t) => t.languages_code?.code === code)
              .map((node) => ({
                id: data.cms.pool?.id || undefined,
                languageCode: node.languages_code?.code || code,
                title: node?.title,
                url: `${
                  node.languages_code?.prefix
                    ? `/${node.languages_code?.prefix}`
                    : ''
                }/${node.slug}`,
              }))
          : []),
        {
          title: restaurantsLabel,
          languageCode: code,
          childs: [
            ...(data.cms.lounge?.status === 'published'
              ? compact(data.cms.lounge.translations)
                  .filter((t) => t.languages_code?.code === code)
                  .map((node) => ({
                    id: data.cms.lounge?.id || undefined,
                    languageCode: node.languages_code?.code || code,
                    title: node?.title,
                    url: `${
                      node.languages_code?.prefix
                        ? `/${node.languages_code?.prefix}`
                        : ''
                    }/${node.slug}`,
                  }))
              : []),
            ...(data.cms.restaurant?.status === 'published'
              ? compact(data.cms.restaurant.translations)
                  .filter((t) => t.languages_code?.code === code)
                  .map((node) => ({
                    id: data.cms.restaurant?.id || undefined,
                    languageCode: node.languages_code?.code || code,
                    title: node?.title,
                    url: `${
                      node.languages_code?.prefix
                        ? `/${node.languages_code?.prefix}`
                        : ''
                    }/${node.slug}`,
                  }))
              : []),
          ],
        },
        {
          title: locationLabel,
          languageCode: code,
          childs: [
            ...(data.cms.location?.status === 'published'
              ? compact(data.cms.location.translations)
                  .filter((t) => t.languages_code?.code === code)
                  .map((node) => ({
                    id: data.cms.location?.id || undefined,
                    languageCode: node.languages_code?.code || code,
                    title: node?.title,
                    url: `${
                      node.languages_code?.prefix
                        ? `/${node.languages_code?.prefix}`
                        : ''
                    }/${node.slug}`,
                  }))
              : []),
            ...(data.cms.surroundings?.status === 'published'
              ? compact(data.cms.surroundings.translations)
                  .filter((t) => t.languages_code?.code === code)
                  .map((node) => ({
                    id: data.cms.surroundings?.id || undefined,
                    languageCode: node.languages_code?.code || code,
                    title: node?.title,
                    url: `${
                      node.languages_code?.prefix
                        ? `/${node.languages_code?.prefix}`
                        : ''
                    }/${node.slug}`,
                  }))
              : []),
          ],
        },
        ...(data.cms.offers?.status === 'published'
          ? compact(data.cms.offers.translations)
              .filter((t) => t.languages_code?.code === code)
              .map((node) => ({
                id: data.cms.offers?.id || undefined,
                languageCode: node.languages_code?.code || code,
                title: node?.title,
                url: `${
                  node.languages_code?.prefix
                    ? `/${node.languages_code?.prefix}`
                    : ''
                }/${node.slug}`,
              }))
          : []),
        ...(data.cms.gallery?.status === 'published'
          ? compact(data.cms.gallery.translations)
              .filter((t) => t.languages_code?.code === code)
              .map((node) => ({
                id: data.cms.gallery?.id || undefined,
                languageCode: node.languages_code?.code || code,
                title: node?.title,
                url: `${
                  node.languages_code?.prefix
                    ? `/${node.languages_code?.prefix}`
                    : ''
                }/${node.slug}`,
              }))
          : []),
        ...(data.cms.contacts?.status === 'published'
          ? compact(data.cms.contacts.translations)
              .filter((t) => t.languages_code?.code === code)
              .map((node) => ({
                id: data.cms.contacts?.id || undefined,
                languageCode: node.languages_code?.code || code,
                title: node?.title,
                url: `${
                  node.languages_code?.prefix
                    ? `/${node.languages_code?.prefix}`
                    : ''
                }/${node.slug}`,
              }))
          : []),
      ],
    }
  })

  return {
    menuItems,
    siteName,
  }
}

export default headerProps
