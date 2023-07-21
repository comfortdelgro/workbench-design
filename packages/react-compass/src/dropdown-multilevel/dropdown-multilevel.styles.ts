import {styled} from '../theme'

const dropdownMenuBoxshadow = {
  position: 'relative',
  padding: '$2 0',
  borderRadius: '$md',
  width: 'fit-content',
  height: 'fit-content',
  minWidth: '10rem',
  background: '$background',
  boxShadow:
    '0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)',
  ul: {
    overscrollBehavior: 'contain',
    maxHeight: '$64',
    overflowY: 'auto',
    listStyle: 'none',
    marginBlockStart: 0,
    marginBlockEnd: 0,
    marginInlineStart: 0,
    marginInlineEnd: 0,
    paddingInlineStart: 0,
    '&:focus': {
      outline: 'none',
    },
  },
}

export const StyledDropdownMultilevel = styled('div', {
  position: 'relative',
})

export const StyledDropdownMultilevelToggle = styled('div', {})

export const StyledDropdownMultilevelItem = styled('div', {
  position: 'relative',
  fontSize: '14px',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '8px 16px',
  '& > *': {
    // color: var(--grey90);
  },
  '&:hover': {
    '& > *': {
      // color: var(--accent);
    },
  },
  '&:hover > .cdg-dropdown-multilevel-submenu': {
    display: 'block',
  },
})

export const StyledDropdownMultilevelMenu = styled('div', {
  ...dropdownMenuBoxshadow,
})

export const StyledDropdownMultilevelSubmenu = styled('div', {
  ...dropdownMenuBoxshadow,
  display: 'none',
  position: 'absolute',
  left: '100%',
  top: '0',
  '&:hover > .cdg-dropdown-multilevel-submenu': {
    display: 'block',
  },
})

export const StyledPopover = styled('div', {
  margin: 0,
  padding: '$2 0',
  borderRadius: '$md',
  width: 'fit-content',
  height: 'fit-content',
  minWidth: '100%',
})
