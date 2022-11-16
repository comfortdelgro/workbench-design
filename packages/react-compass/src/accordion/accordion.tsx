import React, {useState} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import AccordionContext from './accordion-context'
import AccordionTable from './accordion-table'
import AccordionTitle from './accordion-title'
import {StyledAccordion} from './accordion.styles'
interface Props extends StyledComponentProps {
  expand?: boolean
  defaultExpand?: boolean
  children: React.ReactNode
  onExpandChange?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

export type AccordionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      expand: controlledExpand, //map the prop to a different name
      defaultExpand = false,
      children: childrenProps,
      onExpandChange,
      // HTML Div props
      ...delegated
    } = props

    const [uncontrolledExpand, setUncontrolledExpand] = useState(defaultExpand)

    // Component expansion state managed by its own or by user
    const expand: boolean = (() => {
      if (controlledExpand !== undefined) {
        return controlledExpand
      }
      return uncontrolledExpand
    })()

    // Toggle expansion state only when user doesnt control the component
    const setExpandIfUncontrolled = React.useCallback(() => {
      if (!controlledExpand !== undefined) {
        setUncontrolledExpand((prevState) => !prevState)
      }
    }, [])

    const contextValue = React.useMemo(
      () => ({expand, setExpand: setExpandIfUncontrolled, onExpandChange}),
      [expand, setExpandIfUncontrolled, onExpandChange],
    )

    const accordionRef = useDOMRef<HTMLDivElement>(ref)

    //get the first child as an accordion title
    const [accordionTitle, ...children] = React.Children.toArray(childrenProps)

    return (
      <StyledAccordion
        {...delegated}
        expand={expand ? 'open' : 'close'}
        css={css}
        ref={accordionRef}
      >
        <AccordionContext.Provider value={contextValue}>
          {accordionTitle}
          <div className='accordion-body'>{children}</div>
        </AccordionContext.Provider>
      </StyledAccordion>
    )
  },
)

export default Accordion as typeof Accordion & {
  Table: typeof AccordionTable
  Title: typeof AccordionTitle
}
