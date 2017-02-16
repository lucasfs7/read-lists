import { createAction, handleActions } from 'redux-actions'
import Immutable from 'seamless-immutable'

export const name = 'lists'

const initialState = Immutable({
  isFetching: false,
  lists: []
})

export const create = createAction(
  'CREATE_LIST',
  (list) => list
)

export default handleActions({
  [create]: (state, action) => ({
    ...state,
    isFetching: true,
    lists: [ ...state.lists, action.payload ]
  }),
}, initialState)
