import React from 'react'
import * as styles from 'scenes/App.styles'
import { Link } from 'react-router'

export const component = (props) => (
  <div className={ styles.container }>
    <header className={ styles.header }>
      <h1>
        <Link to='/'>ReadLists</Link>
      </h1>
    </header>
    { props.children }
  </div>
)
