import styled from '@emotion/styled'
import { Button } from 'app/components/Common/Button'
import { FlexBox } from 'app/components/Layout/FlexBox'
import { useVocabularyData } from 'app/utils/vocabulary'
import React, { memo, useLayoutEffect, useState } from 'react'

import text from './text.json'

type Contents = typeof text['it']
const validLanguageCodes = Object.keys(text)

export default memo(function Error404() {
  const [contents, setContents] = useState<Contents>(text.en)

  useLayoutEffect(() => {
    const language =
      (window.navigator as any).userLanguage || window.navigator.language
    const languageCode = language.substring(0, 2).toLowerCase()

    if (validLanguageCodes.includes(languageCode)) {
      setContents(text[languageCode as 'it'])
    }
  }, [])

  return (
    <Container>
      <Wrapper>
        <Logo src="/logo.svg" width="254" height="60" alt="Hotel Conca Park" />
        <Title>{contents.title}</Title>
        <Text>{contents.text}</Text>
        <CTA
          label={useVocabularyData('back-to-home', contents.code)}
          URL={`/${contents.prefix}`}
          variant="outline"
        />
      </Wrapper>
    </Container>
  )
})

const Container = styled(FlexBox)`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.variants.neutralDark3};
  position: fixed;
  top: 0;
  left: 0;
`

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.variants.neutralLight5};
  position: absolute;
  top: 50%;
  right: 1.5rem;
  left: 1.5rem;
  text-align: center;
  transform: translateY(-50%);
`

const Logo = styled.img`
  margin-bottom: 3.125rem;

  @media (max-width: 1199px) {
    width: auto;
    height: 3.75rem;
    margin-bottom: 2.5rem;
  }
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.heading};
  font-size: 6.25rem;
  font-weight: 400;
  line-height: 7.75rem;

  @media (max-width: 1199px) {
    font-size: 4.375rem;
    line-height: 4.625rem;
  }

  @media (max-width: 374px) {
    font-size: 2.5rem;
    line-height: 2.8125rem;
  }
`

const Text = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.paragraph};
  font-size: 1.0625rem;
  font-weight: 300;
  line-height: 2.125rem;
  margin-top: 2.5rem;

  @media (max-width: 1199px) {
    font-size: 1.125rem;
    line-height: 2.125rem;
    margin-top: 1.875rem;
  }
`

const CTA = styled(Button)`
  margin-top: 3.75rem;
`
