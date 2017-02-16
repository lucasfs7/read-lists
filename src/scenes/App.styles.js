import { css } from 'glamor'
import * as colors from 'config/colors'

export const container = css({
  backgroundColor: colors.base5,
  color: colors.base6,
  height: '100vh',
})

export const header = css({
  padding: '20px',
  textAlign: 'center',
  fontSize: '4em',
  maxWidth: '500px',
  margin: '0 auto',
  position: 'relative',
  textShadow: `3px 3px 0 ${ colors.base1 } , 4px 4px 0 ${ colors.base1 }`,
})
