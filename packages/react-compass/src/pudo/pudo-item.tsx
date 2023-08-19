import React, {ReactNode, useCallback} from 'react'
import TextField from '../textfield'
import {StyledComponentProps} from '../utils/stitches.types'
import {PudoItemVariantProps, StyledPUDOItem} from './pudo.styles'

export type PudoItemProps<TName = string> = {
  name: TName
  className?: string
  icon?: ReactNode
  type?: 'input' | 'label'
  value: string
  placeholder?: string
  hideIcon?: boolean

  /** @default false */
  allowSwap?: boolean

  /** @default 255 */
  maxLength?: number
} & StyledComponentProps

export type PudoItemPrivateProps<TName extends string | number | symbol> = {
  index: number
  onValueChange?: (value: string) => void
  handleSwap?: () => void
} & PudoItemProps<TName> &
  PudoItemVariantProps

const PudoItem = <TItemName extends string | number | symbol>({
  index,
  name,
  className = '',
  css = {},
  type = 'input',
  icon,
  value = '',
  onValueChange,
  allowSwap = false,
  handleSwap,
  placeholder = '',
  maxLength = 255,
  ...delegated
}: PudoItemPrivateProps<TItemName>) => {
  const renderPudoContent = useCallback(() => {
    switch (type) {
      case 'label':
        return <div>{value}</div>

      case 'input':
        return (
          <TextField
            className='pudo-item__input'
            css={{
              '> div': {
                border: 'none',
                height: 'unset',
                backgroundColor: 'inherit',
              },
              input: {
                padding: '$2 0',
                height: '$12',
                fontWeight: '$normal',
                backgroundColor: 'inherit',
                '&::placeholder': {
                  fontWeight: '$normal',
                },
              },
            }}
            name={name.toString()}
            value={value}
            onChange={(v) => onValueChange?.(v.toString())}
            placeholder={placeholder}
            maxLength={maxLength}
          />
        )

      default:
        return <></>
    }
  }, [type, value, onValueChange])

  return (
    <StyledPUDOItem
      css={css}
      className={`pudo-item ${className}`}
      {...{type}}
      {...delegated}
    >
      <div className='pudo-item__icon'>{icon || DefaultIcons[index]}</div>
      {renderPudoContent()}
      <svg
        className='pudo-item__connect-icon'
        width='20'
        height='29'
        viewBox='0 0 20 29'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='10' cy='5.5' r='1.5' fill='#B4B4B4' />
        <circle cx='10' cy='11.5' r='1.5' fill='#B4B4B4' />
        <circle cx='10' cy='17.5' r='1.5' fill='#B4B4B4' />
        <circle cx='10' cy='23.5' r='1.5' fill='#B4B4B4' />
      </svg>

      {allowSwap ? (
        <button
          className='pudo-item__swap-icon'
          type='button'
          onClick={() => handleSwap?.()}
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12 23C5.9247 23 1 18.0753 1 12C1 5.9247 5.9247 1 12 1C18.0753 1 23 5.9247 23 12C23 18.0753 18.0753 23 12 23ZM6.5 8.7H8.7V13.1H10.9V8.7H13.1L9.8 4.85L6.5 8.7ZM17.5 15.3H15.3V10.9H13.1V15.3H10.9L14.2 19.15L17.5 15.3Z'
              fill='#0142AF'
            />
          </svg>
        </button>
      ) : (
        <></>
      )}
    </StyledPUDOItem>
  )
}

const DefaultIcons = [
  <svg
    width='20'
    height='18'
    viewBox='0 0 20 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g id='Frame 427319545'>
      <path
        id='Ellipse 1649'
        d='M10 17C14.4183 17 18 13.4183 18 9C18 4.58172 14.4183 1 10 1C5.58172 1 2 4.58172 2 9C2 13.4183 5.58172 17 10 17Z'
        fill='white'
        stroke='white'
        strokeWidth='2'
      />
      <path
        id='Ellipse 1649 (Stroke)'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 12.5C11.933 12.5 13.5 10.933 13.5 9C13.5 7.067 11.933 5.5 10 5.5C8.067 5.5 6.5 7.067 6.5 9C6.5 10.933 8.067 12.5 10 12.5ZM10 16C13.866 16 17 12.866 17 9C17 5.13401 13.866 2 10 2C6.13401 2 3 5.13401 3 9C3 12.866 6.13401 16 10 16Z'
        fill='#159A00'
      />
    </g>
  </svg>,

  <svg
    width='28'
    height='30'
    viewBox='0 0 28 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g filter='url(#filter0_d_12863_38888)'>
      <path
        d='M12.4735 22.7771C13.0076 23.3529 15.0221 23.3513 15.5549 22.7743C16.7072 21.5262 18.2271 20.5141 19.3099 19.7915C22.1249 18.0973 24 15.0681 24 11.6126C24 6.32513 19.448 2.03495 14.0166 2.00063C14.0164 2.00063 14.0163 2.00049 14.0163 2.00032C14.0163 2.00014 14.0161 2 14.0159 2C14.005 2.00001 13.9947 2.00063 13.9837 2.00063C13.9728 2.00063 13.9625 2.00001 13.9515 2C13.9514 2 13.9512 2.00014 13.9512 2.00032C13.9512 2.00049 13.9511 2.00063 13.9509 2.00063C8.52015 2.03495 4 6.32513 4 11.6126C4 15.0902 5.89984 18.1365 8.74472 19.8244C9.83023 20.5452 11.3322 21.5466 12.4735 22.7771Z'
        fill='#EF631A'
      />
      <path
        d='M18.7973 18.9316L18.7773 18.9436L18.758 18.9565L18.7121 18.9871C17.6524 19.6942 16.0737 20.7476 14.8487 22.0654C14.8336 22.0731 14.7809 22.1003 14.6687 22.13C14.495 22.1762 14.2641 22.2054 14.0139 22.2056C13.7636 22.2058 13.5326 22.177 13.3587 22.1312C13.2461 22.1015 13.1932 22.0744 13.1782 22.0667C11.9493 20.7507 10.3656 19.6991 9.30099 18.9923L9.29473 18.9881L9.27369 18.9742L9.25197 18.9613C6.68883 17.4405 4.99762 14.7105 4.99762 11.6126C4.99762 6.92381 9.02639 3.03414 13.9572 3.00299L13.9572 3.00299C13.9602 3.00297 13.9633 3.00293 13.9663 3.00289C13.9715 3.00296 13.9774 3.003 13.9837 3.003C13.9901 3.003 13.996 3.00296 14.0012 3.00289C14.0042 3.00293 14.0073 3.00297 14.0103 3.00299L14.0103 3.00299C18.946 3.03417 23.0024 6.92788 23.0024 11.6126C23.0024 14.6909 21.3332 17.4053 18.7973 18.9316Z'
        stroke='white'
        strokeWidth='2'
      />
    </g>
    <circle cx='13.8291' cy='11.4005' r='4' fill='white' />
    <defs>
      <filter
        id='filter0_d_12863_38888'
        x='0'
        y='0'
        width='28'
        height='29.208'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy='2' />
        <feGaussianBlur stdDeviation='2' />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.151042 0 0 0 0 0.4495 0 0 0 0 0.725 0 0 0 0.16 0'
        />
        <feBlend
          mode='normal'
          in2='BackgroundImageFix'
          result='effect1_dropShadow_12863_38888'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_dropShadow_12863_38888'
          result='shape'
        />
      </filter>
    </defs>
  </svg>,

  <svg
    width='28'
    height='30'
    viewBox='0 0 28 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g filter='url(#filter0_d_12863_38917)'>
      <path
        d='M12.4735 22.7768C13.0076 23.3526 15.0221 23.3511 15.5549 22.774C16.7072 21.526 18.2271 20.5138 19.3099 19.7913C22.1249 18.097 24 15.0678 24 11.6123C24 6.32489 19.448 2.0347 14.0166 2.00039C14.0164 2.00039 14.0163 2.00025 14.0163 2.00007C14.0163 1.9999 14.0161 1.99976 14.0159 1.99976C14.005 1.99977 13.9947 2.00039 13.9837 2.00039C13.9728 2.00039 13.9625 1.99977 13.9515 1.99976C13.9514 1.99976 13.9512 1.9999 13.9512 2.00007C13.9512 2.00025 13.9511 2.00039 13.9509 2.00039C8.52015 2.0347 4 6.32489 4 11.6123C4 15.0899 5.89984 18.1363 8.74472 19.8241C9.83023 20.5449 11.3322 21.5464 12.4735 22.7768Z'
        fill='#E31617'
      />
      <path
        d='M18.7973 18.9314L18.7773 18.9434L18.758 18.9563L18.7121 18.9869C17.6524 19.6939 16.0737 20.7473 14.8487 22.0651C14.8336 22.0729 14.7809 22.1 14.6687 22.1298C14.495 22.176 14.2641 22.2051 14.0139 22.2054C13.7636 22.2056 13.5326 22.1768 13.3587 22.1309C13.2461 22.1012 13.1932 22.0741 13.1782 22.0664C11.9493 20.7505 10.3656 19.6989 9.30099 18.992L9.29473 18.9879L9.27369 18.9739L9.25197 18.961C6.68883 17.4403 4.99762 14.7102 4.99762 11.6123C4.99762 6.92357 9.02639 3.0339 13.9572 3.00274L13.9572 3.00274C13.9602 3.00272 13.9633 3.00269 13.9663 3.00264C13.9715 3.00271 13.9774 3.00276 13.9837 3.00276C13.9901 3.00276 13.996 3.00271 14.0012 3.00264C14.0042 3.00269 14.0073 3.00272 14.0103 3.00274L14.0103 3.00274C18.946 3.03392 23.0024 6.92763 23.0024 11.6123C23.0024 14.6906 21.3332 17.4051 18.7973 18.9314Z'
        stroke='white'
        strokeWidth='2'
      />
    </g>
    <circle cx='13.8291' cy='11.4002' r='4' fill='white' />
    <defs>
      <filter
        id='filter0_d_12863_38917'
        x='0'
        y='-0.000244141'
        width='28'
        height='29.208'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy='2' />
        <feGaussianBlur stdDeviation='2' />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.151042 0 0 0 0 0.4495 0 0 0 0 0.725 0 0 0 0.16 0'
        />
        <feBlend
          mode='normal'
          in2='BackgroundImageFix'
          result='effect1_dropShadow_12863_38917'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_dropShadow_12863_38917'
          result='shape'
        />
      </filter>
    </defs>
  </svg>,
]

export default PudoItem
