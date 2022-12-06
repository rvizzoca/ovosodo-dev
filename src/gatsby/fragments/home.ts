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
        video_file {
          id
          filename_download
          file {
            publicURL
          }
        }
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
        slides_list {
          slide_id {
            image {
              id
              title
              filename_download
              file {
                childImageSharp {
                  gatsbyImageData(layout: FIXED, height: 700)
                }
              }
            }
            translations {
              languages_code {
                code
                prefix
              }
              title
            }
          }
        }
      }
    }
  }
`
