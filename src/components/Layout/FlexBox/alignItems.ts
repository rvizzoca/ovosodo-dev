import { css, SerializedStyles } from '@emotion/react'

import { ContainerSettings } from '.'

export const alignItems = ({
  dial = 1,
  row,
  stretch,
}: ContainerSettings): SerializedStyles => {
  const value = stretch
    ? 'stretch'
    : row
    ? dial > 6
      ? 'flex-end'
      : dial > 3
      ? 'center'
      : 'flex-start'
    : dial % 3 === 0
    ? 'flex-end'
    : dial % 3 === 2
    ? 'center'
    : 'flex-start'

  return css`
    align-items: ${value};
  `
}
