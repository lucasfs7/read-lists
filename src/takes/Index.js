import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as listsActions from 'reducers/Lists'
import * as styles from 'takes/Index.styles'

import ListForm from 'components/ListForm'

export const path = '/'
export const scene = 'app'

const stateMap = (state) => ({
  listsData: state.lists,
})

const dispatchMap = (dispatch) => ({
  createList(data) {
    dispatch(listsActions.create(data))
  }
})

const IndexTake = (props) => (
  <div className={ styles.container }>
    <ListForm onSubmit={ props.createList } className={ styles.form } />
    <div className={ styles.lists }>
      <h2>Your Lists ({ props.listsData.lists.length })</h2>
      <ul>
        { props.listsData.lists.map((list, index) => (
          <li key={ index }>
            { list.name } - { list.links.length } link(s)
          </li>
        )) }
      </ul>
    </div>
  </div>
)

export const component = compose(
  connect(stateMap, dispatchMap)
)(IndexTake)
