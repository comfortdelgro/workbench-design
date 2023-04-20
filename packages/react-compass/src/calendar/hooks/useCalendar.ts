/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/dot-notation */
import {useRef} from 'react'
import {CalendarProps} from '../calendar'
import {
  AriaLabelingProps,
  CalendarCellAria,
  CalendarState,
  DOMProps,
  RangeCalendarState,
} from '../types'
import {filterDOMProps, hookData} from '../utils'
import {useLabels} from './useLabels'
import {useVisibleRangeDescription} from './useVisibleRangeDescription'

export function useCalendar(
  props: CalendarProps & DOMProps & AriaLabelingProps,
  state: CalendarState | RangeCalendarState,
): CalendarCellAria {
  const domProps = filterDOMProps(props)

  const title = useVisibleRangeDescription(
    state.visibleRange.start,
    state.timeZone,
  )
  const visibleRangeDescription = useVisibleRangeDescription(
    state.visibleRange.end,
    state.timeZone,
  )

  // Pass the label to the child grid elements.
  hookData.set(state, {
    // @ts-ignore
    ariaLabel: props['aria-label'],
    // @ts-ignore
    ariaLabelledBy: props['aria-labelledby'],
    errorMessageId: '',
    selectedDateDescription: '',
  })

  // If the next or previous buttons become disabled while they are focused, move focus to the calendar body.
  const nextFocused = useRef(false)
  // @ts-ignore
  const nextDisabled = props.isDisabled || state.isNextVisibleRangeInvalid()
  if (nextDisabled && nextFocused.current) {
    nextFocused.current = false
    state.setFocused(true)
  }

  const previousFocused = useRef(false)
  const previousDisabled =
    // @ts-ignore
    props.isDisabled || state.isPreviousVisibleRangeInvalid()
  if (previousDisabled && previousFocused.current) {
    previousFocused.current = false
    state.setFocused(true)
  }

  // @ts-ignore
  const labelProps = useLabels({
    id: props['id'],
    'aria-label': [props['aria-label'], visibleRangeDescription]
      .filter(Boolean)
      .join(', '),
    'aria-labelledby': props['aria-labelledby'],
  })

  return {
    // @ts-ignore
    calendarProps: {
      ...domProps,
      ...labelProps,
      role: 'group',
      'aria-describedby': props['aria-describedby'] || undefined,
    },
    nextButtonProps: {
      onPress: () => state.focusNextPage(),
      'aria-label': 'Next',
      isDisabled: nextDisabled,
      onFocus: () => (nextFocused.current = true),
      onBlur: () => (nextFocused.current = false),
    },
    prevButtonProps: {
      onPress: () => state.focusPreviousPage(),
      'aria-label': 'Previous',
      isDisabled: previousDisabled,
      onFocus: () => (previousFocused.current = true),
      onBlur: () => (previousFocused.current = false),
    },
    title,
  }
}
