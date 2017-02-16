import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Embedly from 'react-embedly'
import * as styles from 'takes/List.styles'

export const path = '/lists(/:id)'
export const scene = 'app'
export const onEnter = (props, replace) => {
  if (!props.params.id) replace('/')
}

const List = (props) => (
  <div className={ styles.container }>
    { !props.list &&
        <div className={ styles.notFound }>
          <h1>List Not Found</h1>
          <Link to='/'>Create a list</Link>
        </div>
    }
    { props.list &&
      <div className={ styles.container }>
        <h1 className={ styles.title }>{ props.list.name }</h1>
        { props.list.links.map((link, index) => (
          <div
            key={ index }
            className={ styles.link }>
            <Embedly
              url={ link }
              apiKey='d3584d5e925a4557b14976bf4f06d0b4' />
          </div>
        )) }
      </div>
    }
  </div>
)

const stateMap = (state, props) => ({
  list: state.lists.lists.find((list) => list.id === props.params.id),
})

export const component = compose(
  connect(stateMap),
)(List)
