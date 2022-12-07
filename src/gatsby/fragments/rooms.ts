import { graphql } from 'gatsby'

export const roomsFragments = graphql`
  fragment RoomsQuery on CMSData {
    rooms {
      id
      translations {
        languages_code {
          code
          prefix
          sort
        }
        metatag_title
        metatag_description
        services_list {
          service_id {
            image {
              id
              title
              filename_download
              file {
                childImageSharp {
                  gatsbyImageData(layout: FIXED, height: 520)
                }
              }
            }
            translations {
              languages_code {
                code
                prefix
              }
              title
              description
            }
          }
        }
      }
    }
  }
`
