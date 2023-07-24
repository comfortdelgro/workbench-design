import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledDropdownMultilevelMenu} from './dropdown-multilevel.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

export type DropdownMultilevelMenuProps = Props &
  Omit<React.HTMLAttributes<HTMLUListElement>, keyof Props>

const DropdownMultilevelMenu = React.forwardRef<
  HTMLUListElement,
  DropdownMultilevelMenuProps
>((props, ref) => {
  const {children, css = {}, className, ...delegated} = props

  const dropdownMultilevelMenuRef = useDOMRef<HTMLUListElement>(ref)

  return (
    <StyledDropdownMultilevelMenu
      css={css}
      ref={dropdownMultilevelMenuRef}
      className={`${className ?? ''} cdg-dropdown-multilevel-menu`}
      {...delegated}
    >
      {children}
    </StyledDropdownMultilevelMenu>
  )
})

export default DropdownMultilevelMenu
