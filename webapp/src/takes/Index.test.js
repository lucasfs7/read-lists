jest.mock('config/store')

import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'config/store'
import { component as IndexTake } from 'takes/Index'

const setup = (props) => mount(
  <Provider store={ configureStore() }>
    <IndexTake { ...props } />
  </Provider>
)

test('render without crashing', () => {
  const component = setup()
  expect(component.exists()).toEqual(true)
})
