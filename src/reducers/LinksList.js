import { createAction, handleActions } from 'redux-actions'
import Immutable from 'seamless-immutable'

export const name = 'linksList'

const initialState = Immutable({
  isFetching: false,
  links: []
})

export const addLink = createAction(
  'ADD_LINK',
  (link) => link
)

export default handleActions({
  [addLink]: (state, action) => ({
    ...state,
    links: [ ...state.links, action.payload ]
  })
}, initialState)
