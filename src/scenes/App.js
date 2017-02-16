import React from 'react'
import * as styles from 'scenes/App.styles'

export const component = (props) => (
  <div className={ styles.container }>
    <header className={ styles.header }>
      <h1>ReadLists</h1>
    </header>
    { props.children }
  </div>
)
