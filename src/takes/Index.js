import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as linksListActions from 'reducers/LinksList'

export const path = '/'
export const scene = 'app'

const stateMap = (state) => ({
  linksList: state.linksList,
})

const dispatchMap = (dispatch) => ({
  addLink(e) {
    e.preventDefault()
    dispatch(linksListActions.addLink(e.target[0].value))
  }
})

export const component = compose(
  connect(stateMap, dispatchMap)
)((props) => (
  <div>
    <h1>add links</h1>
    <form onSubmit={ props.addLink }>
      <input placeholder='paste a link here' />
    </form>
    <ul>
      { props.linksList.links.map((link, index) => (
        <li key={ index }>{ link }</li>
      )) }
    </ul>
  </div>
))

