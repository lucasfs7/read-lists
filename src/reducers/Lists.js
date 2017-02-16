import { createAction, handleActions } from 'redux-actions'
import Immutable from 'seamless-immutable'
import uuid from 'uuid/v4'

export const name = 'lists'

const initialState = Immutable({
  isFetching: false,
  lists: []
})

export const create = createAction(
  'CREATE_LIST',
  (list) => ({ ...list, id: uuid() })
)

export default handleActions({
  [create]: (state, action) => ({
    ...state,
    lists: [ ...state.lists, action.payload ]
  }),
}, initialState)
