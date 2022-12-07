import { Props as ServicesProps } from 'app/components/Services'
import { CreatePagesQuery } from 'graphql-types'
import { compact } from 'lodash'

import { PageContext } from '.'

export interface Props {
  servicesProps: ServicesProps | undefined
}

export const getRoomsPageProps = (
  query: CreatePagesQuery,
  pageContext: PageContext,
): Props => {
  return {
    servicesProps: getServicesProps(query, pageContext),
  }
}

const getServicesProps = (
  query: CreatePagesQuery,
  pageContext: PageContext,
): ServicesProps | undefined => {
  const rooms = query.cms?.rooms

  if (!rooms) {
    return undefined
  }

  const translation = rooms.translations?.find(
    (t: any) => t?.languages_id?.code === pageContext.languageCode,
  )

  const services = compact(
    compact(translation?.services_list).map(({ service_id }) => {
      const imageObj = service_id?.image?.file?.childImageSharp?.gatsbyImageData
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

      const translation = service_id?.translations?.filter(
        (t) => t?.languages_code?.code === pageContext.languageCode,
      )[0]

      const description = translation?.description || undefined
      const title = translation?.title || undefined

      return {
        description,
        image,
        title,
      }
    }),
  )

  return {
    services,
  }
}
