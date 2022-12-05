import { css, SerializedStyles } from '@emotion/react'

import { ContainerSettings } from './index'

export const justifyContent = ({
  dial = 1,
  row,
  reverse,
  space,
}: ContainerSettings): SerializedStyles => {
  const value =
    space === 'around'
      ? 'space-around'
      : space === 'between'
      ? 'space-between'
      : space === 'evenly'
      ? 'space-evenly'
      : row
      ? dial % 3 === 0
        ? reverse
          ? 'flex-start'
          : 'flex-end'
        : dial % 3 === 2
        ? 'center'
        : reverse
        ? 'flex-end'
        : 'flex-start'
      : dial > 6
      ? reverse
        ? 'flex-start'
        : 'flex-end'
      : dial > 3
      ? 'center'
      : reverse
      ? 'flex-end'
      : 'flex-start'

  return css`
    justify-content: ${value};
  `
}
