import React from '../../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { DragAndDropListItemProps } from '../item';
export declare function getTranslateOffset(element: Element): number;
export declare function transformItem(element: Element, offsetY?: number | null, offsetX?: number | null): void;
export declare function isItemTransformed(element: Element): boolean;
export declare function setItemTransition(element: Element, duration: number, timing?: string): void;
export declare function binarySearch(array: number[], targetValue: number): number;
export declare const schd: (fn: Function) => {
    (...args: any[]): void;
    cancel(): void;
};
export declare function checkIfInteractive(target: Element, rootElement: Element): boolean;
export declare const pickChilds: (children: React.ReactNode | undefined, targetType: React.ElementType) => Array<React.DetailedReactHTMLElement<DragAndDropListItemProps, HTMLElement>>;
