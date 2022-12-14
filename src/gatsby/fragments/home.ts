import { graphql } from 'gatsby'

export const homeFragments = graphql`
  fragment HomeQuery on CMSData {
    home {
      id
      categories_list {
        gallery_categories_id {
          images {
            directus_files_id {
              id
              title
              file {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                  thumbnails: gatsbyImageData(layout: FIXED, height: 400)
                  original {
                    width
                    height
                  }
                }
              }
            }
          }
          translations {
            languages_code {
              code
            }
            title
          }
        }
      }
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
        test_list
      }
    }
  }
`
