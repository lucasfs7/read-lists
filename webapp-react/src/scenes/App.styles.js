import { css } from 'glamor'
import * as colors from 'config/colors'

export const container = css({
  backgroundColor: colors.base5,
  color: colors.base6,
  minHeight: '100vh',
})

export const header = css({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '500px',
  margin: '0 auto',
  padding: '20px',
  position: 'relative',
})

export const title = css({
  fontSize: '4em',
  textShadow: `3px 3px 0 ${ colors.base1 } , 4px 4px 0 ${ colors.base1 }`,
  '& a': {
    textDecoration: 'none',
  },
})

export const signin = css({
  fontSize: '0.7em',
  fontWeight: 'bold',
  textAlign: 'center',
})

export const signout = css({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 'bold',
  textDecoration: 'underline',
})
