import { css } from 'glamor'
import * as colors from 'config/colors'

export const form = css({
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
  '& input[type="checkbox"]': {
    marginRight: '5px',
    width: 'auto',
  },
  '& label': {
    backgroundColor: '#DDE3DE',
    display: 'block',
    fontWeight: 'bold',
    padding: '20px',
  },
  '& button': {
    background: colors.base3,
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
  },
  '& button[type="button"]': {
    borderRadius: '50%',
    color: colors.base4,
    height: '1em',
    lineHeight: '1em',
    width: '1em',
  },
  '& button[type="submit"]': {
    color: colors.base1,
    fontWeight: '600',
    padding: '20px',
    textTransform: 'uppercase',
    width: '100%',
  }
})

export const list = css({
  color: colors.base1,
  fontWeight: '600',
  padding: '20px',
  wordWrap: 'break-word',
})

export const link = css({
  margin: '10px 0',
  '& span': {
    marginRight: '10px',
  },
})
