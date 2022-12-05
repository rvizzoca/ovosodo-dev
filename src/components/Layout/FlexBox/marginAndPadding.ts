import { css, SerializedStyles } from '@emotion/react'

import { ContainerSettings, CSSDimension, ShorthandCSSDimensions } from '.'

const toMeasure = (value: CSSDimension) =>
  `${value}${typeof value === 'number' ? 'px' : ''}`

export const marginAndPadding = ({
  margin,
  padding,
}: ContainerSettings): SerializedStyles => {
  let marginTop: string
  let marginBottom: string
  let marginRight: string
  let marginLeft: string
  let paddingTop: string
  let paddingBottom: string
  let paddingLeft: string
  let paddingRight: string

  if (isArrayShorthandCSSDimensions(margin)) {
    switch (margin.length) {
      case 1:
        marginTop =
          marginBottom =
          marginLeft =
          marginRight =
            toMeasure(margin[0])
        break
      case 2:
        marginTop = marginBottom = toMeasure(margin[0])
        marginLeft = marginRight = toMeasure(margin[1])
        break
      case 3:
        marginTop = toMeasure(margin[0])
        marginLeft = marginRight = toMeasure(margin[1])
        marginBottom = toMeasure(margin[2])
        break
      case 4:
        marginTop = toMeasure(margin[0])
        marginRight = toMeasure(margin[1])
        marginBottom = toMeasure(margin[2])
        marginLeft = toMeasure(margin[3])
        break
    }
  } else {
    marginTop = marginBottom = marginLeft = marginRight = toMeasure(margin || 0)
  }

  if (isArrayShorthandCSSDimensions(padding)) {
    switch (padding.length) {
      case 1:
        paddingTop =
          paddingBottom =
          paddingLeft =
          paddingRight =
            toMeasure(padding[0])
        break
      case 2:
        paddingTop = paddingBottom = toMeasure(padding[0])
        paddingLeft = paddingRight = toMeasure(padding[1])
        break
      case 3:
        paddingTop = toMeasure(padding[0])
        paddingLeft = paddingRight = toMeasure(padding[1])
        paddingBottom = toMeasure(padding[2])
        break
      case 4:
        paddingTop = toMeasure(padding[0])
        paddingRight = toMeasure(padding[1])
        paddingBottom = toMeasure(padding[2])
        paddingLeft = toMeasure(padding[3])
        break
    }
  } else {
    paddingTop =
      paddingBottom =
      paddingLeft =
      paddingRight =
        toMeasure(padding || 0)
  }

  return css`
    margin-top: ${marginTop};
    margin-bottom: ${marginBottom};
    margin-left: ${marginLeft};
    margin-right: ${marginRight};
    padding-top: ${paddingTop};
    padding-bottom: ${paddingBottom};
    padding-left: ${paddingLeft};
    padding-right: ${paddingRight};
  `
}

const isArrayShorthandCSSDimensions = (
  t?: ShorthandCSSDimensions,
): t is Exclude<ShorthandCSSDimensions, CSSDimension> => Array.isArray(t)
