import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { lifecycle } from 'recompose'
import * as usersActions from 'reducers/Users'
import * as styles from 'scenes/App.styles'
import { Link } from 'react-router'

const App = ({ children, currentUser, signin, signout }) => (
  <div className={ styles.container }>
    <header className={ styles.header }>
      <h1>
        <Link to='/'>ReadLists</Link>
      </h1>
      { !currentUser &&
        <button onClick={ signin('google') }>signin with google</button>
      }
      { currentUser &&
        <button onClick={ signout }>signout</button>
      }
    </header>
    { children }
  </div>
)

const stateMap = (state) => ({
  currentUser: state.users.currentUser,
})

const dispatchMap = (dispatch) => ({
  loadCurrentUser() {
    dispatch(usersActions.loadCurrentUser())
  },
  signin(provider) {
    return () => {
      dispatch(usersActions.signin(provider))
    }
  },
  signout() {
    dispatch(usersActions.signout())
  },
})

const lifecycleHooks = {
  componentWillMount() {
    this.props.loadCurrentUser()
  }
}

export const component = compose(
  connect(stateMap, dispatchMap),
  lifecycle(lifecycleHooks),
)(App)
