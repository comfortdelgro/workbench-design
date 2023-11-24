import {Box, theme} from '@comfortdelgro/react-compass-old'
import ColorBox from '../components/ColorBox'

const DemoColors = () => {
  return (
    <Box css={{display: 'flex', flexWrap: 'wrap'}}>
      <ColorBox color={theme.colors.primaryText} />
      <ColorBox color={theme.colors.secondaryText} />
      <ColorBox color={theme.colors.disabledText} />
      <ColorBox color={theme.colors.whiteText} />
    </Box>
  )
}

export default DemoColors
