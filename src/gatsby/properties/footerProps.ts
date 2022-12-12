// @ts-nocheck

import { Props as FooterProps } from 'app/containers/Footer'
import { compact } from 'lodash'

function footerProps(data: any): FooterProps {
  const siteName = data.site?.siteMetadata?.title || undefined

  const policyMenu = compact(data.cms.languages).map((language) => {
    const code = language.code || 'it-IT'

    return {
      [code]: [
        ...compact(
          compact(data.cms.policy)
            .sort((a, b) => (a.sort ? a.sort : 1) - (b.sort ? b.sort : 1))
            .map((nodes) =>
              nodes.status === 'published'
                ? compact(nodes.translations)
                    .filter((t) => t.languages_code?.code === code)
                    .map((node) => ({
                      id: nodes.id || undefined,
                      languageCode: node?.languages_code?.code || code,
                      languagePrefix: node?.languages_code?.prefix || '',
                      title: node?.title,
                      URL: `${
                        node.languages_code?.prefix
                          ? `/${node.languages_code?.prefix}`
                          : ''
                      }/${node.slug}`,
                    }))[0]
                : null,
            ),
        ),
      ],
    }
  })

  return {
    policyMenu,
    siteName,
  }
}

export default footerProps
