import {styled} from '../theme'

export const StyledReactTableRow = styled('tr', {
  background: '$whiteText',
  backgroundColor: 'transparent',
  borderLeftWidth: '$medium',
  borderLeftStyle: 'solid',
  borderLeftColor: 'transparent',
  borderWidth: `$borderWidths.light`,
  transition: '$default',
  variants: {
    disabled: {
      true: {
        backgroundColor: '$whiteText',
        borderColor: '$gray50',
      },
    },
  },
})
