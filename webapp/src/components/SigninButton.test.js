import React from 'react'
import ReactDOM from 'react-dom'
import SigninButton from 'components/SigninButton'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SigninButton />, div)
})
