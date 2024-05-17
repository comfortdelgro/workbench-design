'use client'

import {
  DialogHTMLAttributes,
  MouseEvent,
  forwardRef,
  useCallback,
  useEffect,
} from 'react'
import {CssInjection} from '../utils'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import DrawerFooter from './drawer-footer'
import DrawerHeader from './drawer-header'
import {drawerPickChild} from './drawer-pick-child'
import drawerExpanderStyles from './styles/drawer-expander.module.css'
import drawerMobileStyles from './styles/drawer-mobile.module.css'
import {DrawerMobileProps, DrawerRef} from './types'
import {updateElementStyles} from './utils'

const DRAWER_SCALE_TARGET_SIGNAL = 'data-cdg-drawer-scalable-bg'
const DRAWER_SCALE_OFFSET = 16 // px

const DrawerMobile = forwardRef<
  DrawerRef,
  DrawerMobileProps & DialogHTMLAttributes<HTMLDialogElement>
>((props, ref) => {
  const {
    className = '',
    css,
    open = false,
    drawerMode = 'modal',
    disableResize,
    preventClose,
    preventFocus,

    enableScaleBg = false,
    scaleBgOffset = DRAWER_SCALE_OFFSET,
    scaleBgClassName = 'cdg-webpage-drawer-scale',
    onMouseDown,

    children,
    ...dialogHTMLAttributes
  } = props
  const DrawerRef = useDOMRef<DrawerRef>(ref)
  const DrawerElement = DrawerRef.current
  const {child: DrawerHeaderElement, rest: OtherElementsExceptHeader} =
    drawerPickChild<typeof DrawerHeader>(children, DrawerHeader)

  const {child: DrawerFooterElement, rest: OtherElements} = drawerPickChild<
    typeof DrawerFooter
  >(OtherElementsExceptHeader, DrawerFooter)

  const handleCloseDrawer = useCallback(
    (dialogReturnValue?: string) => {
      if (typeof document === 'undefined' || !DrawerElement) {
        return
      }

      DrawerElement.close(dialogReturnValue)
    },
    [DrawerElement],
  )

  const handleMouseDown = useCallback(
    (e: MouseEvent<HTMLDialogElement>) => {
      if (!DrawerElement) {
        return
      }

      onMouseDown?.(e)
      if (!(e.target instanceof HTMLDialogElement) || preventClose) {
        return
      }

      // Close the drawer if the user click to the dialog elements itself (eg: the backdrop)
      if (e.target.nodeName === 'DIALOG') {
        handleCloseDrawer('dismiss')
      }
    },
    [DrawerElement, preventClose, onMouseDown, handleCloseDrawer],
  )

  const scaleBackground = useCallback(() => {
    if (
      !enableScaleBg ||
      drawerMode !== 'modal' ||
      typeof document === 'undefined' ||
      !DrawerElement
    ) {
      return
    }

    const scaleElement =
      document.querySelector<HTMLElement>(`[${DRAWER_SCALE_TARGET_SIGNAL}]`) ||
      document.body
    if (!scaleElement) {
      return
    }

    scaleElement.classList.add('cdg-drawer-bg-scale')

    if (open) {
      document.documentElement.classList.add(
        'cdg-webpage-drawer-scale',
        scaleBgClassName,
      )
      updateElementStyles(scaleElement, {
        '--cdg-drawer-scale-offset': `${scaleBgOffset}px`,
        '--cdg-drawer-scale': `${(
          (window.innerWidth - scaleBgOffset * 2) /
          window.innerWidth
        ).toFixed(2)}`,
      })
      scaleElement.classList.add('cdg-drawer-bg-scale-open')
      return
    }

    document.documentElement.classList.remove(
      'cdg-webpage-drawer-scale',
      scaleBgClassName,
    )
    scaleElement.classList.remove('cdg-drawer-bg-scale-open')
  }, [
    enableScaleBg,
    DrawerElement,
    drawerMode,
    open,
    scaleBgClassName,
    scaleBgOffset,
  ])

  useEffect(() => {
    if (typeof document === 'undefined' || !DrawerElement) {
      return
    }

    scaleBackground()

    if (!open) {
      handleCloseDrawer()
      return
    }

    if (preventFocus) {
      DrawerElement.setAttribute('inert', '')
    }

    drawerMode === 'modal' ? DrawerElement.showModal() : DrawerElement.show()
    DrawerElement.removeAttribute('inert')
  }, [
    open,
    DrawerElement,
    preventFocus,
    handleCloseDrawer,
    drawerMode,
    scaleBackground,
  ])

  return (
    <CssInjection css={css} childrenRef={DrawerRef}>
      <dialog
        ref={DrawerRef}
        {...dialogHTMLAttributes}
        className={classNames(
          drawerMobileStyles.drawer,
          drawerMobileStyles[drawerMode],
          className,
          'cdg-drawer',
        )}
        onMouseDown={handleMouseDown}
        onCancel={preventClose ? (e) => e.preventDefault() : undefined}
      >
        {!disableResize && (
          <div
            className={classNames(
              drawerExpanderStyles.drawerExpander,
              'cdg-drawer-expander',
            )}
          >
            <div
              className={classNames(
                drawerExpanderStyles.expanderLine,
                'cdg-drawer-expander-line',
              )}
            ></div>
          </div>
        )}

        {DrawerHeaderElement}

        <article
          className={`${drawerMobileStyles.drawerContent} cdg-drawer-content`}
        >
          {OtherElements}
        </article>

        {DrawerFooterElement}
      </dialog>
    </CssInjection>
  )
})

export default DrawerMobile
