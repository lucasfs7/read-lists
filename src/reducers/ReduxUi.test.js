import { reducer, request } from 'reducers/ReduxUi'

it('should return type REQUEST', () => {
  expect(request()).toEqual({ type: 'REQUEST' })
})

it('should change loading status when request', () => {
  const state = reducer({}, request())
  expect(state).toEqual({ loading: true })
})
