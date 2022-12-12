import { Props as StructuredDataProps } from 'app/components/StructuredData'

function structuredDataProps(data: any): StructuredDataProps {
  const company = data.cms.company

  const address = company?.address
  const aggregateRatingValue =
    company?.rich_snippet_aggregate_rating_value || undefined
  const aggregateBestRating =
    company?.rich_snippet_aggregate_best_rating || undefined
  const aggregateRatingCount =
    company?.rich_snippet_aggregate_rating_count || undefined
  const country = company?.country
  const facebookURL = company?.facebook || undefined
  const googleMapsURL = company?.google_maps_url || undefined
  const latidude = company?.latitude
  const longitude = company?.longitude
  const locality = company?.locality
  const numberOfRooms = company?.rich_snippet_number_of_rooms || undefined
  const petsAllowed = company?.rich_snippet_pets_allowed || undefined
  const mainPhone = company?.main_phone
  const postalCode = company?.postal_code
  const priceRange = company?.rich_snippet_price_range || undefined
  const region = company?.region
  const siteImage = data.cms.home?.hero_images?.map(
    (image: any) =>
      image?.directus_files_id?.file?.childImageSharp?.gatsbyImageData.images
        .fallback.src,
  )[0]
  const siteName = data.site?.siteMetadata?.title
  const siteURL = data.site?.siteMetadata?.siteUrl

  return {
    address,
    aggregateRatingValue,
    aggregateBestRating,
    aggregateRatingCount,
    country,
    facebookURL,
    googleMapsURL,
    latidude,
    longitude,
    locality,
    numberOfRooms,
    petsAllowed,
    mainPhone,
    postalCode,
    priceRange,
    region,
    siteImage,
    siteName,
    siteURL,
  }
}

export default structuredDataProps
