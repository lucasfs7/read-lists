import { css } from 'glamor'
import * as colors from 'config/colors'

export const form = {
  '& input': {
    backgroundColor: 'transparent',
    border: 'none',
    color: colors.base6,
    display: 'inline-block',
    width: '100%',
    padding: '20px',
    '&:focus': {
      backgroundColor: '#DDE3DE',
      border: 'none',
      outline: 'none',
    },
  },
}

export const container = css({
  ...form,
})

export const title = css({
  fontSize: '2em',
  margin: '20px',
})

export const lists = css({
  backgroundColor: colors.base3,
  borderTop: `5px solid ${ colors.base4 }`,
})
