import { css } from 'glamor'
import * as colors from 'config/colors'

export const container = css({
  maxWidth: '500px',
  margin: '0 auto',
})

export const loading = css({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '& h1': {
    backgroundColor: colors.base3,
    display: 'inline-block',
    fontSize: '5em',
    textAlign: 'center',
  },
})

export const notFound = css({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '& h1': {
    backgroundColor: colors.base3,
    display: 'inline-block',
    fontSize: '5em',
    textAlign: 'center',
  },
})

export const title = css({
  fontSize: '2em',
  margin: '20px 0',
  textAlign: 'center',
})

export const icon = css({
  marginRight: '10px',
  cursor: 'pointer',
  '&:hover': {
    fill: colors.base1,
  },
})

export const claim = css({
  textAlign: 'center',
})

export const claimButton = css({
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 'bold',
  margin: '0 5px',
  outline: 'none',
  textDecoration: 'underline',
})

export const link = css({
  marginTop: '20px',
  padding: '20px',
  '&:hover': {
    backgroundColor: colors.base3,
  },
  '& .embedly ': {
    border: 'none !important',
  },
})
