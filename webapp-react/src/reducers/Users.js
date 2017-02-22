import { createAction, handleActions } from 'redux-actions'
import Immutable from 'seamless-immutable'
import { GoogleAuthProvider } from 'firebase/auth'
import firebase from 'config/firebase'
import pick from 'lodash/pick'

export const name = 'users'

const auth = firebase.auth()
const getUserData = (user) => pick(user, ['displayName', 'email', 'photoURL', 'uid'])

const getProviderFor = (string) => {
  const provider = new GoogleAuthProvider()
  provider.addScope('profile')
  provider.addScope('email')
  return provider
}

const fetchCurrentUser = () => new Promise((resolve, reject) => {
  const stopWatch = auth.onAuthStateChanged(
    (user) => {
      if (user) resolve(getUserData(user))
      else reject(null)
      stopWatch()
    }
  )
})

const initialState = {
  currentUser: null,
}

export const loadCurrentUser = createAction(
  'USERS/LOAD_CURRENT_USER',
  () => fetchCurrentUser()
)

export const signin = createAction(
  'USERS/SIGN_IN',
  (provider) => auth
    .signInWithPopup(getProviderFor(provider))
    .then((data) => getUserData(data.user))
)

export const signout = createAction(
  'USERS/SIGN_OUT',
  () => auth
    .signOut()
)

export default handleActions({
  [loadCurrentUser]: (state, action) => Immutable({
    ...state,
    currentUser: action.payload,
  }),
  [signin]: (state, action) => Immutable({
    ...state,
    currentUser: action.payload,
  }),
  [signout]: (state) => Immutable({
    ...state,
    currentUser: null,
  }),
}, initialState)
