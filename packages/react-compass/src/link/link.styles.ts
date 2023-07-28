import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledLink = styled('a', {
  fontFamily: 'inherit',
  fontWeight: '$medium',
  color: '$info',
  textDecoration: 'underline',
  transition: '$default',
})

export type LinkVariantProps = VariantProps<typeof StyledLink>
