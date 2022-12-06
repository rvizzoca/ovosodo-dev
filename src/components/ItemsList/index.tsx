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

interface ItemProps {
  title?: string
  text?: string
}

export interface Props {
  items?: ItemProps[]
}

export const ItemsList = memo(function ItemsList({ items }: Props) {
  return (
    <Wrapper>
      <Container row dial={5}>
        {items ? (
          <StyledAccordion allowZeroExpanded>
            {items.map((item, index) => (
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
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1310px) {
    max-width: calc(100% - 60px);
  }

  @media screen and (max-width: 768px) {
    max-width: calc(100% - 40px);
  }
`

const Container = styled(FlexBox)`
  padding-bottom: 5rem;
`
const StyledAccordion = styled(Accordion)`
  width: 100%;
`
