/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import {useCallback, useEffect, useRef} from 'react'

interface GlobalListeners {
  addGlobalListener<K extends keyof DocumentEventMap>(
    el: EventTarget,
    type: K,
    listener: any,
    options?: boolean | AddEventListenerOptions,
  ): void
  addGlobalListener(
    el: EventTarget,
    type: string,
    listener: any,
    options?: boolean | AddEventListenerOptions,
  ): void
  removeGlobalListener<K extends keyof DocumentEventMap>(
    el: EventTarget,
    type: K,
    listener: (this: Document, ev: DocumentEventMap[K]) => any,
    options?: boolean | EventListenerOptions,
  ): void
  removeGlobalListener(
    el: EventTarget,
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions,
  ): void
  removeAllGlobalListeners(): void
}

export function useGlobalListeners(): GlobalListeners {
  const globalListeners = useRef(new Map())
  const addGlobalListener = useCallback(
    (eventTarget, type, listener, options) => {
      const fn = options?.once
        ? (...args: any) => {
            globalListeners.current.delete(listener)
            listener(...args)
          }
        : listener
      globalListeners.current.set(listener, {type, eventTarget, fn, options})
      eventTarget.addEventListener(type, listener, options)
    },
    [],
  )
  const removeGlobalListener = useCallback(
    (eventTarget, type, listener, options) => {
      const fn = globalListeners.current.get(listener)?.fn || listener
      eventTarget.removeEventListener(type, fn, options)
      globalListeners.current.delete(listener)
    },
    [],
  )
  const removeAllGlobalListeners = useCallback(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options)
    })
  }, [removeGlobalListener])

  useEffect(() => {
    return removeAllGlobalListeners
  }, [removeAllGlobalListeners])

  return {addGlobalListener, removeGlobalListener, removeAllGlobalListeners}
}
