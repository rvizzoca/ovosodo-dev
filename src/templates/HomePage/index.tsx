import styled from '@emotion/styled'
import { Intro } from 'app/components/Intro'
import { SEO } from 'app/components/SEO'
import React, { memo } from 'react'

export default memo(function HomePageTemplate() {
  return (
    <Container>
      <SEO />

      <Intro
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        label="Lorem ipsum dolor"
        title="Titolo"
      />
    </Container>
  )
})

const Container = styled.main``
