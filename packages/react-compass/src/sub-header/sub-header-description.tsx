'use client'

import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import styles from './styles/sub-header-description.module.css'

interface Props {
  children: React.ReactNode
  variant?: 'default'
  css?: CSS
  className?: string
}

export type SubHeaderDescriptionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SubHeaderDescription = React.forwardRef<
  HTMLDivElement,
  SubHeaderDescriptionProps
>((props, ref) => {
  const {
    children,
    css = {},
    className = '',
    variant = 'default',
    ...htmlProps
  } = props

  return (
    <CssInjection css={css} childrenRef={ref}>
      <p
        className={`cdg-sub-header-description ${className} ${
          styles.subHeaderDescription
        } ${styles[`${variant}`]}`}
        ref={ref}
        {...htmlProps}
      >
        {children}
      </p>
    </CssInjection>
  )
})

export default SubHeaderDescription
