import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { theme } from 'app/theme/index'
import { Link } from 'gatsby'
import React, { memo } from 'react'

export interface Props {
  label: string
  file?: string
  target?: string
  URL?: string
  onClick?: () => void
  className?: string
  noActions?: boolean
  rel?: string
  variant?: Variant
}

export const Button = memo(function Button({
  label = 'Button',
  file,
  target,
  URL,
  onClick,
  className,
  noActions,
  rel,
  variant = 'default',
}: Props) {
  const buttonClassName = `${className ? className : ''}`
  const buttonDOM = <Label>{label}</Label>
  const EXTERNAL_URL_REGEX = new RegExp('^(https?|ftp|www)://')
  const externalURL = URL && EXTERNAL_URL_REGEX.test(URL)

  return (
    <>
      {file ? (
        <Anchor
          className={buttonClassName}
          href={file}
          target="_blank"
          rel={rel}
          variant={variant}
        >
          {buttonDOM}
        </Anchor>
      ) : (
        <>
          {!externalURL ? (
            target === 'tel' || target === 'mailto' ? (
              <Anchor
                className={buttonClassName}
                href={`${target}:${URL}`}
                onClick={onClick}
                rel="noopener"
                variant={variant}
              >
                {buttonDOM}
              </Anchor>
            ) : onClick != undefined ? (
              <Static
                className={buttonClassName}
                onClick={onClick}
                variant={variant}
              >
                {buttonDOM}
              </Static>
            ) : noActions ? (
              <Static className={buttonClassName} variant={variant}>
                {buttonDOM}
              </Static>
            ) : (
              <ButtonItem
                to={URL ? URL : '#'}
                className={buttonClassName}
                variant={variant}
              >
                {buttonDOM}
              </ButtonItem>
            )
          ) : (
            <Anchor
              className={buttonClassName}
              href={URL}
              rel="noopener"
              target={target}
              variant={variant}
            >
              {buttonDOM}
            </Anchor>
          )}
        </>
      )}
    </>
  )
})

const Style = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 3.125rem;
  background: ${theme.colors.variants.neutralDark2};
  color: ${theme.colors.variants.neutralLight2};
  cursor: pointer;
  font-family: ${theme.fontFamily.default};
  font-size: 1.0625rem;
  letter-spacing: 0.0531rem;
  line-height: 1.5rem;
  padding: 0 2.3125rem;
  transition: 0.3s ease-in-out;
  &:hover {
    background: ${theme.colors.variants.neutralLight2};
    color: ${theme.colors.variants.neutralDark2};
  }
`

const Advanced = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 3.125rem;
  color: ${theme.colors.variants.neutralLight5};
  font-family: ${theme.fontFamily.heading};
  font-size: 1.0625rem;
  letter-spacing: 0.0531rem;
  line-height: 1.4375rem;
  padding: 0 2.25rem;
  position: relative;
  white-space: nowrap;
  &:before {
    content: '';
    height: 100%;
    background: ${theme.colors.variants.secondaryLight};
    position: absolute;
    top: 0;
    right: 50%;
    left: 0;
    transition: 0.3s ease-in-out;
  }

  &:hover {
    &:before {
      right: 0;
    }
  }
`

const Invert = css`
  ${Advanced}

  color: ${theme.colors.variants.neutralDark2};
  &:before {
    background: ${theme.colors.variants.neutralLight5};
  }
`

const Gray = css`
  ${Advanced}

  color: ${theme.colors.variants.neutralDark2};
  &:before {
    background: ${theme.colors.variants.neutralLight3};
  }
`

const Simple = css`
  display: inline-block;
  color: ${theme.colors.variants.neutralDark2};
  cursor: pointer;
  font-family: ${theme.fontFamily.heading};
  font-size: 1.0625rem;
  line-height: 1.4375rem;
  padding-bottom: 0.3125rem;
  position: relative;
  &:hover {
    &:after {
      right: 0;
    }
  }
  &:before,
  &:after {
    content: '';
    height: 0.0625rem;
    background: ${theme.colors.variants.neutralDark2};
    position: absolute;
    bottom: 0;
    left: 0;
    transition: 0.3s ease-in-out;
  }
  &:before {
    width: 100%;
    opacity: 0.15;
  }
  &:after {
    right: 100%;
  }

  @media (max-width: 1199px) {
    &:after {
      right: 0;
    }
  }
`

const Anchor = styled.a<ContainerProps>`
  ${({ variant }) => {
    switch (variant) {
      case 'default':
        return Style
      case 'advanced':
        return Advanced
      case 'invert':
        return Invert
      case 'gray':
        return Gray
      case 'simple':
        return Simple
    }
  }}
`

const Static = styled.div<ContainerProps>`
  ${({ variant }) => {
    switch (variant) {
      case 'default':
        return Style
      case 'advanced':
        return Advanced
      case 'invert':
        return Invert
      case 'gray':
        return Gray
      case 'simple':
        return Simple
    }
  }}
`

const ButtonItem = styled(Link)<ContainerProps>`
  ${({ variant }) => {
    switch (variant) {
      case 'default':
        return Style
      case 'advanced':
        return Advanced
      case 'invert':
        return Invert
      case 'gray':
        return Gray
      case 'simple':
        return Simple
    }
  }}
`

const Label = styled.span`
  position: relative;
`

interface ContainerProps {
  variant: Variant
}

export type Variant = 'default' | 'advanced' | 'invert' | 'gray' | 'simple'
