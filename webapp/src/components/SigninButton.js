import React, { PropTypes } from 'react'
import googleButtonImage from 'components/assets/SigninButton/google.svg'
import * as styles from 'components/SigninButton.styles'

const buttons = {
  'google': googleButtonImage,
}

const SigninButton = ({ onClick, provider }) => (
  <button onClick={ onClick } className={ styles.button }>
    <img src={ buttons[provider] } alt='signin with google' />
  </button>
)

SigninButton.propTypes = {
  provider: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default SigninButton
