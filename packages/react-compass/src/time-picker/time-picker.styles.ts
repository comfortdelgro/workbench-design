import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledTextField = styled('input', {
  width: '100%',
  fontSize: '$label1',
  fontWeight: '$semibold',
  lineHeight: '$normal',
  padding: '$1_5 $3',
  border: 0,
  borderRadius: '$md',
  backgroundColor: 'transparent',

  '&:focus': {
    outline: 'none',
  },

  '&::placeholder': {
    color: '#B4B4B4',
    fontSize: '$label1',
    fontWeight: '$semibold',
  },
})
export const TimePickerContainer = styled('div', {})

export const TimePickerDropdownWrapper = styled('div', {
  background: '$background',
  border: '1px solid #e6e6e6',
  borderRadius: '$md',
  zIndex: 9999,
})
export const TimePickerDropdownContent = styled('div', {
  display: 'flex',
  height: '$80',
  width: '100%',
  overflowY: 'hidden',
  marginTop: '$1',
})
export const TimePickerDropdownControl = styled('div', {
  padding: '$1',
  overflowY: 'hidden',
  height: '100%',
  position: 'relative',

  '&:hover': {
    overflowY: 'auto',
  },

  '&:not(:last-child)': {
    borderRight: '1px solid #e6e6e6',
  },
})
export const TimePickerDropdownItemStyle = styled('button', {
  backgroundColor: '$background',
  border: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '$3',
  borderRadius: '$md',
  width: '$10_5',
  height: '$10_5',
  cursor: 'pointer',
  fontWeight: 500,
  boxSizing: 'border-box',
  '&:hover': {
    backgroundColor: '$primaryBg',
  },
  fontSize: '$body3',
  lineHeight: '$5_25',

  '&.active': {
    backgroundColor: '$cdgBlue100',
    color: '$background',
  },
})
export const TimePickerDropdownFooter = styled('div', {
  padding: '$2',
  display: 'flex',
  justifyContent: 'flex-end',
  borderTop: '1px solid #e6e6e6',
  button: {
    fontWeight: 500,
    fontSize: '$body3',
    lineHeight: '$5_25',
  },
})
export const TimeFieldWrapper = styled('div', {
  display: 'flex',
})
export const TimeSegmentStyle = styled('div', {
  whiteSpace: 'break-spaces',
})

export type ButtonVariantProps = VariantProps<typeof StyledTextField>
