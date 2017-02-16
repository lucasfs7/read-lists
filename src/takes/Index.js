import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as listsActions from 'reducers/Lists'
import * as styles from 'takes/Index.styles'

import ListForm from 'components/ListForm'

export const path = '/'
export const scene = 'app'

const IndexTake = (props) => (
  <div className={ styles.container }>
    <ListForm onSubmit={ props.createList } className={ styles.form } />
    <div className={ styles.lists }>
      <h2>Your Lists ({ props.listsData.lists.length })</h2>
      <ul>
        { props.listsData.lists.map((list) => (
          <li key={ list.id }>
            <Link to={ `/lists/${ list.id }` }>
              { list.name } - { list.links.length } link{ list.links.length > 1 && 's'}
            </Link>
          </li>
        )) }
      </ul>
    </div>
  </div>
)

const stateMap = (state) => ({
  listsData: state.lists,
})

const dispatchMap = (dispatch) => ({
  createList(data) {
    dispatch(listsActions.create(data))
  }
})

export const component = compose(
  connect(stateMap, dispatchMap)
)(IndexTake)
