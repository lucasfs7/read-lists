import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { lifecycle } from 'recompose'
import reverse from 'lodash/fp/reverse'
import take from 'lodash/fp/take'
import * as listsActions from 'reducers/Lists'
import * as styles from 'takes/Index.styles'

export const path = '/me/lists'
export const scene = 'app'

const UserLists = ({ lists, currentUser }) => (
  <div className={ styles.container }>
    <h2>{ lists.length } Lists</h2>
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
)

const stateMap = (state) => ({
  lists: state.lists.lists.filter((list) => list.owner === state.users.currentUser.uid),
  currentUser: state.users.currentUser,
})

const dispatchMap = (dispatch, props) => ({
  loadLists() {
    dispatch(listsActions.loadAll())
  },
})

const lifecycleHooks = {
  componentWillMount() {
    this.props.loadLists()
  },
}

export const component = compose(
  connect(stateMap, dispatchMap),
  lifecycle(lifecycleHooks),
)(UserLists)
