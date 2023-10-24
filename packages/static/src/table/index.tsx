import {
  AccessorColumnDef,
  Cell,
  CellContext,
  ColumnDef,
  DisplayColumnDef,
  GroupColumnDef,
  HeaderContext,
  Row,
  SortingState,
  Table,
} from '@tanstack/react-table'
import TableCheckbox from './table-checkbox'
import TableToolbar from './table-toolbar'

import ReactTable from './table'
import TableFooter from './table-footer'
import ProgressPercentage from './table-progress'
export {
  EditableCellContextProvider,
  useEditableCellContext,
} from './editable/editable-cell'
export type {OptionType, ReactTableProps} from './table'
export type {TableCheckboxProps as ReactTableCheckboxProps} from './table-checkbox'
export type {TableFooterProps as ReactTableFooterProps} from './table-footer'
export type {TableToolbarProps as ReactTableToolbarProps} from './table-toolbar'

ReactTable.Toolbar = TableToolbar
ReactTable.Footer = TableFooter
ReactTable.Checkbox = TableCheckbox
ReactTable.ProgressPercentage = ProgressPercentage
ReactTable.ProgressPercentage.displayName = 'ProgressPercentage'
ReactTable.Toolbar.displayName = 'ReactTable.Toolbar'
ReactTable.Footer.displayName = 'ReactTable.Footer'

ReactTable.displayName = 'ReactTable'

export type TableColumnDef<T> = ColumnDef<T>
export type TableAccessorColumnDef<T> = AccessorColumnDef<T>
export type TableDisplayColumnDef<T> = DisplayColumnDef<T>
export type TableSortingState = SortingState
export type TableGroupColumnDef<T> = GroupColumnDef<T>
export type TableRow<T> = Row<T>
export type TableCell<TData, TValue> = Cell<TData, TValue>
export type TableHeaderContext<TData, TValue> = HeaderContext<TData, TValue>
export type TableCellContext<TData, TValue> = CellContext<TData, TValue>
export type TableTable<T> = Table<T>
export default ReactTable
