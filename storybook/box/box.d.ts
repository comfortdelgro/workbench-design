import React from '../../../../node_modules/.pnpm/react@18.3.1/node_modules/react';
import { CSS } from '../utils/objectToCss';
export type BoxProps = Props & Omit<React.HTMLAttributes<HTMLElement>, keyof Props>;
interface Props {
    children?: React.ReactNode;
    css?: CSS;
    className?: string;
    as?: React.ElementType;
    border?: string;
    borderBottom?: string;
    borderColor?: string;
    borderLeft?: string;
    borderRadius?: string;
    borderRight?: string;
    borderTop?: string;
    boxShadow?: string;
    displayPrint?: string;
    displayRaw?: string;
    alignContent?: string;
    alignItems?: string;
    alignSelf?: string;
    flex?: string;
    flexDirection?: string;
    flexGrow?: string;
    flexShrink?: string;
    flexWrap?: string;
    justifyContent?: string;
    order?: string;
    gap?: string;
    columnGap?: string;
    rowGap?: string;
    gridColumn?: string;
    gridRow?: string;
    gridAutoFlow?: string;
    gridAutoColumns?: string;
    gridAutoRows?: string;
    gridTemplateColumns?: string;
    gridTemplateRows?: string;
    gridTemplateAreas?: string;
    gridArea?: string;
    bgcolor?: string;
    color?: string;
    bottom?: string;
    left?: string;
    position?: string;
    right?: string;
    top?: string;
    zIndex?: string;
    height?: string;
    maxHeight?: string;
    maxWidth?: string;
    minHeight?: string;
    minWidth?: string;
    width?: string;
    boxSizing?: string;
    margin?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
    marginTop?: string;
    marginX?: string;
    marginY?: string;
    marginInline?: string;
    marginInlineStart?: string;
    marginInlineEnd?: string;
    marginBlock?: string;
    marginBlockStart?: string;
    marginBlockEnd?: string;
    padding?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
    paddingTop?: string;
    paddingX?: string;
    paddingY?: string;
    paddingInline?: string;
    paddingInlineStart?: string;
    paddingInlineEnd?: string;
    paddingBlock?: string;
    paddingBlockStart?: string;
    paddingBlockEnd?: string;
    typography?: string;
    fontFamily?: string;
    fontSize?: string;
    fontStyle?: string;
    fontWeight?: string;
    letterSpacing?: string;
    lineHeight?: string;
    textAlign?: string;
}
declare const Box: React.ForwardRefExoticComponent<Props & Omit<React.HTMLAttributes<HTMLElement>, keyof Props> & React.RefAttributes<HTMLElement>>;
export default Box;