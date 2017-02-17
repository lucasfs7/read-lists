import { createAction, handleActions } from 'redux-actions'
import Immutable from 'seamless-immutable'
import firebase from 'config/firebase'
import entries from 'lodash/entries'

const db = firebase.database().ref('lists')
const getList = (snapshot) => ({ ...snapshot.val(), id: snapshot.key })
const getLists = (snapshot) => entries(snapshot.val()).map(([ id, list ]) => ({ ...list, id }))
const verifyExistence = (snapshot) => {
  if (!snapshot.exists()) throw new Error('404')
  return snapshot
}

export const name = 'lists'

const initialState = Immutable({
  lists: []
})

export const create = createAction(
  'LISTS/CREATE',
  (list) => db
    .push(list)
    .once('value')
    .then(verifyExistence)
    .then(getList)
)

export const loadAll = createAction(
  'LISTS/LOAD_ALL',
  () => db
    .once('value')
    .then(verifyExistence)
    .then(getLists)
)

export const load = createAction(
  'LISTS/LOAD',
  (id) => db
    .child(id)
    .once('value')
    .then(verifyExistence)
    .then(getList)
)

export default handleActions({
  [create]: (state, action) => Immutable({
    ...state,
    lists: [ ...state.lists, action.payload ]
  }),
  [loadAll]: (state, action) => Immutable({
    ...state,
    lists: [ ...action.payload ]
  }),
  [load]: (state, action) => Immutable({
    ...state,
    lists: [ ...state.lists, action.payload ]
  }),
}, initialState)
