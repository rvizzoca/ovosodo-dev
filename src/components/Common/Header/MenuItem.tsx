import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { FlexBox } from 'app/components/Layout/FlexBox'
import { theme } from 'app/theme/index'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'gatsby'
import React, { memo, useEffect, useState } from 'react'

export interface Props {
  childs?: ChildsProps[]
  className?: string
  id?: string
  title: string
  languageCode?: string
  languagePrefix?: string | null
  modalStatus?: boolean
  url: string
}

interface ChildsProps {
  className?: string
  id?: string
  modalStatus?: boolean
  title: string
  url: string
}

export const MenuItem = memo(function MenuItem({
  childs,
  className,
  modalStatus,
  title,
  url,
}: Props) {
  if (!title) {
    return null
  }

  const [submenuVisibility, setSubmenuVisibility] = useState(false)

  useEffect(() => {
    setSubmenuVisibility(false)
  }, [])

  return (
    <>
      {url ? (
        <Anchor className={className} to={url} activeClassName="active">
          {title}
        </Anchor>
      ) : (
        <NoLink
          dial={4}
          className={submenuVisibility ? 'open' : undefined}
          inline
          onClick={() =>
            submenuVisibility
              ? setSubmenuVisibility(false)
              : setSubmenuVisibility(true)
          }
          row
          tag="span"
        >
          {title}
        </NoLink>
      )}

      {childs && childs.length > 0 ? (
        <AnimatePresence>
          {submenuVisibility && (
            <Submenu
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: 'auto',
              }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {childs
                .sort((a: any, b: any) => a.weight - b.weight)
                .map((item, index) => (
                  <ChildItem key={index} modalStatus={modalStatus} {...item} />
                ))}
            </Submenu>
          )}
        </AnimatePresence>
      ) : null}
    </>
  )
})

export const ChildItem = memo(function ChildItem({ title, url }: ChildsProps) {
  return (
    <SubmenuLi>
      <Anchor to={url} activeClassName="active">
        <Inner>{title}</Inner>
      </Anchor>
    </SubmenuLi>
  )
})

const Style = css`
  display: inline-block;
  color: ${theme.colors.variants.neutralLight5};
  font-family: ${theme.fontFamily.heading};
  font-size: 1.875rem;
  line-height: 2.5625rem;
  position: relative;
  &:after {
    content: '';
    height: 0.0625rem;
    background: ${theme.colors.variants.neutralLight5};
    position: absolute;
    bottom: 0;
    right: 100%;
    left: 0;
    transition: 0.3s ease-out;
  }
  &:hover {
    &:after {
      right: 0;
    }
  }
  &.active {
    color: ${theme.colors.variants.primaryDark};
    pointer-events: none;
    &:after {
      background: ${theme.colors.variants.primaryDark};
      right: 0;
    }
  }

  @media (max-width: 1199px) {
    font-size: 1.5rem;
    line-height: 2.25rem;
  }
`

const Anchor = styled(Link)`
  ${Style}
`

const Inner = styled.span`
  position: relative;
`

const NoLink = styled(FlexBox)`
  cursor: pointer;

  ${Style}

  @media (max-width: 1199px) {
    &:after {
      display: none;
    }
  }
`

const Submenu = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1199px) {
    display: block;
  }
`

const SubmenuLi = styled.li`
  display: inline-flex;
  align-items: center;
  margin-top: 0.625rem !important;
  &:after {
    content: '/';
    color: ${({ theme }) => theme.colors.variants.neutralLight5};
    font-family: ${({ theme }) => theme.fontFamily.paragraph};
    font-size: 1.25rem;
    line-height: 2rem;
    margin: 0 0.5rem;
    opacity: 0.6;
    transform: translateY(0.0625rem);
  }
  &:last-of-type {
    &:after {
      display: none;
    }
  }

  a {
    font-family: ${({ theme }) => theme.fontFamily.paragraph};
    font-size: 1.0625rem;
    line-height: 2.125rem;
    opacity: 0.6;
    &:after {
      display: none;
    }
    &:hover,
    &.active {
      color: ${theme.colors.variants.neutralLight5};
      opacity: 1;
    }
  }

  @media (max-width: 1199px) {
    display: block;
    margin-top: 0.25rem !important;
    &:after {
      display: none;
    }
  }
`
