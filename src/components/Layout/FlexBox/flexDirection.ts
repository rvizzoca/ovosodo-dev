import { css, SerializedStyles } from '@emotion/react'

import { ContainerSettings } from './index'

export const flexDirection = ({
  row,
  reverse,
}: ContainerSettings): SerializedStyles => {
  return row
    ? css`
        flex-direction: ${reverse ? 'row-reverse' : 'row'};
      `
    : css`
        flex-direction: ${reverse ? 'column-reverse' : 'column'};
      `
}
