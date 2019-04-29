import { primitives } from './light-theme'
import { createTheme, lightThemePrimitives } from 'baseui'

// TODO: For now let's extend it from `lightThemePrimitives`

const Jasmine = createTheme({
  ...lightThemePrimitives,
  ...primitives
})

export default Jasmine