jest.mock('config/store')

import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'config/store'
import ListForm from 'components/ListForm'

const setup = (props) => mount(
  <Provider store={ configureStore() }>
    <ListForm { ...props } />
  </Provider>
)

test('render without crashing', () => {
  const component = setup()
  expect(component.exists()).toEqual(true)
})

test('render a form', () => {
  const component = setup()
  expect(component.find('form').length).toEqual(1)
})

test('initialize with empty links list', () => {
  const component = setup()
  expect(component.find('ul > li').length).toEqual(0)
})

test('add link', () => {
  const component = setup()
  component.find('div > input').simulate('keyDown', {
    key: 'Enter',
    target: { value: 'https://media2.giphy.com/media/h9KtiB6DgiS2s/giphy.gif' }
  })
  expect(component.find('ul > li').length).toEqual(1)
})

test('don\'t add invalid links', () => {
  const component = setup()
  component.find('div > input').simulate('keyDown', {
    key: 'Enter',
    target: { value: 'not a link' }
  })
  expect(component.find('ul > li').length).toEqual(0)
})

test('remove link', () => {
  const component = setup({ initialValues: {
    links: [ 'https://media2.giphy.com/media/h9KtiB6DgiS2s/giphy.gif' ]
  }})
  component.find('ul > li > button').simulate('click')
  expect(component.find('ul > li').length).toEqual(0)
})

test('trigger submit', () => {
  const initialValues = {
    name: 'form test',
    links: [ 'https://media2.giphy.com/media/h9KtiB6DgiS2s/giphy.gif' ]
  }
  const onSubmit = jest.fn()
  const component = setup({ initialValues, onSubmit })
  component.find('form').first().simulate('submit')
  expect(onSubmit).toBeCalledWith(initialValues, expect.anything(), expect.anything())
})
