import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import React, { memo } from 'react'
import { isSafari } from 'react-device-detect'

export interface Props {
  alt?: string
  animationStart?: boolean
  className?: string
  decoding?: 'auto' | 'async'
  height?: number
  media?: string
  sources?: string
  src?: string
  srcSet?: string
  width?: number
}

export const Image = memo(function Image({
  alt,
  animationStart = true,
  className,
  decoding,
  height,
  media,
  sources,
  src,
  srcSet,
  width,
}: Props) {
  return (
    <Picture className={className}>
      <Source srcSet={sources} media={media || undefined} type="image/webp" />
      <Img
        alt={alt}
        decoding={decoding}
        height={height}
        src={src}
        srcSet={srcSet}
        width={width}
        initial={
          !isSafari ? { filter: 'blur(8px)', opacity: 0 } : { opacity: 0 }
        }
        animate={
          animationStart
            ? {
                filter: 'blur(0)',
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.2,
                },
              }
            : {}
        }
      />
    </Picture>
  )
})

const Picture = styled.picture``

const Source = styled.source``

const Img = styled(motion.img)`
  will-change: filter;
`
