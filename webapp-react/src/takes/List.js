import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { lifecycle } from 'recompose'
import { browserHistory } from 'react-router'
import ui from 'redux-ui'
import * as listsActions from 'reducers/Lists'
import * as styles from 'takes/List.styles'
import Embedly from 'react-embedly'
import ListForm from 'components/ListForm'
import Icon from 'components/Icon'
import Helmet from 'react-helmet'

export const path = '/lists(/:id)'
export const scene = 'app'
export const onEnter = (props, replace) => {
  if (!props.params.id) replace('/')
}

const List = ({
  list,
  currentUser,
  ui,
  updateList,
  removeList,
  claimOwnership,
  startEditing
}) => (
  <div className={ styles.list }>
    { ui.loading &&
      <div className={ styles.loading }>
        <h1>Loading ...</h1>
      </div>
    }
    { !list && !ui.loading &&
      <div className={ styles.notFound }>
        <Helmet title='List Not Found' />
        <h1>List Not Found</h1>
        <Link to='/'>Create a list</Link>
      </div>
    }
    { list && !ui.isEditing &&
      <div className={ styles.container }>
        <Helmet title={ list.name } />
        { currentUser && !list.owner &&
          <p className={ styles.claim }>This list doesn't have an owner:
            <button
              onClick={ claimOwnership(list, currentUser) }
              className={ styles.claimButton }>
              claim it
            </button>
          </p>
        }
        <h1 className={ styles.title }>
          { list.name }
          { currentUser && currentUser.uid === list.owner &&
            <span>
              <span> | </span>
              <i className={ styles.icon }>
                <Icon name='LiTrash' onClick={ removeList(list) } />
              </i>
              <i className={ styles.icon }>
                <Icon name='LiPencil' onClick={ startEditing } />
              </i>
            </span>
          }
        </h1>
        { list.links.map((link, index) => (
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
    { list && ui.isEditing &&
      <div>
        <Helmet title={ list.name } />
        <ListForm
          onSubmit={ updateList }
          initialValues={ list }
          className={ styles.form }
          privateAllowed={ !!currentUser } />
      </div>
    }
  </div>
)

const stateMap = (state, props) => ({
  list: state.lists.lists.find((list) => list.id === props.params.id),
  currentUser: state.users.currentUser,
})

const dispatchMap = (dispatch, props) => ({
  loadList() {
    return dispatch(listsActions.load(props.params.id))
  },
  updateList(data) {
    dispatch(listsActions.update(data))
    props.updateUI({ isEditing: false })
  },
  removeList(list) {
    return () => {
      dispatch(listsActions.remove(list))
      browserHistory.push('/')
    }
  },
  claimOwnership(list, user) {
    return () => {
      dispatch(listsActions.update({ ...list, owner: user.uid }))
    }
  },
  startEditing() {
    props.updateUI({ isEditing: true })
  },
})

const uiMap = { state: {
  loading: true,
  isEditing: false,
} }

const lifecycleHooks = {
  async componentDidMount() {
    if (!this.props.list) await this.props.loadList()
    this.props.updateUI({ loading: false })
  },
}

export const component = compose(
  ui(uiMap),
  connect(stateMap, dispatchMap),
  lifecycle(lifecycleHooks),
)(List)
