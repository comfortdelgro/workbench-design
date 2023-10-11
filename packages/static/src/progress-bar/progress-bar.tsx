import clampValue from 'lodash/clamp'
import React, {useEffect, useMemo} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/progress-bar.module.css'

type Props = {
  rightLabel?: string
  /** @default "lg" */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /**
   * Color visualization of the current value.
   * @default "blue" // $info - #009EDA
   */
  color?: string
  /**
   * Color of the progress bar.
   * @default "$gray30" // #EDEBE9
   */
  barColor?: string
  /** @default "normal" */
  variant?: 'normal' | 'rounded'
  label?: string
  /** @default 0 */
  value?: number
  /** @default 0 */
  minValue?: number
  /** @default 100 */
  maxValue?: number
  onComplete?: () => void
  loading?: 'stripes' | boolean
  css?: unknown
  className?: string
}

export type ProgressBarProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      className = '',
      // ComponentProps
      loading = false,
      label,
      rightLabel,
      size = 'lg',
      barColor = '#EDEBE9',
      color: inputColor = 'blue',
      variant = 'normal',
      value: inputValue = 0,
      minValue: inputMinValue = 0,
      maxValue: inputMaxValue = 100,
      onComplete,
      // html props
      ...delegated
    } = props

    const color = useMemo(() => {
      // support the old color variants
      if (inputColor === 'blue') {
        return '#78D5E8'
      }

      if (inputColor === 'green') {
        return '#107C10'
      }

      return inputColor
    }, [inputColor])

    const minValue = inputMinValue < 0 ? 0 : inputMinValue
    const maxValue = inputMaxValue < minValue ? minValue : inputMaxValue
    const value = clampValue(inputValue, minValue, maxValue)

    const linkRef = useDOMRef<HTMLDivElement>(ref)
    const labelProps = {
      role: 'progressbar',
      'aria-label': label ?? '',
      'aria-valuemin': minValue,
      'aria-valuenow': value,
      'aria-valuemax': maxValue,
    }

    const progressPercentage = useMemo(() => {
      if (maxValue - minValue === 0 || value === maxValue) {
        return 100
      }

      const percentage = (value - minValue) / (maxValue - minValue)
      return Math.round(percentage * 100)
    }, [value, minValue, maxValue])

    useEffect(() => {
      if (progressPercentage === 100) {
        onComplete?.()
      }
    }, [progressPercentage, onComplete])

    return (
      <CssInjection css={css} childrenRef={linkRef}>
        <div
          className={`cdg-progress-bar-wrapper ${styles.progressBarWrapper} ${
            size
              ? styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`]
              : ''
          } ${
            variant
              ? styles[
                  `variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`
                ]
              : ''
          } ${className}`}
          ref={linkRef}
          {...labelProps}
          {...delegated}
        >
          {(!!label || !!rightLabel) && (
            <div
              className={`cdg-progress-bar-label ${styles.progressBarLabel}`}
            >
              <span {...labelProps}>{label ?? ''}</span>
              {rightLabel && <span {...labelProps}>{rightLabel ?? ''}</span>}
            </div>
          )}

          <div
            className={`cdg-progress-bar ${styles.progressBar}`}
            style={{backgroundColor: barColor}}
          >
            {!loading && (
              <div
                className={`progress-bar__current-state ${styles.currentProgress}`}
                style={{
                  width: `${progressPercentage}%`,
                  backgroundColor: color,
                }}
              />
            )}

            <div
              className={`progress-bar__loading ${styles.loadingProgress} ${
                loading
                  ? styles[
                      `loading${size.charAt(0).toUpperCase() + size.slice(1)}`
                    ]
                  : ''
              }`}
              style={{
                ...(loading === 'stripes'
                  ? {
                      backgroundImage: `repeating-linear-gradient(-45deg,transparent 0 1.5%,${color} 1.5% 3%)`,
                      '@sm': {
                        backgroundImage: `repeating-linear-gradient(-45deg,transparent 0 .8%,${color} .8% 1.6%)`,
                      },
                    }
                  : {
                      backgroundColor: color,
                    }),
              }}
              {...{loading}}
            />
          </div>
        </div>
      </CssInjection>
    )
  },
)

export default ProgressBar
