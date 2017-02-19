import React, { PropTypes } from 'react'
import { compose } from 'redux'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { withProps } from 'recompose'
import delay from 'lodash/delay'

const ListForm = ({ handleSubmit, addLink, removeLink, className }) => (
  <form onSubmit={ handleSubmit } className={ className }>
    <FieldArray name='links' component={ ({ fields }) => (
      <div>
        <ul>
          { fields.map((fieldName, index) => (
            <li key={ index }>
              <Field name={ fieldName } component='input' type='hidden' />
              <span>{ fields.get(index) }</span>
              <button
                type='button'
                tabIndex={ -1 }
                onClick={ removeLink(fields, index) }>
                x
              </button>
            </li>
          )) }
        </ul>
        <input
          onKeyDown={ addLink(fields) }
          placeholder='link here...'
          autoFocus={ true } />
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

ListForm.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  handleSubmit: PropTypes.func,
  addLink: PropTypes.func,
  removeLink: PropTypes.func,
}

const isLink = new RegExp(/^(\w+)(:\/\/)[\w]\S+$/g)

const update = (props) => ({
  addLink: (fields) => (e) => {
    if (e.key !== 'Enter') return
    e.preventDefault()
    if (!e.target.value.match(isLink)) return
    fields.push(e.target.value)
    e.target.value = ''
  },
  removeLink: (fields, index) => (e) => {
    e.preventDefault()
    fields.remove(index)
  },
})

const formOptions = {
  form: 'List',
  onSubmitSuccess(data, dispatch, props) {
    delay(props.reset, 1)
  }
}

export default compose(
  withProps(update),
  reduxForm(formOptions),
)(ListForm)
