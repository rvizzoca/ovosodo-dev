import { css, SerializedStyles } from '@emotion/react'

import { ContainerSettings } from './index'

export const flex = ({
  inline,
  wrap,
}: ContainerSettings): SerializedStyles => css`
  display: ${inline ? 'inline-flex' : 'flex'};
  flex-wrap: ${wrap
    ? wrap === 'reverse'
      ? 'wrap-reverse'
      : 'wrap'
    : 'nowrap'};
`
