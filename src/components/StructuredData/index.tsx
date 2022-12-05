import { memo, useEffect } from 'react'

export interface Props {
  address: string
  aggregateRatingValue?: string
  aggregateBestRating?: string
  aggregateRatingCount?: string
  country: string
  facebookURL?: string
  googleMapsURL?: string
  languageCode?: string
  latidude: string
  longitude: string
  locality: string
  numberOfRooms?: number
  petsAllowed?: boolean
  mainPhone: string
  postalCode: string
  priceRange?: string
  region: string
  siteImage: string
  siteName: string
  siteURL: string
}

export const StructuredData = memo(function StructuredData({
  address,
  aggregateRatingValue,
  aggregateBestRating,
  aggregateRatingCount,
  country,
  facebookURL,
  googleMapsURL,
  languageCode,
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
}: Props) {
  useEffect(() => {
    const script = document.createElement('script')
    script.async = true
    script.setAttribute('type', 'application/ld+json')

    script.innerHTML = `
    {
      "@context": "http://schema.org",
      "@type": "Hotel",
      "@id": "${siteURL}",
      ${priceRange ? `"priceRange": "${priceRange}",` : ''}
      ${petsAllowed ? `"petsAllowed": true,` : ''}
      ${numberOfRooms ? `"numberOfRooms": ${numberOfRooms},` : ''}
      ${
        aggregateRatingValue
          ? `"aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": ${aggregateRatingValue},
        "bestRating": ${aggregateBestRating},
        "ratingCount": ${aggregateRatingCount}
      },`
          : ''
      }
      "image": "${siteURL}${siteImage}",
      ${googleMapsURL ? `"hasMap": "${googleMapsURL}",` : ''}
      "name": "${siteName}",
      "url": "${siteURL}",
      ${facebookURL ? `"sameAs": ["${facebookURL}"],` : ''}
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "${locality}",
        "addressRegion": "${region}",
        "postalCode": "${postalCode}",
        "streetAddress": "${address}",
        "addressCountry": "${country}"
      },
      "telephone": "${mainPhone}",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": ${latidude || 0},
        "longitude": ${longitude || 0}
      },
      "potentialAction": {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "${siteURL}",
          "inLanguage": "${languageCode ? languageCode : 'it-IT'}",
          "actionPlatform": [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/IOSPlatform",
            "http://schema.org/AndroidPlatform"
          ]
        },
        "result": {
          "@type": "LodgingReservation",
          "name": "Book Room"
        }
      }
    }
    `

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return null
})
