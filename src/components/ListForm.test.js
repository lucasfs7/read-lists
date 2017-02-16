import React from 'react'
import ReactDOM from 'react-dom'
import ListForm from 'components/ListForm'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ListForm />, div)
})
