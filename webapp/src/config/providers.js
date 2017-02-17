import React from 'react'

/* define your providers here (example: redux provider) */

import { Provider as ReduxProvider } from 'react-redux'
import configureStore from 'config/store'

export const ReduxProviderProvider = (next) => (
  <ReduxProvider store={ configureStore() }>
    { next }
  </ReduxProvider>
)


