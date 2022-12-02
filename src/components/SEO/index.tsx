import React, { memo } from 'react'
import { Helmet } from 'react-helmet'

export const SEO = memo(function SEO() {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'it',
        }}
      />
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="preload"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Helmet>
        <title>Ovosodo</title>
        <meta property="og:title" content="Ovosodo" />
        <meta name="twitter:title" content="Ovosodo" />
      </Helmet>

      <Helmet>
        <meta name="description" content="Ovosodo Dev" />
        <meta property="og:description" content="Ovosodo Dev" />
        <meta name="twitter:description" content="Ovosodo Dev" />
      </Helmet>
    </>
  )
})
