/* eslint-disable @typescript-eslint/ban-ts-comment */
import {Calendar, toCalendar} from '@internationalized/date'
import {CalendarState, DateValue, HookData, RangeCalendarState} from '../types'

export const hookData = new WeakMap<
  CalendarState | RangeCalendarState,
  HookData
>()

export function isInvalid(
  date: DateValue,
  minValue: DateValue,
  maxValue: DateValue,
) {
  return (
    (minValue != null && date.compare(minValue) < 0) ||
    (maxValue != null && date.compare(maxValue) > 0)
  )
}

export function convertValue(
  value: DateValue,
  calendar: Calendar,
): DateValue | undefined | null {
  if (value === null) {
    return null
  }

  if (!value) {
    return undefined
  }

  return toCalendar(value, calendar)
}

export function commonPrefixLength(strings: string[]): number {
  // Sort the strings, and compare the characters in the first and last to find the common prefix.
  strings.sort()
  const first = strings[0]
  const last = strings[strings.length - 1]
  // @ts-ignore
  for (let i = 0; i < first.length; i++) {
    // @ts-ignore
    if (first[i] !== last[i]) {
      return i
    }
  }
  return 0
}
