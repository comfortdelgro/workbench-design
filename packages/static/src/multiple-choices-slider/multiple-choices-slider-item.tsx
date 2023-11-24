import clsx from 'clsx'
import {forwardRef, HTMLAttributes, ReactNode, useCallback} from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/multiple-choices-slider.module.css'

interface Props {
  isSelected?: boolean
  icon: ReactNode
  label: string
  index: number
  onChange?: (index: number, isAdded: boolean) => void
}

export type MultipleChoicesSliderItemProps = Props &
  Omit<HTMLAttributes<HTMLButtonElement>, keyof Props>

const MultipleChoicesSliderItem = forwardRef<
  HTMLButtonElement,
  MultipleChoicesSliderItemProps
>(({isSelected, icon, label, index, onChange}, ref) => {
  const itemRef = useDOMRef(ref)

  const handleItemClick = useCallback(() => {
    if (onChange) {
      onChange(index, !isSelected)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, isSelected])

  return (
    <button
      ref={itemRef}
      className={clsx(
        styles.multipleChoicesSliderItem,
        'multiple-choices-slider-item',
        isSelected && styles.isActive,
      )}
      onClick={handleItemClick}
    >
      {icon}
      <span className={styles.itemLabel}>{label}</span>
    </button>
  )
})

export default MultipleChoicesSliderItem
