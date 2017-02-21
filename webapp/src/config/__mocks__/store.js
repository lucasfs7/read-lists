import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import middlewares from 'config/reduxMiddlewares'
import * as UiReducer from 'reducers/ReduxUi'
import * as FormReducer from 'reducers/ReduxForm'

const rootReducer = combineReducers({
  [UiReducer.name]: UiReducer.default,
  [FormReducer.name]: FormReducer.default,
})

export default (initialState) => createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ),
)
