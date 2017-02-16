import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as listsActions from 'reducers/Lists'

import ListForm from 'components/ListForm'

export const path = '/'
export const scene = 'app'

const stateMap = (state) => ({
  listsData: state.lists,
})

const dispatchMap = (dispatch) => ({
  createList(data, e, form) {
    dispatch(listsActions.create(data))
    form.reset()
  }
})

const IndexTake = (props) => (
  <div>
    <h2>New List</h2>
    <ListForm onSubmit={ props.createList } />
    <h2>Your Lists ({ props.listsData.lists.length })</h2>
    <ul>
      { props.listsData.lists.map((list, index) => (
        <li key={ index }>
          { list.name } - { list.links.length } link(s)
        </li>
      )) }
    </ul>
  </div>
)

export const component = compose(
  connect(stateMap, dispatchMap)
)(IndexTake)
