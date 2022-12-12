import 'keen-slider/keen-slider.min.css'

import styled from '@emotion/styled'
import { Image, Props as ImageProps } from 'app/components/Common/Image'
import { FlexBox } from 'app/components/Layout/FlexBox'
import React, { memo } from 'react'

interface ServicesProps {
  description?: string
  image?: ImageProps
  title?: string
}

export interface Props {
  services?: ServicesProps[]
}

export const Services = memo(function Services({ services }: Props) {
  if (!services) {
    return null
  }

  if (services.length < 1) {
    return null
  }

  return (
    <Wrapper>
      <Container>
        {services ? (
          <ServicesList>
            {services.map((item, index) => (
              <Service key={index}>
                {item.image ? <Image {...item.image} /> : null}
                {item.title ? <Title>{item.title}</Title> : null}
                {item.description ? (
                  <Description>{item.description}</Description>
                ) : null}
              </Service>
            ))}
          </ServicesList>
        ) : null}
      </Container>
    </Wrapper>
  )
})

const Wrapper = styled.div`
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1310px) {
    max-width: calc(100% - 60px);
  }

  @media screen and (max-width: 768px) {
    max-width: calc(100% - 40px);
  }
`

const Container = styled(FlexBox)`
  padding: 6rem 0;
`

const ServicesList = styled.div``

const Service = styled.div``

const Title = styled.h3``

const Description = styled.div``
