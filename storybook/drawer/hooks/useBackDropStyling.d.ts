import { type RefObject } from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import type { DrawerProps, DrawerRef } from '../types';
export declare const useBackDropStyling: (drawerRef: RefObject<DrawerRef>, backdropProps: DrawerProps['backdropProps']) => {
    backdropStyles: {
        "--cdg-drawer-backdrop-opacity": number;
        "--cdg-drawer-backdrop-blur": string;
        "--cdg-drawer-backdrop-bg": string;
    };
};
