import { graphql } from 'gatsby'

export const homeFragments = graphql`
  fragment HomeQuery on CMSData {
    home {
      id
      translations {
        languages_id {
          code
          prefix
          sort
        }
        metatag_title
        metatag_description
        cards_list {
          card_id {
            icon {
              id
              filename_download
              file {
                publicURL
              }
            }
            translations {
              languages_code {
                code
                prefix
              }
              description
              title
            }
          }
        }
      }
    }
  }
`
