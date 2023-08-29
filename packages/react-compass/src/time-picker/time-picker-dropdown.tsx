import {cloneDeep} from 'lodash'
import React, {useEffect, useState} from 'react'
import Button from '../button'
import {
  DEFAULT_VIEWS,
  EMPTY_DISPLAY_TIME_DROPDOWN_LIST,
  HALF_TIME_AM,
  HALF_TIME_LIST,
} from './constant'
import TimePickerDropdownItem from './time-picker-dropdown-item'
import {
  TimePickerDropdownContent,
  TimePickerDropdownControl,
  TimePickerDropdownFooter,
  TimePickerDropdownWrapper,
} from './time-picker.styles'
import {
  SelectedKey,
  TimePickerDropdownDisplayList,
  TimePickerDropdownSelectedDisplayList,
  ViewType,
} from './types'
import {createDropdownList} from './utils'

interface TimePickerDropdownProps {
  isOpen?: boolean
  value?: TimePickerDropdownSelectedDisplayList
  hourStep?: number
  minuteStep?: number
  hasFooter?: boolean
  isReadOnly?: boolean
  views?: ViewType[]
  onItemClick: (value: TimePickerDropdownSelectedDisplayList) => void
  onOkClick?: () => void
}

function TimePickerDropdown(props: TimePickerDropdownProps) {
  const {
    isOpen = true,
    hourStep = 1,
    minuteStep = 1,
    value = EMPTY_DISPLAY_TIME_DROPDOWN_LIST,
    hasFooter = true,
    onItemClick,
    onOkClick,
    views = DEFAULT_VIEWS,
    isReadOnly,
  } = props
  const [displayList, setDisplayList] = useState<TimePickerDropdownDisplayList>(
    [],
  )
  const [selectedDisplayList, setSelectedDisplayList] =
    useState<TimePickerDropdownSelectedDisplayList>(
      EMPTY_DISPLAY_TIME_DROPDOWN_LIST,
    )

  /**
   * Create arrays to display data
   */
  useEffect(() => {
    const newDisplayList: TimePickerDropdownDisplayList = []

    views.forEach((view) => {
      switch (view) {
        case 'hours24':
          newDisplayList.push({
            default: '00',
            items: createDropdownList(0, 23, hourStep),
            type: 'hour',
          })
          break
        case 'hours12':
          newDisplayList.push({
            default: '01',
            items: createDropdownList(1, 12, hourStep),
            type: 'hour',
          })
          break
        case 'minutes':
          newDisplayList.push({
            default: '00',
            items: createDropdownList(0, 59, minuteStep),
            type: 'minute',
          })
          break
        case 'seconds':
          newDisplayList.push({
            default: '00',
            items: createDropdownList(0, 59, 1),
            type: 'second',
          })
          break
        case 'sessions':
          newDisplayList.push({
            default: HALF_TIME_AM,
            items: HALF_TIME_LIST,
            type: 'session',
          })
          break
        default:
          break
      }
    })
    setDisplayList(newDisplayList)
  }, [views, hourStep, minuteStep])

  useEffect(() => {
    setSelectedDisplayList(value || EMPTY_DISPLAY_TIME_DROPDOWN_LIST)
  }, [value])

  const handleTimeItemClick =
    (value: number | string, type: SelectedKey) => () => {
      if (isReadOnly) return
      const newSelectedDisplayList = cloneDeep(selectedDisplayList)
      newSelectedDisplayList[type] = value
      // Set default data for others empty
      const selectedDisplayListArr = Object.keys(selectedDisplayList)
      selectedDisplayListArr.map((item) => {
        if (
          item !== type &&
          !selectedDisplayList[item as keyof typeof selectedDisplayList]
        ) {
          const selectedData = displayList.find((data) => data.type === item)
          if (selectedData) {
            newSelectedDisplayList[item as keyof typeof selectedDisplayList] =
              selectedData.default
          }
        }
      })

      setSelectedDisplayList(newSelectedDisplayList)
      onItemClick(newSelectedDisplayList)
    }

  const handleButtonOkClick = () => {
    onOkClick && onOkClick()
  }

  return (
    <>
      <TimePickerDropdownWrapper>
        <TimePickerDropdownContent>
          {displayList.map((displayData, index) => (
            <TimePickerDropdownControl
              className='time-picker-dropdown-control'
              key={index}
            >
              {displayData.items.map((time: string | number) => (
                <TimePickerDropdownItem
                  key={time}
                  isOpen={isOpen}
                  selectedDisplayList={selectedDisplayList}
                  time={time.toString().padStart(2, '0')}
                  selectedTime={selectedDisplayList[displayData.type]}
                  displayDataType={displayData.type}
                  onClickItem={handleTimeItemClick}
                />
              ))}
            </TimePickerDropdownControl>
          ))}
        </TimePickerDropdownContent>
        {hasFooter && (
          <TimePickerDropdownFooter>
            <Button variant='ghost' onClick={handleButtonOkClick}>
              OK
            </Button>
          </TimePickerDropdownFooter>
        )}
      </TimePickerDropdownWrapper>
    </>
  )
}
export default React.memo(TimePickerDropdown)