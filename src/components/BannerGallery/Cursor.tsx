import styled from '@emotion/styled'
import { ChevronRight } from 'app/components/Icons'
import { FlexBox } from 'app/components/Layout/FlexBox'
import React, { memo, useEffect, useState } from 'react'

const SUPPORTED_CURSORS = [false, 'pointer', 'right', 'left']

export interface Props {
  container?: any
  gallery?: any
  isModal?: boolean
  onClick?: any
  thumbs?: any
}

export const Cursor = memo(function Cursor({
  container,
  isModal,
  gallery,
  thumbs,
}: Props) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursor, setCursor] = useState(false)

  const onMouseMove = (e: any) => {
    const { pageX: x, pageY: y, clientY: yy } = e

    if (container.current) {
      setMousePosition({
        x: x - 60,
        y: (isModal ? yy : y - container.current?.offsetTop) - 60,
      })
    }
  }

  const onCursor = (cursorType: any) => {
    cursorType = (SUPPORTED_CURSORS.includes(cursorType) && cursorType) || false

    setCursor(cursorType)
  }

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [container])

  return (
    <>
      <Icon
        className={`${!!cursor ? 'active' : ''}${cursor ? ` ${cursor}` : ''}`}
        dial={5}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      >
        <ChevronRight />
      </Icon>

      {['right', 'left'].map((side, index) => (
        <Side
          className={side}
          key={index}
          onClick={(e: any) =>
            e.stopPropagation() || side === 'left'
              ? [gallery?.current?.prev(), thumbs?.current?.prev()]
              : [gallery?.current?.next(), thumbs?.current?.next()]
          }
          onMouseEnter={() => onCursor(side)}
          onMouseLeave={onCursor}
        />
      ))}
    </>
  )
})

const Icon = styled(FlexBox)`
  width: 7.5rem;
  height: 7.5rem;
  background: ${({ theme }) => theme.colors.variants.neutralLight5};
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  transform: scale(0);
  transition: 0.3s transform ease-in-out, 0.3s opacity ease-in-out;
  z-index: 3;
  &.active {
    opacity: 1;
    transform: scale(1);
  }
  &.left {
    svg {
      transform: scaleX(-1);
    }
  }

  svg {
    width: auto;
    height: 2.0625rem;
    fill: none;
    stroke: ${({ theme }) => theme.colors.variants.neutralDark5};
  }

  @media (max-width: 1199px) {
    display: none;
  }
`

const Side = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 3;
  &.right {
    right: 0;
  }
  &.left {
    left: 0;
  }

  @media (max-width: 1199px) {
    display: none;
  }
`
