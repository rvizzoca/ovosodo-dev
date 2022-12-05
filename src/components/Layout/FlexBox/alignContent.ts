import { css, SerializedStyles } from '@emotion/react'

import { ContainerSettings } from '.'

export const alignContent = ({
  align = 'start',
  stretch,
}: ContainerSettings): SerializedStyles => {
  const value = stretch
    ? 'stretch'
    : align === 'start'
    ? 'flex-start'
    : align === 'end'
    ? 'flex-end'
    : align
  return css`
    align-content: ${value};
  `
}
