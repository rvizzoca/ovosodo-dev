import { graphql } from 'gatsby'

export const roomFragments = graphql`
  fragment RoomQuery on CMSData {
    room {
      id
      images {
        directus_files_id {
          id
          title
          file {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
              original {
                width
                height
              }
            }
          }
        }
      }
    }
  }
`
