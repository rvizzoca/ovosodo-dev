import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React, { memo } from 'react'

export interface Props {
  code: string
  currentPrefix?: string
  pageID?: string
  languagePrefix: string | null
  URL: string
}

export const LanguageItem = memo(function LanguageItem({
  code,
  currentPrefix,
  languagePrefix,
  URL,
}: Props) {
  return (
    <Anchor
      className={currentPrefix === languagePrefix ? 'active' : undefined}
      to={URL}
    >
      {code}
    </Anchor>
  )
})

const Anchor = styled(Link)`
  color: ${({ theme }) => theme.colors.variants.neutralLight5};
  font-family: ${({ theme }) => theme.fontFamily.paragraph};
  font-size: 0.8125rem;
  line-height: 1rem;
  opacity: 0.4;
  margin-left: 1.25rem;
  text-transform: uppercase;
  &:first-of-type {
    margin-left: 0;
  }
  &.active {
    cursor: default;
    opacity: 1;
    pointer-events: none;
  }

  @media (max-width: 1199px) {
    color: ${({ theme }) => theme.colors.variants.neutralDark2};
  }
`
