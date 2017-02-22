import React from 'react'
import { shallow } from 'enzyme'
import SigninButton from 'components/SigninButton'

const setup = (props) => (
  shallow(<SigninButton { ...props } />)
)

test('renders a button', () => {
  const component = setup({ provider: 'google' })
  expect(component.name()).toEqual('button')
})

test('render an image inside the button', () => {
  const component = setup({ provider: 'google' })
  expect(component.find('img').exists()).toEqual(true)
})
