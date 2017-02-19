import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { lifecycle } from 'recompose'
import * as usersActions from 'reducers/Users'
import * as styles from 'scenes/App.styles'
import { Link } from 'react-router'
import SigninButton from 'components/SigninButton'

const App = ({ children, currentUser, signin, signout }) => (
  <div className={ styles.container }>
    <header className={ styles.header }>
      <h1 className={ styles.title }>
        <Link to='/'>ReadLists</Link>
      </h1>
      { !currentUser &&
        <div className={ styles.signin }>
          <p>Sign in:</p>
          <SigninButton onClick={ signin('google') } provider='google' />
        </div>
      }
      { currentUser &&
        <button onClick={ signout } className={ styles.signout }>Sign out</button>
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
