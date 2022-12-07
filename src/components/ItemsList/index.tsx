import 'react-accessible-accordion/dist/fancy-example.css'

import styled from '@emotion/styled'
import { FlexBox } from 'app/components/Layout/FlexBox'
import React, { memo } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion'

export interface Props {
  items?: string[]
}

export const ItemsList = memo(function ItemsList({ items }: Props) {
  return (
    <Wrapper>
      <Container row dial={5}>
        {items ? (
          <StyledAccordion allowZeroExpanded>
            {items.map((item: any, index) => (
              <AccordionItem key={index}>
                <AccordionItemHeading>
                  {item.title ? (
                    <AccordionItemButton>{item.title}</AccordionItemButton>
                  ) : null}
                </AccordionItemHeading>
                {item.text ? (
                  <AccordionItemPanel>{item.text}</AccordionItemPanel>
                ) : null}
              </AccordionItem>
            ))}
          </StyledAccordion>
        ) : null}
      </Container>
    </Wrapper>
  )
})

const Wrapper = styled.div`
  max-width: 78.125rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 81.875rem) {
    max-width: calc(100% - 3.75rem);
  }

  @media screen and (max-width: 48rem) {
    max-width: calc(100% - 2.5rem);
  }
`

const Container = styled(FlexBox)`
  padding-bottom: 5rem;
`

const StyledAccordion = styled(Accordion)`
  width: 100%;
`
