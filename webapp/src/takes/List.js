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

export const path = '/lists(/:id)'
export const scene = 'app'
export const onEnter = (props, replace) => {
  if (!props.params.id) replace('/')
}

const List = ({ ui, list, updateList, removeList, startEditing }) => (
  <div className={ styles.container }>
    { ui.loading &&
      <div className={ styles.loading }>
        <h1>Loading ...</h1>
      </div>
    }
    { !list && !ui.loading &&
      <div className={ styles.notFound }>
        <h1>List Not Found</h1>
        <Link to='/'>Create a list</Link>
      </div>
    }
    { list && !ui.isEditing &&
      <div className={ styles.container }>
        <h1 className={ styles.title }>
          { list.name } |
          <button onClick={ removeList(list) }>remove</button>
          <button onClick={ startEditing }>edit</button>
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
      <ListForm
        onSubmit={ updateList }
        initialValues={ list }
        className={ styles.form } />
    }
  </div>
)

const stateMap = (state, props) => ({
  list: state.lists.lists.find((list) => list.id === props.params.id),
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
    await this.props.loadList()
    this.props.updateUI({ loading: false })
  },
}

export const component = compose(
  ui(uiMap),
  connect(stateMap, dispatchMap),
  lifecycle(lifecycleHooks),
)(List)
