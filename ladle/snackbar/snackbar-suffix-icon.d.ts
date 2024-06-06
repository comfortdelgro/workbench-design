import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
interface Props {
    children?: React.ReactNode;
    onClose?: () => void;
    css?: CSS;
    className?: string;
}
export type SnackbarSuffixIconProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const SnackbarSuffixIcon: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default SnackbarSuffixIcon;
