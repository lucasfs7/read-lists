import { css } from 'glamor'
import * as colors from 'config/colors'

export const discover = css({
  margin: '0 auto',
  maxWidth: '500px',
  paddingBottom: '20px',
})

export const searchField = css({
  backgroundColor: 'transparent',
  border: '0',
  color: colors.base6,
  display: 'inline-block',
  padding: '20px',
  width: '100%',
  '&:focus': {
    backgroundColor: '#DDE3DE',
    border: '0',
    outline: '0',
  },
})

export const list = css({
  borderTop: `2px solid ${ colors.base6 }`,
  '& h2': {
    padding: '40px 0 20px',
  },
  '& a': {
    display: 'flex',
    padding: '20px',
    textDecoration: 'none',
    ':hover': {
      backgroundColor: colors.base3,
    },
  },
  '& p': {
    flex: '1',
    margin: 'auto',
  },
  '& span': {
    border: '1px solid',
    borderRadius: '5px',
    margin: 'auto 10px auto 0',
    padding: '1px 5px',
    textAlign: 'center',
    width: '60px',
  },
  '@media(max-width: 500px)': {
    padding: '20px',
  },
})
