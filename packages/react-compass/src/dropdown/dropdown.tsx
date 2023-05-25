import {
  autoUpdate,
  flip,
  offset,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react'
import React from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import DropdownComboBox from './dropdown.combobox'
import DropdownFlag from './dropdown.flag'
import DropdownSelect from './dropdown.select'
import {
  DropdownVariantProps,
  StyledComboBox,
  StyledDropdownWrapper,
  StyledFlag,
  StyledFlagIcon,
  StyledHelperText,
  StyledSelect,
} from './dropdown.styles'
import {countries, Flag} from './flags'
import DropdownHeader from './header'
import DropdownItem, {DropdownItemProps} from './item'
import ListBox from './list-box'
import Popover from './popover'
import RowCalculator from './rowCalculator'
import DropdownSection from './section'
import {
  DropdownBase,
  getDefaulValue,
  Icon,
  ListKeyboardDelegate,
  pickChilds,
  pickSections,
  textContent,
} from './utils'

interface Props extends DropdownBase {
  selectedKey?: React.Key
  defaultSelectedKey?: React.Key
  onSelectionChange?: (key: React.Key) => void
  type?: 'select' | 'combobox' | 'flag'
}

export type DropdownProps = Props &
  DropdownVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Select = React.forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
  const {
    css = {},
    isOpen,
    children,
    isErrored,
    isRequired,
    isReadOnly,
    helperText,
    selectedKey,
    placeholder,
    errorMessage,
    numberOfRows,
    icon = <Icon />,
    type = 'select',
    isLoading = false,
    disabledKeys = [],
    defaultSelectedKey,
    isDisabled = false,
    defaultOpen = false,
    onLoadMore = () => {
      //Load more
    },
    onBlur = () => {
      //
    },
    onFocus = () => {
      //
    },
    ...delegated
  } = props
  // ====================================== STATE ======================================
  const [search, setSearch] = React.useState('')
  const [isSearching, setIsSearching] = React.useState(false)
  const [open, setOpen] = React.useState<boolean>(defaultOpen)
  const [currentKey, setCurrentKey] = React.useState<React.Key | undefined>(
    getDefaulValue(defaultSelectedKey, selectedKey),
  )
  const [focusKey, setFocusKey] = React.useState<React.Key | undefined>(
    getDefaulValue(defaultSelectedKey, selectedKey),
  )

  // ====================================== REF ======================================
  const listBoxRef = React.useRef<HTMLUListElement>(null)
  const visualizeList = React.useRef<HTMLDivElement>(null)
  const visualizeULList = React.useRef<HTMLUListElement>(null)
  // Select ref
  const selectRef = useDOMRef<HTMLElement>(ref)
  // Combobox ref
  const inputRef = React.useRef<HTMLInputElement>(null)
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  // ====================================== FLOATING ======================================
  const {refs, floatingStyles, context} = useFloating({
    open: open,
    onOpenChange: setOpen,
    middleware: [offset(8), flip()],
    whileElementsMounted: autoUpdate,
  })

  const dismiss = useDismiss(context)

  const {getReferenceProps, getFloatingProps} = useInteractions([dismiss])

  // ====================================== CONST ======================================
  const rawCollection = React.useMemo(
    () => pickChilds<DropdownItemProps>(children, DropdownItem),
    [children],
  )

  const sectionCollection = React.useMemo(
    () => pickSections(children),
    [children],
  )

  // Filter collection by search text, works with combobox
  const collection = React.useMemo(() => {
    if (!isSearching) return rawCollection
    if (search === '') {
      return rawCollection
    } else {
      return rawCollection.filter((item) => {
        const text = textContent(item)
        return text?.toLowerCase().includes(search.toLowerCase())
      })
    }
  }, [rawCollection, search, isSearching])

  const selectedItem = rawCollection.find((item) => {
    return item.key === currentKey
  })

  const delegate = React.useMemo(
    () => new ListKeyboardDelegate(rawCollection, disabledKeys),
    [rawCollection, disabledKeys],
  )

  const choosenFlag = React.useMemo(() => {
    if (search !== '') {
      return countries.find(
        (item) =>
          item.name === search ||
          item['alpha-2'] === search ||
          item['alpha-3'] === search ||
          item['phone-code'] === search ||
          item['country-code'] === search,
      )
    }
    return null
  }, [search])

  // ====================================== EFFECT ======================================
  // map default value
  React.useEffect(() => {
    setCurrentKey(getDefaulValue(defaultSelectedKey, selectedKey))
  }, [selectedKey, defaultSelectedKey])

  React.useEffect(() => {
    const getTextFromKey = (key: React.Key) => {
      const selected = rawCollection.find((item) => {
        return item.key === key
      })
      if (selected) {
        const text =
          selected?.props.textValue && selected?.props.textValue !== ''
            ? selected?.props.textValue
            : textContent(selected)
        return text
      }
      return ''
    }

    if (!selectedKey && defaultSelectedKey) {
      setSearch(getTextFromKey(defaultSelectedKey))
    }
    if (selectedKey) {
      setSearch(getTextFromKey(selectedKey))
    }
  }, [selectedKey, defaultSelectedKey])

  React.useEffect(() => {
    if (!isOpen && defaultOpen) {
      setOpen(defaultOpen)
    }
    if (isOpen) {
      setOpen(isOpen)
    }
  }, [isOpen])

  React.useEffect(() => {
    props.onOpenChange?.(open)
    if (type === 'select') {
      if (open) {
        selectRef.current?.focus()
        inputRef.current?.focus()
      } else {
        setIsSearching(false)
        selectRef.current?.blur()
        inputRef.current?.blur()
      }
    }
  }, [open])

  React.useEffect(() => {
    if (currentKey !== undefined) {
      setFocusKey(currentKey)
      const text =
        selectedItem?.props.textValue && selectedItem?.props.textValue !== ''
          ? selectedItem?.props.textValue
          : textContent(selectedItem as React.ReactElement)
      setSearch(text ?? '')
      props.onSelectionChange?.(currentKey)
    }
  }, [currentKey])

  // ====================================== CALLBACK ======================================
  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowUp':
      case 'ArrowLeft': {
        e.preventDefault()
        const key =
          focusKey != undefined && focusKey != -1
            ? delegate.getKeyAbove(focusKey)
            : delegate.getFirstKey()
        if (key) setFocusKey(key)
        break
      }
      case 'ArrowDown':
      case 'ArrowRight': {
        e.preventDefault()
        const key =
          focusKey != undefined && focusKey != -1
            ? delegate.getKeyBelow(focusKey)
            : delegate.getFirstKey()
        if (key) setFocusKey(key)
        break
      }
      case 'Enter': {
        e.preventDefault()
        if (focusKey) {
          setCurrentKey(focusKey)
          setOpen(false)
        }
        break
      }
      case 'Escape': {
        e.preventDefault()
        setOpen(false)
        break
      }
    }
  }

  const onHover = (key: React.Key | null) => {
    if (key) {
      setFocusKey(key)
    }
  }

  const onSelect = (key: React.Key) => {
    if (!isReadOnly) {
      if (currentKey === key) {
        setCurrentKey(undefined)
        setFocusKey(undefined)
        setSearch('')
        setIsSearching(false)
        props.onSelectionChange?.('')
      } else {
        setCurrentKey(key)
      }
      setOpen(false)
    }
  }

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
    setIsSearching(true)
    setOpen(true)
  }

  const labelClick = () => {
    selectRef.current?.click()
    buttonRef.current?.click()
  }

  const handleClickIcon = () => {
    setOpen(true)
    inputRef.current?.focus()
  }

  // ====================================== RENDER ======================================
  return (
    <StyledDropdownWrapper css={css} {...delegated}>
      {props.label && (
        <label onClick={labelClick}>
          {props.label}
          {isRequired && <span>*</span>}
        </label>
      )}
      {type === 'select' && (
        <StyledSelect
          isEmpty={!selectedItem}
          isErrored={!!isErrored}
          isDisabled={isDisabled}
          ref={refs.setReference}
          {...getReferenceProps}
        >
          <button
            type='button'
            ref={selectRef as React.RefObject<HTMLButtonElement>}
            disabled={isDisabled}
            onClick={handleClickIcon}
          >
            <span>
              {selectedItem
                ? selectedItem.props.textValue
                  ? selectedItem.props.textValue
                  : selectedItem.props.children
                : placeholder}
            </span>
            {icon}
          </button>
        </StyledSelect>
      )}
      {type === 'combobox' && (
        <StyledComboBox
          isEmpty={!selectedItem}
          isErrored={!!isErrored}
          isDisabled={isDisabled}
          ref={refs.setReference}
          {...getReferenceProps}
        >
          <input
            ref={inputRef}
            value={search}
            disabled={isDisabled}
            placeholder={placeholder}
            onChange={onSearch}
            onBlur={onBlur}
            onFocus={onFocus}
          />
          <button
            type='button'
            ref={buttonRef}
            disabled={isDisabled}
            onClick={handleClickIcon}
          >
            {icon}
          </button>
        </StyledComboBox>
      )}
      {type == 'flag' && (
        <StyledFlag
          isEmpty={!choosenFlag}
          isErrored={!!isErrored}
          isDisabled={isDisabled}
          ref={refs.setReference}
          {...getReferenceProps}
        >
          {choosenFlag && (
            <StyledFlagIcon>
              <Flag iso={choosenFlag['alpha-2']} />
            </StyledFlagIcon>
          )}
          <input
            ref={inputRef}
            value={search}
            disabled={isDisabled}
            placeholder={placeholder}
            onChange={onSearch}
            onBlur={onBlur}
            onFocus={onFocus}
          />
          <button
            ref={buttonRef}
            disabled={isDisabled}
            onClick={handleClickIcon}
            type='button'
          >
            {icon}
          </button>
        </StyledFlag>
      )}
      {collection && open && (
        <div
          className='Popover'
          ref={refs.setFloating}
          style={{
            ...floatingStyles,
            ...{
              zIndex: 60,
            },
          }}
          {...getFloatingProps}
        >
          <Popover
            isEmpty={collection.length === 0}
            visualizeRef={visualizeULList}
            triggerRef={
              type == 'select'
                ? (selectRef as React.RefObject<HTMLDivElement>)
                : inputRef
            }
            onBlur={
              type == 'select'
                ? onBlur
                : () => {
                    //
                  }
            }
            onFocus={
              type == 'select'
                ? onFocus
                : () => {
                    //
                  }
            }
            handleKeyDown={handleKeyDown}
          >
            <ListBox
              dropdownType={type}
              focusKey={focusKey}
              currentKey={currentKey}
              collection={collection}
              listBoxRef={listBoxRef}
              disabledKeys={disabledKeys}
              isLoading={isLoading}
              sectionCollection={sectionCollection}
              rootChildren={children}
              onHover={onHover}
              onSelect={onSelect}
              onLoadMore={onLoadMore}
            />
          </Popover>
        </div>
      )}
      <RowCalculator
        ref={visualizeList}
        dropdownType={type}
        isLoading={isLoading}
        collection={rawCollection}
        listBoxRef={visualizeULList}
        rootChildren={children}
        numberOfRows={numberOfRows}
        sectionCollection={sectionCollection}
        onLoadMore={() => {
          //
        }}
      />
      {isErrored && errorMessage && (
        <StyledHelperText error={!!isErrored}>{errorMessage}</StyledHelperText>
      )}
      {helperText && <StyledHelperText>{helperText}</StyledHelperText>}
    </StyledDropdownWrapper>
  )
})

export default Select as typeof Select & {
  ComboBox: typeof DropdownComboBox
  Flag: typeof DropdownFlag
  Select: typeof DropdownSelect
  Item: typeof DropdownItem
  Section: typeof DropdownSection
  Header: typeof DropdownHeader
}
