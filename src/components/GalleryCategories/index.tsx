import styled from '@emotion/styled'
import { Close } from 'app/components/Common/Close'
import { Image, Props as ImageProps } from 'app/components/Common/Image'
import { FlexBox } from 'app/components/Layout/FlexBox'
import useLockedBody from 'app/utils/useLockedBody'
import { useVocabularyData } from 'app/utils/vocabulary'
import { uniqBy } from 'lodash'
import React, { memo, useEffect, useState } from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

import { Filter } from './Filter'
import { Gallery } from './Gallery'

export interface CategoryProps {
  thumbnails?: ImageProps[]
  title: string
}

export interface Props {
  categories: CategoryProps[]
  languageCode: string
}

export const GalleryCategories = memo(function GalleryCategories({
  categories,
  languageCode,
}: Props) {
  if (!categories) {
    return null
  }

  const [_locked, setLocked] = useLockedBody()
  const [filteredCategory, setFilteredCategory] = useState('all')
  const [modalGalleryStatus, setModalGalleryStatus] = useState(false)
  const [clickedSlide, setClickedSlide] = useState<any>(null)

  let counter = 0
  let images: any = []

  const categoriesImages = categories.map((item: any) =>
    item.images.map((e: any) => images.push(e)),
  )

  useEffect(() => {
    if (modalGalleryStatus) {
      document.addEventListener('keydown', function (e) {
        switch (e.keyCode) {
          case 27:
            setLocked(false)
            setModalGalleryStatus(false)
            setClickedSlide(0)
            break
        }
      })
    }
  }, [modalGalleryStatus])

  return (
    <Container>
      {categories.length > 1 ? (
        <Filters dial={5} row wrap>
          <Filter
            active={filteredCategory === 'all'}
            category="all"
            title="Tutte"
            onClick={() => {
              setFilteredCategory('all')
            }}
          />
          {uniqBy(categories, 'title').map((item, index) => {
            const category = item.title
              .replace(/[^a-zA-Z]/g, '')
              .toLocaleLowerCase()

            return category ? (
              <Filter
                active={filteredCategory === category}
                category={category}
                key={index}
                onClick={(e) => {
                  setFilteredCategory(e.target.getAttribute('data-category'))
                }}
                title={item.title}
              />
            ) : undefined
          })}
        </Filters>
      ) : null}

      <Categories row wrap>
        {uniqBy(categories, 'title').map((list) => {
          const category = list.title
            .replace(/[^a-zA-Z]/g, '')
            .toLocaleLowerCase()

          if (!list.thumbnails) {
            return null
          }

          return (
            <>
              <Category>{list.title}</Category>

              {list.thumbnails.map((item, index) => {
                counter = counter + 1

                return (
                  <Thumb
                    className={
                      filteredCategory === category ||
                      filteredCategory === 'all'
                        ? 'visible'
                        : undefined
                    }
                    data-counter={counter}
                    key={index}
                    onClick={(e) => {
                      if (!modalGalleryStatus) {
                        setLocked(true)
                        setModalGalleryStatus(true)
                      } else {
                        setLocked(false)
                        setModalGalleryStatus(false)
                      }

                      const realClickedSlide =
                        Number(e.currentTarget.getAttribute('data-counter')) - 1

                      setClickedSlide(realClickedSlide)
                      setTimeout(() => {
                        setClickedSlide(null)
                      }, 100)
                    }}
                  >
                    <LazyLoadComponent>
                      <Image {...item} />
                    </LazyLoadComponent>
                  </Thumb>
                )
              })}
            </>
          )
        })}
      </Categories>

      <Modal className={modalGalleryStatus ? ' open' : undefined}>
        <Close
          onClick={() => {
            setLocked(false)
            setModalGalleryStatus(false)
            setClickedSlide(0)
          }}
        />
        <Gallery
          clickedSlide={clickedSlide}
          images={images}
          isOpen={modalGalleryStatus}
        />
      </Modal>
    </Container>
  )
})

const Container = styled.section`
  background: ${({ theme }) => theme.colors.variants.neutralDark1};
  color: ${({ theme }) => theme.colors.variants.neutralDark2};
  padding: 12.5rem 6.111vw 7.5rem;
  text-align: center;

  @media (max-width: 1199px) {
    padding: 9.375rem 1.5rem 6.25rem;
  }
`

const Filters = styled(FlexBox)`
  margin-top: 7.5rem;

  @media (max-width: 1023px) {
    display: none;
  }
`

const Categories = styled(FlexBox)`
  margin: 2.875rem -1.5rem 0 0;

  @media (max-width: 1199px) {
    margin: 0 -0.75rem 0 0;
  }
`

const Category = styled.div`
  display: none;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.variants.neutralDark2};
  font-family: ${({ theme }) => theme.fontFamily.default};
  font-size: 1.25rem;
  line-height: 1.5rem;
  margin: 3.75rem 0 0.75rem;
  position: relative;

  @media (max-width: 1199px) {
    display: flex;
  }
`

const Thumb = styled.div`
  display: none;
  width: calc(33.333% - 1.5rem);
  cursor: pointer;
  margin: 1.5rem 1.5rem 0 0;
  overflow: hidden;
  padding-bottom: 25%;
  position: relative;
  &:hover {
    img {
      transform: scale(1.05);
    }
  }
  &.visible {
    display: block;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out !important;
  }

  @media (max-width: 1199px) {
    width: calc(50% - 0.75rem);
    margin: 0.75rem 0.75rem 0 0;
    padding-bottom: calc(50% - 0.75rem);
  }
`

const Modal = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  visibility: hidden;
  z-index: -1;
  transition: 0.15s ease-out;
  &.open {
    opacity: 1;
    visibility: visible;
    z-index: 9999;
  }
`
