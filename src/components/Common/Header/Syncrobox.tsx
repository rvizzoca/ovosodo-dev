import '../../../theme/datepicker.css'

import styled from '@emotion/styled'
import { Wave } from 'app/components/Icons'
import { FlexBox } from 'app/components/Layout/FlexBox'
import { theme } from 'app/theme'
import { useVocabularyData } from 'app/utils/vocabulary'
import { de, enUS, it } from 'date-fns/esm/locale'
import { rgba } from 'emotion-rgba'
import { compact } from 'lodash'
import React, { memo, useEffect, useRef, useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import NumericInput from 'react-numeric-input'

import { Benefits } from './Benefits'

registerLocale('de', de)
registerLocale('en', enUS)
registerLocale('it', it)

const DATE_OPTIONS = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
} as any

export interface Props {
  benefits?: any
  languageCode: string
  languagePrefix: string
  modalStatus?: boolean
}

export const Syncrobox = memo(function Syncrobox({
  benefits,
  languageCode,
  languagePrefix,
  modalStatus,
}: Props) {
  const benefitsTranslation = benefits?.translations?.find(
    (t: any) => t?.languages_code?.code === languageCode,
  )

  const benefitsTitle = benefitsTranslation?.title || undefined

  const benefitsList = compact(benefitsTranslation?.list).map(
    (i: any) => i.label,
  )

  /*
   * Form data
   */
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState<any>(
    new Date(new Date().setDate(startDate.getDate() + 1)),
  )

  const guestsWrap = useRef(null)
  const [guestsWrapStatus, setGuestsWrapStatus] = useState(false)

  const [guestsTotal, setGuestsTotal] = useState('')
  const [adultsValue, setAdultsValue] = useState(2)
  const [baby02Value, setBaby02Value] = useState(0)

  const adultsLabel = useVocabularyData('adults', languageCode)
  const baby02Label = useVocabularyData('baby02', languageCode)

  const handleClickOutside = (e: any) => {
    // @ts-ignore
    if (guestsWrap.current && !guestsWrap.current.contains(e.target)) {
      setGuestsWrapStatus(false)
    } else {
      if (guestsWrapStatus && e.target.classList.contains('guests-button')) {
        setGuestsWrapStatus(false)
      } else {
        setGuestsWrapStatus(true)
      }
    }
  }

  useEffect(() => {
    const adults = adultsValue > 0 ? `${adultsValue} ${adultsLabel}` : ''
    const baby02 = baby02Value > 0 ? `, ${baby02Value} ${baby02Label}` : ''

    setGuestsTotal(`${adults}${baby02}`)

    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [guestsWrapStatus, adultsValue, baby02Value])

  return (
    <Container>
      <Head className={modalStatus ? 'visible' : undefined}>
        <Wave />

        <Title>{useVocabularyData('be-title', languageCode)}</Title>
      </Head>

      <Form
        action="https://booking.hotelkennedy.org/book/simple/step1"
        target="_blank"
      >
        <input type="hidden" name="hotel" value={44656} />
        <input type="hidden" name="lang" value={languagePrefix} />

        <Wrapper dial={5} row>
          <Field className="picker-field">
            <Label>{useVocabularyData('check-in', languageCode)}</Label>
            <Picker>
              {startDate?.toLocaleDateString(languageCode, DATE_OPTIONS)}
            </Picker>
            <DatePicker
              autoComplete="off"
              dateFormat="dd/MM/yyyy"
              disabledKeyboardNavigation={true}
              locale={languagePrefix || 'it'}
              onChange={(date) => {
                if (date) {
                  setStartDate(date)
                  setEndDate(undefined)
                }
              }}
              onFocus={(e) => (e.target.readOnly = true)}
              minDate={new Date()}
              name="checkin"
              selected={startDate}
            />
          </Field>
          <Field className="picker-field">
            <Label>{useVocabularyData('check-out', languageCode)}</Label>
            <Picker>
              {endDate?.toLocaleDateString(languageCode, DATE_OPTIONS)}
            </Picker>
            <DatePicker
              autoComplete="off"
              dateFormat="dd/MM/yyyy"
              disabledKeyboardNavigation={true}
              locale={languagePrefix || 'it'}
              onChange={(date) => {
                if (date) {
                  setEndDate(date)
                }
              }}
              onFocus={(e) => (e.target.readOnly = true)}
              placeholderText={useVocabularyData('departure', languageCode)}
              minDate={new Date(startDate?.getTime() + 1 * 24 * 60 * 60 * 1000)}
              name="checkout"
              selected={endDate}
            />
          </Field>
          <Guests ref={guestsWrap}>
            <Field>
              <Label>{useVocabularyData('guests', languageCode)}</Label>
              <GuestsValue
                className={`guests-button${guestsWrapStatus ? ' open' : ''}`}
              >
                {guestsTotal}
              </GuestsValue>
            </Field>
            <GuestsWrap
              className={guestsWrapStatus ? 'open' : undefined}
              row
              space="between"
              wrap
            >
              <Field>
                <GuestLabel>{adultsLabel}</GuestLabel>
                <NumericInput
                  name="guesttypes[0][20884]"
                  min={1}
                  max={5}
                  style={false}
                  value={adultsValue}
                  onChange={(num: any) => {
                    setAdultsValue(num)
                  }}
                />
              </Field>
              <Field>
                <GuestLabel>{baby02Label}</GuestLabel>
                <NumericInput
                  name="guesttypes[0][20954]"
                  min={0}
                  max={5}
                  style={false}
                  value={baby02Value}
                  onChange={(num: any) => {
                    setBaby02Value(num)
                  }}
                />
              </Field>
            </GuestsWrap>
          </Guests>
        </Wrapper>

        <Button>
          <Submit
            type="submit"
            name="search"
            value={useVocabularyData('check-availability', languageCode)}
          />
        </Button>
      </Form>

      {benefits ? (
        <Benefits
          list={benefitsList}
          modalStatus={modalStatus}
          title={benefitsTitle}
        />
      ) : null}
    </Container>
  )
})

const Container = styled.div`
  width: calc(100% - 5rem);
  height: 100%;
  background: ${({ theme }) => theme.colors.variants.neutralLight1};
  padding: 6.25rem 0;
  text-align: center;
`

const Head = styled.div`
  opacity: 0;
  transform: translateY(-2.5rem);
  transition: 0.6s ease-in-out;
  &.visible {
    opacity: 1;
    transform: none;
  }

  > svg {
    width: 3.75rem;
    height: auto;
    fill: ${({ theme }) => theme.colors.variants.primaryDark};
  }
`

const Title = styled.div`
  max-width: 36.25rem;
  color: ${({ theme }) => theme.colors.variants.neutralLight5};
  font-family: ${({ theme }) => theme.fontFamily.heading};
  font-size: 3.125rem;
  line-height: 4.25rem;
  margin: auto;
`

const Form = styled.form`
  margin: 5.3125rem auto 0;
`

const Wrapper = styled(FlexBox)`
  text-align: left;

  .react-datepicker {
    font-family: ${({ theme }) => theme.fontFamily.paragraph};
    background-color: ${({ theme }) => theme.colors.variants.primaryDark};
    color: ${({ theme }) => theme.colors.variants.neutralLight4};
  }

  .react-datepicker__current-month {
    font-family: ${({ theme }) => theme.fontFamily.heading};
  }

  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day:hover,
  .react-datepicker__day--selected {
    background-color: ${({ theme }) => theme.colors.variants.secondaryLight};
    color: ${({ theme }) => theme.colors.variants.neutralLight4};
  }

  .react-datepicker__day:focus {
    background-color: ${({ theme }) =>
      theme.colors.variants.secondaryLight} !important;
    color: ${({ theme }) => theme.colors.variants.neutralLight4} !important;
  }

  .react-datepicker__day--today {
    &:after {
      background: ${({ theme }) => theme.colors.variants.secondaryLight};
    }
  }

  .react-datepicker__day--disabled {
    color: ${({ theme }) => theme.colors.variants.neutralLight4} !important;
    opacity: 0.3;
  }

  .react-datepicker-wrapper {
    width: 100%;
    height: 2.5625rem;
    position: absolute;
    bottom: 0.125rem;
    left: 0;
    input {
      width: 100%;
      background-position: calc(100% - 5rem) center;
      font-size: 0;
    }
  }

  .react-numeric-input {
    display: flex;
    align-items: center;
    margin-left: auto;
    position: relative;
    input {
      width: 2.5rem;
      caret-color: transparent;
      font-family: ${({ theme }) => theme.fontFamily.paragraph};
      font-size: 1.375rem;
      font-weight: 500;
      line-height: 1.5rem;
      margin-left: auto;
      pointer-events: none;
    }
    b {
      width: 1.875rem;
      height: 1.875rem;
      border: 0.125rem solid ${rgba(theme.colors.variants.neutralLight4, 0.2)};
      border-radius: 50%;
      cursor: pointer;
      position: relative;
      text-align: center;
      transition: 0.1s ease-out;
      &:hover {
        border-color: ${({ theme }) => theme.colors.variants.neutralLight4};
      }
      &:before,
      &:after {
        content: '';
        background: ${({ theme }) => theme.colors.variants.neutralLight4};
        position: absolute;
      }
      &:nth-of-type(1) {
        &:before {
          width: 0.875rem;
          height: 0.125rem;
          top: 0.75rem;
          left: 0.375rem;
        }
        &:after {
          width: 0.125rem;
          height: 0.875rem;
          top: 0.375rem;
          left: 0.75rem;
        }
      }
      &:last-of-type {
        margin-left: 0.375rem;
        &:before {
          width: 0.875rem;
          height: 0.125rem;
          top: 0.75rem;
          left: 0.375rem;
        }
      }
    }
  }
`

const Field = styled.div`
  color: ${({ theme }) => theme.colors.variants.neutralLight4};
  font-family: ${({ theme }) => theme.fontFamily.heading};
  position: relative;
  &.picker-field {
    min-height: 5.125rem;
    margin-right: 5rem;
    padding-right: 10rem;
    &:after {
      content: '';
      width: 0.0625rem;
      height: 100%;
      background: ${({ theme }) => theme.colors.variants.neutralLight5};
      opacity: 0.2;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`

const Picker = styled.div`
  font-size: 1.875rem;
  line-height: 2.5625rem;
  text-transform: capitalize;
`

const Guests = styled.div`
  position: relative;
`

const GuestsValue = styled.div`
  min-width: 9.375rem;
  max-width: 15.625rem;
  cursor: pointer;
  background: url('/chevron-down.svg') no-repeat right center;
  font-size: 1.875rem;
  line-height: 2.5625rem;
  overflow: hidden;
  padding-right: 2.5rem;
  text-overflow: ellipsis;
  text-transform: lowercase;
  white-space: nowrap;
  &.open {
    background-image: url('/chevron-up.svg');
  }
`

const GuestsWrap = styled(FlexBox)`
  min-width: 18.75rem;
  background: ${({ theme }) => theme.colors.variants.primaryDark};
  opacity: 0;
  padding-bottom: 1.5rem;
  position: absolute;
  top: calc(100% + 1rem);
  left: 0;
  text-align: left;
  visibility: hidden;
  z-index: -1;
  &.open {
    opacity: 1;
    visibility: visible;
    z-index: 3;
  }
  > div {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 1.5rem;
    padding: 0 1.5rem;
  }
`

const GuestLabel = styled.div`
  font-size: 0.875rem;
  letter-spacing: 0.0531rem;
  line-height: 1.375rem;
`

const Label = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.paragraph};
  font-size: 0.875rem;
  letter-spacing: 0.0875rem;
  line-height: 1.0625rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`

const Button = styled.div`
  display: inline-block;
  margin: 5.3125rem auto 0;
  position: relative;
  &:hover {
    &:before {
      right: 0;
    }
  }
  &:before {
    content: '';
    height: 100%;
    background: ${({ theme }) => theme.colors.variants.primaryDark};
    position: absolute;
    top: 0;
    right: 50%;
    left: 0;
    transition: 0.3s ease-in-out;
  }
`

const Submit = styled.input`
  font-family: ${({ theme }) => theme.fontFamily.heading};
  height: 3.125rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.variants.neutralLight5};
  font-size: 1.0625rem;
  letter-spacing: 0.0531rem;
  line-height: 1.4375rem;
  padding: 0 2.25rem;
  position: relative;
  z-index: 2;
  text-align: center;
`
