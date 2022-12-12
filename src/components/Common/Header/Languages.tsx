import styled from '@emotion/styled'
import { FlexBox } from 'app/components/Layout/FlexBox'
import { theme } from 'app/theme'
import { rgba } from 'emotion-rgba'
import React, { memo } from 'react'

import { LanguageItem, Props as LanguageItemProps } from './LanguageItem'

export interface Props {
  isSticky?: boolean
  languagesList: LanguageItemProps[]
  languagePrefix: string
}

export const Languages = memo(function Languages({
  isSticky,
  languagesList,
  languagePrefix,
}: Props) {
  return (
    <Container className={isSticky ? 'is-sticky' : undefined} dial={3} row>
      {languagesList
        .sort((a: any, b: any) => a.sort - b.sort)
        .map((item, index) => (
          <LanguageItem currentPrefix={languagePrefix} key={index} {...item} />
        ))}
    </Container>
  )
})

const Container = styled(FlexBox)`
  margin-right: 3.75rem;
  &.is-sticky {
    a {
      color: ${({ theme }) => theme.colors.variants.neutralDark2};
    }
  }

  @media (max-width: 1199px) {
    margin-right: 1.875rem;
  }
`
