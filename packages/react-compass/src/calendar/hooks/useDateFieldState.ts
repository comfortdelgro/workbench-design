// Reference: https://github.com/adobe/react-spectrum/blob/98cad3f064c5302c04a1140d12a2cacc3ee921a2/packages/%40react-stately/datepicker/src/useDateFieldState.ts
/* eslint-disable prefer-const */
import {
  Calendar,
  CalendarDate,
  DateFormatter,
  getMinimumDayInMonth,
  getMinimumMonthInYear,
  GregorianCalendar,
  toCalendar,
} from '@internationalized/date'
import {useEffect, useMemo, useRef, useState} from 'react'
import {MIN_YEAR} from '../constants/common'
import {
  DatePickerProps,
  DateSegment,
  DateValue,
  FieldOptions,
  FormatterOptions,
  Granularity,
  SegmentType,
  ValidationState,
} from '../types'
import {
  convertValue,
  createPlaceholderDate,
  getFormatOptions,
  getPlaceholder,
  isInvalid,
} from '../utils'
import {useControlledState} from './useControlledState'
import {useDefaultProps} from './useDefaultProps'

export interface DateFieldState {
  /** The current field value. */
  value: DateValue
  /** The current value, converted to a native JavaScript `Date` object.  */
  dateValue: Date
  /** The calendar system currently in use. */
  calendar: Calendar
  /** Sets the field's value. */
  setValue(value: DateValue): void
  /** A list of segments for the current value. */
  segments: DateSegment[]
  /** A date formatter configured for the current locale and format. */
  dateFormatter: DateFormatter
  /** The current validation state of the date field, based on the `validationState`, `minValue`, and `maxValue` props. */
  validationState: ValidationState
  /** The granularity for the field, based on the `granularity` prop and current value. */
  granularity: Granularity
  /** The maximum date or time unit that is displayed in the field. */
  maxGranularity: 'year' | 'month' | Granularity
  /** Whether the field is disabled. */
  isDisabled: boolean
  /** Whether the field is read only. */
  isReadOnly: boolean
  /** Whether the field is required. */
  isRequired: boolean
  /** Increments the given segment. Upon reaching the minimum or maximum value, the value wraps around to the opposite limit. */
  increment(type: SegmentType): void
  /** Decrements the given segment. Upon reaching the minimum or maximum value, the value wraps around to the opposite limit. */
  decrement(type: SegmentType): void
  /**
   * Increments the given segment by a larger amount, rounding it to the nearest increment.
   * The amount to increment by depends on the field, for example 15 minutes, 7 days, and 5 years.
   * Upon reaching the minimum or maximum value, the value wraps around to the opposite limit.
   */
  incrementPage(type: SegmentType): void
  /**
   * Decrements the given segment by a larger amount, rounding it to the nearest increment.
   * The amount to decrement by depends on the field, for example 15 minutes, 7 days, and 5 years.
   * Upon reaching the minimum or maximum value, the value wraps around to the opposite limit.
   */
  decrementPage(type: SegmentType): void
  /** Sets the value of the given segment. */
  setSegment(type: 'era', value: string): void
  setSegment(type: SegmentType, value: number): void
  /** Updates the remaining unfilled segments with the placeholder value. */
  confirmPlaceholder(): void
  /** Clears the value of the given segment, reverting it to the placeholder. */
  clearSegment(type: SegmentType): void
  /** Formats the current date value using the given options. */
  formatValue(fieldOptions: FieldOptions): string
}

const EDITABLE_SEGMENTS = {
  year: true,
  month: true,
  day: true,
  hour: true,
  minute: true,
  second: true,
  dayPeriod: true,
  era: true,
}

const PAGE_STEP = {
  year: 5,
  month: 2,
  day: 7,
  hour: 2,
  minute: 15,
  second: 15,
}

const TYPE_MAPPING = {
  dayperiod: 'dayPeriod',
}

export interface DateFieldStateOptions<T extends DateValue = DateValue>
  extends DatePickerProps<T> {
  /**
   * The maximum unit to display in the date field.
   * @default 'year'
   */
  maxGranularity?: 'year' | 'month' | Granularity
  /** The locale to display and edit the value according to. */
  locale: string
  /**
   * A function that creates a [Calendar](../internationalized/date/Calendar.html)
   * object for a given calendar identifier. Such a function may be imported from the
   * `@internationalized/date` package, or manually implemented to include support for
   * only certain calendars.
   */
  createCalendar: (name: string) => Calendar
}

export function useDateFieldState<T extends DateValue = DateValue>(
  props: DateFieldStateOptions<T>,
): DateFieldState {
  const {
    locale,
    createCalendar,
    hideTimeZone,
    isDisabled,
    isReadOnly,
    isRequired,
  } = props

  const v: DateValue | undefined =
    props.value || props.defaultValue || props.placeholderValue

  const [granularity, defaultTimeZone] = useDefaultProps(v!, props.granularity!)

  const timeZone = defaultTimeZone || 'UTC'

  if (v && !(granularity in v)) {
    throw new Error(
      'Invalid granularity ' + granularity + ' for value ' + v.toString(),
    )
  }

  const defaultFormatter = useMemo(() => new DateFormatter(locale), [locale])
  const calendar = useMemo(
    () => createCalendar(defaultFormatter.resolvedOptions().calendar),
    [createCalendar, defaultFormatter],
  )
  const onChange = (date: DateValue | null) => {
    if (!props.onChange) {
      return
    }
    if (date?.year && date.year < MIN_YEAR) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
      //@ts-ignore
      props.onChange(null)
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
      //@ts-ignore
      props.onChange(date)
    }
  }

  const [value, setDate] = useControlledState<DateValue | null>(
    props.value,
    props.defaultValue,
    onChange as () => void,
  )

  const calendarValue = useMemo(
    () => convertValue(value!, calendar),
    [value, calendar],
  )

  const [placeholderDate, setPlaceholderDate] = useState(() =>
    createPlaceholderDate(
      props.placeholderValue!,
      granularity,
      calendar,
      defaultTimeZone,
    ),
  )

  const val = calendarValue || placeholderDate
  const showEra = calendar.identifier === 'gregory' && val?.era === 'BC'
  const formatOpts = useMemo(
    () => ({
      granularity,
      maxGranularity: props.maxGranularity ?? 'year',
      timeZone: defaultTimeZone,
      hideTimeZone,
      hourCycle: props.hourCycle,
      showEra,
    }),
    [
      props.maxGranularity,
      granularity,
      props.hourCycle,
      defaultTimeZone,
      hideTimeZone,
      showEra,
    ],
  )
  const [isValidFake, setValidFake] = useState(false)

  const opts = useMemo(
    () => getFormatOptions({}, formatOpts as FormatterOptions),
    [formatOpts],
  )

  const dateFormatter = useMemo(
    () => new DateFormatter(locale, opts),
    [locale, opts],
  )

  const resolvedOptions = useMemo(
    () => dateFormatter.resolvedOptions(),
    [dateFormatter],
  )

  const allSegments: Partial<typeof EDITABLE_SEGMENTS> = useMemo(
    () =>
      dateFormatter
        .formatToParts(new Date())
        .filter(
          (seg) =>
            EDITABLE_SEGMENTS[seg.type as keyof typeof EDITABLE_SEGMENTS],
        )
        .reduce(
          (p, seg) => ((p[seg.type as keyof typeof p] = true as never), p),
          {},
        ),
    [dateFormatter],
  )

  let [validSegments, setValidSegments] = useState<
    Partial<typeof EDITABLE_SEGMENTS>
  >(() => (props.value || props.defaultValue ? {...allSegments} : {}))

  const lastCalendarIdentifier = useRef(calendar.identifier)
  useEffect(() => {
    if (calendar.identifier !== lastCalendarIdentifier.current) {
      lastCalendarIdentifier.current = calendar.identifier
      setPlaceholderDate((placeholder) =>
        Object.keys(validSegments).length > 0
          ? toCalendar(placeholder!, calendar)
          : createPlaceholderDate(
              props.placeholderValue!,
              granularity,
              calendar,
              defaultTimeZone,
            ),
      )
    }
  }, [
    calendar,
    granularity,
    validSegments,
    defaultTimeZone,
    props.placeholderValue,
  ])

  if (
    value &&
    Object.keys(validSegments).length < Object.keys(allSegments).length
  ) {
    validSegments = {...allSegments}
    setValidSegments(validSegments)
  }

  if (
    value == null &&
    Object.keys(validSegments).length === Object.keys(allSegments).length &&
    !isValidFake
  ) {
    validSegments = {}
    setValidSegments(validSegments)
    setPlaceholderDate(
      createPlaceholderDate(
        props.placeholderValue!,
        granularity,
        calendar,
        defaultTimeZone,
      ),
    )
  }

  let displayValue =
    calendarValue &&
    Object.keys(validSegments).length >= Object.keys(allSegments).length
      ? calendarValue
      : placeholderDate

  let setValue = (newValue: DateValue) => {
    if (props.isDisabled || props.isReadOnly) {
      return
    }

    if (Object.keys(validSegments).length >= Object.keys(allSegments).length) {
      // The display calendar should not have any effect on the emitted value.
      // Emit dates in the same calendar as the original value, if any, otherwise gregorian.
      newValue = toCalendar(newValue, v?.calendar || new GregorianCalendar())
      setDate(newValue)
    } else {
      setPlaceholderDate(newValue)
    }
  }

  const dateValue = useMemo(
    () => displayValue?.toDate(timeZone),
    [displayValue, timeZone],
  )

  let segments = useMemo(
    () =>
      dateFormatter.formatToParts(dateValue!).map((segment) => {
        let isEditable =
          EDITABLE_SEGMENTS[segment.type as keyof typeof EDITABLE_SEGMENTS]
        if (segment.type === 'era' && calendar.getEras().length === 1) {
          isEditable = false
        }

        let isPlaceholder =
          EDITABLE_SEGMENTS[segment.type as keyof typeof EDITABLE_SEGMENTS] &&
          !validSegments[segment.type as keyof typeof validSegments]
        let placeholder = EDITABLE_SEGMENTS[
          segment.type as keyof typeof EDITABLE_SEGMENTS
        ]
          ? getPlaceholder(segment.type, segment.value)
          : null

        if (segment.type === 'year') {
          isPlaceholder = isValidFake ? false : isPlaceholder
        }
        return {
          type:
            TYPE_MAPPING[segment.type as keyof typeof TYPE_MAPPING] ||
            segment.type,
          text: isPlaceholder ? placeholder : segment.value,
          ...getSegmentLimits(
            displayValue!,
            segment.type,
            resolvedOptions as Intl.ResolvedDateTimeFormatOptions,
          ),
          isPlaceholder,
          placeholder,
          isEditable,
        } as DateSegment
      }),
    [
      dateValue,
      validSegments,
      dateFormatter,
      resolvedOptions,
      displayValue,
      calendar,
      locale,
    ],
  )

  if (allSegments.era && validSegments.year && !validSegments.era) {
    validSegments.era = true
    setValidSegments({...validSegments})
  } else if (!allSegments.era && validSegments.era) {
    delete validSegments.era
    setValidSegments({...validSegments})
  }

  const markValid = (part: Intl.DateTimeFormatPartTypes) => {
    validSegments[part as keyof typeof validSegments] = true
    if (part === 'year' && allSegments.era) {
      validSegments.era = true
    }
    setValidSegments({...validSegments})
  }

  const markInvalid = (part: Intl.DateTimeFormatPartTypes) => {
    validSegments[part as keyof typeof validSegments] = false
    setValidSegments({...validSegments})
  }

  const adjustSegment = (
    type: Intl.DateTimeFormatPartTypes,
    amount: number,
  ) => {
    if (!validSegments[type as keyof typeof validSegments]) {
      markValid(type)
      if (
        Object.keys(validSegments).length >= Object.keys(allSegments).length
      ) {
        setValue(displayValue!)
      }
    } else {
      setValue(
        addSegment(
          displayValue!,
          type,
          amount,
          resolvedOptions as Intl.ResolvedDateTimeFormatOptions,
        )!,
      )
    }
  }

  function checkValidSegments() {
    const validSegmentValues = Object.values(validSegments)
    const allSegmentValues = Object.values(allSegments)
    if (validSegmentValues.length === 0 && !isRequired) {
      return true
    }
    // if valid segment object is missing attributes -> the missing one is the invalid
    if (validSegmentValues.length !== allSegmentValues.length) {
      return false
    }
    // if all segment is false -> return true because it is in default form
    // if all segment is true -> return true because the form is filled
    if (
      (validSegmentValues.every((value) => !value) && !isRequired) ||
      validSegmentValues.every((value) => value)
    ) {
      return true
    }
    return false
  }

  const validateState = (): ValidationState => {
    if (
      props.validationState ||
      (isInvalid(calendarValue!, props.minValue!, props.maxValue!)
        ? 'invalid'
        : null) ||
      (!value && placeholderDate?.year && placeholderDate.year < MIN_YEAR) ||
      !checkValidSegments()
    ) {
      return 'invalid'
    } else {
      return 'valid'
    }
  }

  const validationState: ValidationState = validateState()

  return {
    value: calendarValue!,
    dateValue: dateValue!,
    calendar,
    setValue,
    segments,
    dateFormatter,
    validationState: validationState,
    granularity,
    maxGranularity: props.maxGranularity ?? 'year',
    isDisabled: !!isDisabled,
    isReadOnly: !!isReadOnly,
    isRequired: !!isRequired,
    increment(part) {
      adjustSegment(part, 1)
    },
    decrement(part) {
      adjustSegment(part, -1)
    },
    incrementPage(part) {
      adjustSegment(part, PAGE_STEP[part as keyof typeof PAGE_STEP] || 1)
    },
    decrementPage(part) {
      adjustSegment(part, -(PAGE_STEP[part as keyof typeof PAGE_STEP] || 1))
    },
    setSegment(part, v) {
      if (part === 'year' && (v as number) < MIN_YEAR) {
        markInvalid(part)
        setValidFake(true)
        setPlaceholderDate(
          new CalendarDate(
            v as number,
            displayValue?.month ?? 0,
            displayValue?.day ?? 0,
          ),
        )
      } else if (part === 'year' && (v as number) >= MIN_YEAR) {
        setValidFake(false)
        markValid(part)
      } else {
        markValid(part)
      }
      setValue(
        setSegment(
          displayValue!,
          part,
          parseInt(v as string),
          resolvedOptions as Intl.ResolvedDateTimeFormatOptions,
        )!,
      )
    },
    confirmPlaceholder() {
      if (props.isDisabled || props.isReadOnly) {
        return
      }
      let validKeys = Object.keys(validSegments)
      let allKeys = Object.keys(allSegments)
      if (
        validKeys.length === allKeys.length - 1 &&
        allSegments.dayPeriod &&
        !validSegments.dayPeriod
      ) {
        validSegments = {...allSegments}
        setValidSegments(validSegments)
        // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
        setValue(displayValue?.copy() as DateValue)
      }
    },
    clearSegment(part) {
      setValidFake(false)
      delete validSegments[part as keyof typeof validSegments]
      setValidSegments({...validSegments})

      let placeholder = createPlaceholderDate(
        props.placeholderValue!,
        granularity,
        calendar,
        defaultTimeZone,
      )
      let value = displayValue

      // Reset day period to default without changing the hour.
      if (
        part === 'dayPeriod' &&
        'hour' in displayValue! &&
        'hour' in placeholder!
      ) {
        let isPM = displayValue.hour >= 12
        let shouldBePM = placeholder.hour >= 12
        if (isPM && !shouldBePM) {
          value = displayValue.set({hour: displayValue.hour - 12})
        } else if (!isPM && shouldBePM) {
          value = displayValue.set({hour: displayValue.hour + 12})
        }
      } else if (part in displayValue!) {
        value = displayValue?.set({
          [part]: placeholder?.[part as keyof typeof placeholder],
        })
      }
      setDate(null)
      setValue(value!)
    },
    formatValue(fieldOptions: FieldOptions) {
      if (!calendarValue) {
        return ''
      }

      const formatOptions = getFormatOptions(
        fieldOptions,
        formatOpts as FormatterOptions,
      )

      const formatter = new DateFormatter(locale, formatOptions)

      return formatter.format(dateValue!)
    },
  }
}

function getSegmentLimits(
  date: DateValue,
  type: string,
  options: Intl.ResolvedDateTimeFormatOptions,
) {
  switch (type) {
    case 'era': {
      let eras = date.calendar.getEras()
      return {
        value: eras.indexOf(date.era),
        minValue: 0,
        maxValue: eras.length - 1,
      }
    }
    case 'year':
      return {
        value: date.year,
        minValue: MIN_YEAR,
        maxValue: date.calendar.getYearsInEra(date),
      }
    case 'month':
      return {
        value: date.month,
        minValue: getMinimumMonthInYear(date),
        maxValue: date.calendar.getMonthsInYear(date),
      }
    case 'day':
      return {
        value: date.day,
        minValue: getMinimumDayInMonth(date),
        maxValue: date.calendar.getDaysInMonth(date),
      }
  }

  if ('hour' in date) {
    switch (type) {
      case 'dayPeriod':
        return {
          value: date.hour >= 12 ? 12 : 0,
          minValue: 0,
          maxValue: 12,
        }
      case 'hour':
        if (options.hour12) {
          let isPM = date.hour >= 12
          return {
            value: date.hour,
            minValue: isPM ? 12 : 0,
            maxValue: isPM ? 23 : 11,
          }
        }

        return {
          value: date.hour,
          minValue: 0,
          maxValue: 23,
        }
      case 'minute':
        return {
          value: date.minute,
          minValue: 0,
          maxValue: 59,
        }
      case 'second':
        return {
          value: date.second,
          minValue: 0,
          maxValue: 59,
        }
    }
  }

  return {}
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
function addSegment(
  value: DateValue,
  part: string,
  amount: number,
  options: Intl.ResolvedDateTimeFormatOptions,
) {
  switch (part) {
    case 'era':
    case 'year':
    case 'month':
    case 'day':
      return value.cycle(part, amount, {round: part === 'year'})
  }

  if ('hour' in value) {
    switch (part) {
      case 'dayPeriod': {
        let hours = value.hour
        let isPM = hours >= 12
        return value.set({hour: isPM ? hours - 12 : hours + 12})
      }
      case 'hour':
      case 'minute':
      case 'second':
        return value.cycle(part, amount, {
          round: part !== 'hour',
          hourCycle: options.hour12 ? 12 : 24,
        })
    }
  }
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
function setSegment(
  value: DateValue,
  part: string,
  segmentValue: number,
  options: Intl.ResolvedDateTimeFormatOptions,
) {
  switch (part) {
    case 'day':
    case 'month':
    case 'year':
    case 'era':
      return value.set({[part]: segmentValue})
  }

  if ('hour' in value) {
    switch (part) {
      case 'dayPeriod': {
        let hours = value.hour
        let wasPM = hours >= 12
        let isPM = segmentValue >= 12
        if (isPM === wasPM) {
          return value
        }
        return value.set({hour: wasPM ? hours - 12 : hours + 12})
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
      // @ts-ignore
      case 'hour':
        // In 12 hour time, ensure that AM/PM does not change
        if (options.hour12) {
          let hours = value.hour
          let wasPM = hours >= 12
          if (!wasPM && segmentValue === 12) {
            segmentValue = 0
          }
          if (wasPM && segmentValue < 12) {
            segmentValue += 12
          }
        }
      // fallthrough
      case 'minute':
      case 'second':
        return value.set({[part]: segmentValue})
    }
  }
}
