import React from '../../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../../utils';
interface Props {
    css?: CSS;
    variant?: 'primary-light' | 'primary-dark' | 'gray-light';
}
export type BannerProps = Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>;
declare const Banner: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props> & React.RefAttributes<HTMLDivElement>>;
export default Banner;
