import { css } from 'glamor'
import * as colors from 'config/colors'

export const list = css({
  margin: '0 auto',
  maxWidth: '500px',
  padding: '10px',
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
  margin: '15px 10px 30px',
  textAlign: 'center',
})

export const icon = css({
  cursor: 'pointer',
  marginRight: '10px',
  '&:hover': {
    fill: colors.base1,
  },
})

export const claim = css({
  textAlign: 'center',
})

export const claimButton = css({
  backgroundColor: 'transparent',
  border: '0',
  cursor: 'pointer',
  fontWeight: 'bold',
  margin: '0 5px',
  outline: '0',
  textDecoration: 'underline',
})

export const link = css({
  marginBottom: '25px',
  '& .embedly': {
    backgroundColor: 'white',
    border: '0 !important',
    ':hover': {
      backgroundColor: colors.base3,
    }
  },
  '& .embedly__image': {
    height: '100% !important',
  },
})
