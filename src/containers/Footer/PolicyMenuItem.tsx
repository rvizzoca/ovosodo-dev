import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { theme } from 'app/theme/index'
import { Link } from 'gatsby'
import React, { memo } from 'react'

export interface Props {
  className?: string
  id?: string
  title: string
  languageCode?: string
  URL: string
}

export const PolicyMenuItem = memo(function PolicyMenuItem({
  className,
  title,
  URL,
}: Props) {
  if (!title) {
    return null
  }

  return (
    <Container>
      {URL ? (
        <Anchor className={className} to={URL} activeClassName="active">
          {title}
        </Anchor>
      ) : (
        <NoLink>{title}</NoLink>
      )}
    </Container>
  )
})

const Container = styled.div``

const Style = css`
  color: ${theme.colors.variants.neutralLight5};
  font-family: ${theme.fontFamily.paragraph};
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.875rem;
  margin: 0 0.9375rem;
  &.active {
    pointer-events: none;
  }
  &:hover {
    text-decoration: underline;
  }
`

const Anchor = styled(Link)`
  ${Style}
`

const NoLink = styled.div`
  ${Style}
`
