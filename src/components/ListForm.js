import React from 'react'
import { compose } from 'redux'
import { Field, FieldArray, reduxForm } from 'redux-form'
import delay from 'lodash/delay'

const isLink = new RegExp(/^(\w+)(:\/\/)[\w]\S+$/g)

const addLink = (fields) => (e) => {
  if (e.key !== 'Enter') return
  e.preventDefault()
  if (!e.target.value.match(isLink)) return
  fields.push(e.target.value)
  e.target.value = ''
}
const removeLink = (fields, index) => (e) => {
  e.preventDefault()
  fields.remove(index)
}

const ListForm = (props) => (
  <form onSubmit={ props.handleSubmit }>
    <FieldArray name='links' component={ (props) => (
      <div>
        <input
          onKeyDown={ addLink(props.fields) }
          placeholder='link here...'
          autoFocus={ true } />
        <ul>
          { props.fields.map((fieldName, index) => (
            <li key={ index }>
              <Field name={ fieldName } component='input' type='hidden' />
              { props.fields.get(index) }
              <button onClick={ removeLink(props.fields, index) }>
                x
              </button>
            </li>
          )) }
        </ul>
      </div>
    ) } />
    <Field
      name='name'
      component='input'
      type='text'
      required={ true }
      placeholder='name your list...' />
    <button type='submit'>Save</button>
  </form>
)

const formOptions = {
  form: 'List',
  onSubmitSuccess(data, dispatch, props) {
    delay(props.reset, 1)
  }
}

export default compose(
  reduxForm(formOptions)
)(ListForm)
