import {Cell, ColumnMeta, flexRender, RowData} from '@tanstack/react-table'
import React, {SetStateAction, useEffect} from 'react'
import {createSafeContext} from '../../utils/create-safe-context'
import CssInjection from '../../utils/objectToCss/CssInjection'
import {useDOMRef} from '../../utils/use-dom-ref'
import styles from './editable-cell.module.css'

interface CellProps {
  getValue: () => never
  cell: Cell<never, unknown>
  row: number
  column: string
  css?: unknown
}

export interface CellMetaProps<TData extends RowData, TValue>
  extends ColumnMeta<TData, TValue> {
  editable?: boolean
  template?: React.ReactNode
  updateData?: (index: number, id: string, value: never) => void
  revertData?: (rowIndex: number) => void
}

export type EditableCellProps = CellProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof CellProps>

export const [EditableCellContextProvider, useEditableCellContext] =
  createSafeContext<never>('EditableCell was not found in tree')

export const EditableCell = React.forwardRef<
  HTMLTableCellElement,
  EditableCellProps
>(({getValue, cell, row, column, css = {}}: EditableCellProps) => {
  const initialValue = getValue()
  const inputRef = useDOMRef<HTMLInputElement>(null)
  const [editing, setEditing] = React.useState(false)
  const [value, setValue] = React.useState(initialValue)
  const tableMeta = cell.column.columnDef.meta as CellMetaProps<never, unknown>

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as never)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      finishTemplateEditing(value)
    } else if (event.key === 'Escape') {
      cancelTemplateEditing()
    }
  }

  const handleBlur = () => {
    cancelTemplateEditing()
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    const newValue = getValue()
    setValue(newValue as SetStateAction<never>)
    setEditing(true)
  }

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus()
    }
  }, [editing])

  const finishTemplateEditing = (data: never) => {
    setEditing(false)
    tableMeta?.updateData?.(row, column, data)
  }
  const cancelTemplateEditing = () => {
    setEditing(false)
    tableMeta?.revertData?.(row)
  }

  return (
    <CssInjection css={css}>
      <div onClick={handleClick} className={styles.cdgTableEditableCell}>
        {editing ? (
          tableMeta.template ? (
            <EditableCellContextProvider
              value={
                {
                  finishTemplateEditing,
                  cancelTemplateEditing,
                  initialValue,
                  cell,
                  row,
                  column,
                } as never
              }
            >
              {tableMeta.template}
            </EditableCellContextProvider>
          ) : (
            <input
              aria-label='cell-input'
              ref={inputRef}
              type='text'
              value={value}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onBlur={handleBlur}
              className={styles.editableCellInput}
            />
          )
        ) : (
          <p className={styles.editableCellContent}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </p>
        )}
      </div>
    </CssInjection>
  )
})
