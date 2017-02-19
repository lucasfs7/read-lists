import React from 'react'
import ReactDOM from 'react-dom'
import { component as UserListsTake } from 'takes/UserLists'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<UserListsTake />, div)
})
