import {styled} from '../theme'

export const StyledMenuListDropdownHeader = styled('button', {
  border: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  cursor: 'pointer',
  height: '$10',
  backgroundColor: 'inherit',
  padding: '$1_5',

  '&:focus-visible': {
    outline: '#678ECF solid 2px',
  },

  '& .menu-list-dropdown-title': {
    color: '$gray100',
    fontSize: '$3_5',
    fontWeight: '$semibold',
    margin: 0,
  },

  '& .menu-list-dropdown-chevron-down-left-icon': {
    marginRight: '$2_5',
  },

  '& .menu-list-dropdown-chevron-down-right-icon': {
    marginLeft: 'auto',
  },

  [`& .menu-list-dropdown-chevron-down-left-icon.rotated-icon,
   & .menu-list-dropdown-chevron-down-right-icon.rotated-icon`]: {
    transform: 'rotate(180deg)',
  },
})
