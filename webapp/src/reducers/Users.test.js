import Reducer, * as actions from 'reducers/Users'

test('load current user', () => {
  const user = { displayName: 'test man' }
  const state = Reducer(
    undefined,
    { type: actions.loadCurrentUser, payload: user },
  )
  expect(state).toEqual({ currentUser: user })
})

test('sign in user', () => {
  const user = { displayName: 'test man' }
  const state = Reducer(
    undefined,
    { type: actions.signin, payload: user },
  )
  expect(state).toEqual({ currentUser: user })
})

test('sign out user', () => {
  const state = Reducer(
    undefined,
    { type: actions.signout },
  )
  expect(state).toEqual({ currentUser: null })
})
