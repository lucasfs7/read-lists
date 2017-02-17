import { createAction, handleActions } from 'redux-actions'
import Immutable from 'seamless-immutable'
import firebase from 'config/firebase'
import entries from 'lodash/entries'

const db = firebase.database().ref('lists')


export const name = 'lists'

const initialState = Immutable({
  isFetching: false,
  lists: []
})

export const create = createAction(
  'LISTS/CREATE',
  (list) => db
    .push(list)
    .once('value')
    .then((data) => ({ ...data.val(), id: data.key }))
)

export const loadAll = createAction(
  'LISTS/LOAD_ALL',
  () => db
  .once('value')
  .then((data) => entries(data.val()).map(([ id, list ]) => ({ ...list, id })))
)

export default handleActions({
  [create]: (state, action) => Immutable({
    ...state,
    lists: [ ...state.lists, action.payload ]
  }),
  [loadAll]: (state, action) => Immutable({
    ...state,
    lists: [ ...action.payload ]
  })
}, initialState)
