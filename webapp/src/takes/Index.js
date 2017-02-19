import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { lifecycle } from 'recompose'
import reverse from 'lodash/fp/reverse'
import take from 'lodash/fp/take'
import * as listsActions from 'reducers/Lists'
import * as styles from 'takes/Index.styles'

import ListForm from 'components/ListForm'

export const path = '/'
export const scene = 'app'

const IndexTake = ({ lists, currentUser, createList }) => (
  <div className={ styles.container }>
    <ListForm onSubmit={ createList(currentUser) } className={ styles.form } />
    <div className={ styles.lists }>
      <h2>Recent Lists</h2>
      <ul>
        { compose(
            take(10),
            reverse,
          )(lists).map((list, index) => (
          <li key={ index }>
            <Link to={ `/lists/${ list.id }` }>
              { list.name } ({ list.links.length } link{ list.links.length > 1 && 's'})
            </Link>
          </li>
        )) }
      </ul>
    </div>
  </div>
)

const stateMap = (state) => ({
  lists: state.lists.lists,
  currentUser: state.users.currentUser,
})

const dispatchMap = (dispatch, props) => ({
  createList(user = {}) {
    return (data) => {
      dispatch(listsActions.create({ ...data, owner: user.uid }))
    }
  },
  loadLists() {
    dispatch(listsActions.loadAll())
  },
})

const lifecycleHooks = {
  componentDidMount() {
    this.props.loadLists()
  },
}

export const component = compose(
  connect(stateMap, dispatchMap),
  lifecycle(lifecycleHooks),
)(IndexTake)
