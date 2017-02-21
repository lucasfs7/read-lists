import Reducer, * as actions from 'reducers/Lists'

test('create a new list', () => {
  const list = { name: 'new list', links: [] }
  const state = Reducer(
    undefined,
    { type: actions.create, payload: list },
  )
  expect(state).toEqual({ lists: [ list ] })
})

test('update a list', () => {
  const list = { name: 'list 1', links: [], id: 1 }
  const updatedList = { ...list, links: [ 'link 1' ] }
  const state = Reducer(
    { lists: [ list ] },
    { type: actions.update, payload: updatedList },
  )
  expect(state).toEqual({ lists: [ updatedList ] })
})

test('remove a list', () => {
  const list = { name: 'new list', links: [], id: 1 }
  const state = Reducer(
    { lists: [ list ] },
    { type: actions.remove, payload: list },
  )
  expect(state).toEqual({ lists: [] })
})

test('load a list inside empty list', () => {
  const list = { name: 'list 3', links: [], id: 3 }
  const state = Reducer(
    undefined,
    { type: actions.load, payload: list },
  )
  expect(state).toEqual({ lists: [ list ] })
})

test('load a list inside an existing array of lists', () => {
  const lists = [
    { name: 'list 1', links: [], id: 1 },
    { name: 'list 2', links: [], id: 2 }
  ]
  const newList = { name: 'list 3', links: [], id: 3 }
  const state = Reducer(
    { lists },
    { type: actions.load, payload: newList },
  )
  expect(state).toEqual({ lists: [ ...lists, newList ] })
})

test('load all lists', () => {
  const lists = [
    { name: 'list 1', links: [], id: 1 },
    { name: 'list 2', links: [], id: 2 },
  ]
  const state = Reducer(
    undefined,
    { type: actions.loadAll, payload: lists },
  )
  expect(state).toEqual({ lists })
})
