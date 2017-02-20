import { css } from 'glamor'
import * as colors from 'config/colors'

export const container = css({
  maxWidth: '500px',
  margin: '0 auto',
})

export const lists = css({
  borderTop: `1px solid ${ colors.base6 }`,
  margin: '20px 0 0 0',
  padding: '20px 0',
})
