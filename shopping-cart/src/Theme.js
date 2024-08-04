import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/dm-sans'

const theme = extendTheme({
  fonts: {
    heading: `'DM Sans', sans-serif`,
    body: `'DM Sans', sans-serif`
  }
})

export default theme
