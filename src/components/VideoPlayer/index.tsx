import styled from '@emotion/styled'
import { FlexBox } from 'app/components/Layout/FlexBox'
import React, { memo, useState } from 'react'

export interface Props {
  video: string
}

export const VideoPlayer = memo(function VideoPlayer({ video }: Props) {
  const [videoPlayback, setvideoPlayback] = useState(false)

  return (
    <Container row dial={5}>
      <Laptop>
        <Video
          src={video}
          onClick={(e: any) => {
            if (videoPlayback) {
              e.target.pause()
              setvideoPlayback(false)
            } else {
              e.target.play()
              setvideoPlayback(true)
            }
          }}
        />
        <PlayButton
          className={videoPlayback ? 'hidden' : undefined}
          src="./play_button.svg"
        />
      </Laptop>
    </Container>
  )
})

const Container = styled(FlexBox)`
  padding: 5rem 0;
`

const Laptop = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 41.875rem;
  max-height: 24rem;
  aspect-ratio: 670/384;
  background-image: url('./laptop-video-black.png');
  background-size: contain;
  background-repeat: no-repeat;
  padding: 0.9375rem 5.3125rem;

  @media (max-width: 41.875rem) {
    padding: 2.3% 12.5%;
  }
`

const Video = styled.video`
  width: 100%;
  max-width: 31.25rem;
  aspect-ratio: 500/ 320;
  cursor: pointer;
`

const PlayButton = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 45%;
  height: 45%;
  pointer-events: none;

  &.hidden {
    display: none;
  }
`
