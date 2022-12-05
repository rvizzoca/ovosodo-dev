import styled from '@emotion/styled'
import React from 'react'

import { alignContent } from './alignContent'
import { alignItems } from './alignItems'
import { flex } from './flex'
import { flexDirection } from './flexDirection'
import { justifyContent } from './justifyContent'
import { marginAndPadding } from './marginAndPadding'

export type Props<Tag extends FlexBoxTag | undefined = 'div'> =
  FlexBoxProps<Tag> &
    React.HTMLAttributes<
      Tag extends 'div'
        ? HTMLDivElement
        : Tag extends 'section'
        ? HTMLDivElement
        : Tag extends undefined
        ? HTMLDivElement
        : Tag extends 'span'
        ? HTMLSpanElement
        : HTMLButtonElement
    >

export interface FlexBoxProps<Tag extends FlexBoxTag | undefined = 'div'> {
  /**
   * Control the `align-content` css prop. Is ignored if `stretch` is true.
   */
  align?: 'start' | 'end' | 'center' | 'space-between' | 'space-around'

  /**
   * Set childrens'position according to the position of the `dial` number on a phone dial pad:
   *
   * ||
   * |---|---|---|
   * | 1 | 2 | 3 |
   * | 4 | 5 | 6 |
   * | 7 | 8 | 9 |
   *
   * Defaults to `1`
   */
  dial?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

  inline?: boolean

  margin?: ShorthandCSSDimensions

  padding?: ShorthandCSSDimensions

  /**
   * Reverse the column or row direction.
   */
  reverse?: boolean

  /**
   * Use flexbox row disposition instead of column (which is the default).
   */
  row?: boolean

  /**
   * Control the `justify-content` css prop.
   */
  space?: 'around' | 'between' | 'evenly'

  stretch?: boolean

  /**
   * The HTML tag to use as container.
   */
  tag?: Tag

  /**
   * Control the wrapping of flexbox contents
   */
  wrap?: boolean | 'reverse'
}

export const FlexBox = React.forwardRef<
  HTMLDivElement | HTMLSpanElement | HTMLButtonElement,
  Props<FlexBoxTag | undefined>
>(
  (
    {
      align = 'start',
      dial = 1,
      inline = false,
      margin = 0,
      padding = 0,
      reverse = false,
      row = false,
      space = undefined,
      stretch = false,
      tag = 'div',
      wrap = false,
      ...rest
    },
    ref,
  ) => {
    return (
      <FlexBoxContainer
        {...(rest as React.HTMLAttributes<HTMLDivElement>)}
        ref={ref as React.RefObject<HTMLDivElement>}
        as={tag}
        settings={{
          align,
          dial,
          inline,
          margin,
          padding,
          reverse,
          row,
          space,
          stretch,
          wrap,
        }}
      />
    )
  },
)

FlexBox.displayName = 'FlexBox'

const FlexBoxContainer = styled.div<{
  settings: ContainerSettings
  as: 'div' | 'section' | 'span' | 'button'
}>`
  position: relative;
  ${({ settings }) => flex(settings)}
  ${({ settings }) => alignItems(settings)}
  ${({ settings }) => alignContent(settings)}
  ${({ settings }) => flexDirection(settings)}
  ${({ settings }) => justifyContent(settings)}
  ${({ settings }) => marginAndPadding(settings)}
`

export type ContainerSettings = Pick<
  FlexBoxProps<FlexBoxTag>,
  | 'align'
  | 'dial'
  | 'inline'
  | 'margin'
  | 'padding'
  | 'reverse'
  | 'row'
  | 'space'
  | 'stretch'
  | 'wrap'
>

/**
 * Mimics css notation in representing margin or padding values for an element.
 *
 * Examples:
 *
 * - 20 *(becomes 20px)*
 * - 2em
 * - ['2em'] *(equivalent to the above value)*
 * - [20, '1em']
 * - [10, 30, 20]
 * - [10, 30, 20, 0]
 */
export type ShorthandCSSDimensions =
  | CSSDimension
  | [CSSDimension]
  | [CSSDimension, CSSDimension]
  | [CSSDimension, CSSDimension, CSSDimension]
  | [CSSDimension, CSSDimension, CSSDimension, CSSDimension]

export type CSSDimension = number | string

export type FlexBoxTag = 'div' | 'section' | 'span' | 'button'
