import { createAction, handleActions } from 'redux-actions'
import Immutable from 'seamless-immutable'
import firebase from 'config/firebase'

const db = firebase.database().ref('lists')

export const name = 'lists'

const initialState = Immutable({
  isFetching: false,
  lists: []
})

export const create = createAction(
  'CREATE_LIST',
  (list) => db
    .push(list)
    .once('value')
    .then((data) => ({ ...data.val(), id: data.key }))
)

export default handleActions({
  [create]: (state, action) => Immutable({
    ...state,
    lists: [ ...state.lists, action.payload ]
  }),
}, initialState)
