import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import middlewares from 'config/reduxMiddlewares'
import * as UiReducer from 'reducers/ReduxUi'
import * as FormReducer from 'reducers/ReduxForm'
import * as ListsReducer from 'reducers/Lists'
import * as UsersReducer from 'reducers/Users'

const rootReducer = combineReducers({
  [UiReducer.name]: UiReducer.default,
  [FormReducer.name]: FormReducer.default,
  [ListsReducer.name]: ListsReducer.default,
  [UsersReducer.name]: UsersReducer.default,
})

export default (initialState) => createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ),
)
