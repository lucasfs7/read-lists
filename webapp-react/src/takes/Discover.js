import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { lifecycle } from 'recompose'
import { browserHistory } from 'react-router'
import { Link } from 'react-router'
import reverse from 'lodash/fp/reverse'
import filter from 'lodash/fp/filter'
import * as listsActions from 'reducers/Lists'

export const path = '/discover'
export const scene = 'app'

const Discover = ({
  lists = [],
  location: { query },
  doSearch,
}) => (
  <div>
    <input type='text' onChange={ doSearch } defaultValue={ query.q } />
    <ul>
      { compose(
        filter((list) => list.name.toLowerCase().match((query.q || '').toLowerCase())),
        filter((list) => !list.private),
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
  lists: state.lists.lists,
})

const dispatchMap = (dispatch, props) => ({
  loadLists() {
    dispatch(listsActions.loadAll())
  },
  doSearch(e) {
    e.preventDefault()
    browserHistory.push(`/discover?q=${ e.target.value }`)
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
)(Discover)
