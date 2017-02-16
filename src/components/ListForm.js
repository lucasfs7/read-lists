import React from 'react'
import { compose } from 'redux'
import { Field, FieldArray, reduxForm } from 'redux-form'
import delay from 'lodash/delay'

const addOnEnter = (fields) => (e) => {
  if (e.key !== 'Enter') return
  e.preventDefault()
  fields.push(e.target.value)
  e.target.value = ''
}

const ListForm = (props) => (
  <form onSubmit={ props.handleSubmit }>
    <FieldArray name='links' component={ (props) => (
      <div>
        <input
          onKeyDown={ addOnEnter(props.fields) }
          placeholder='link here...'
          autoFocus={ true } />
        <ul>
          { props.fields.map((fieldName, index) => (
            <li key={ index }>
              <Field name={ fieldName } component='input' type='hidden' />
              { props.fields.get(index) }
            </li>
          )) }
        </ul>
      </div>
    ) } />
    <Field name='name' component='input' type='text' placeholder='name your list...' />
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
