import React from 'react'
// import { render } from 'react-dom'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {

  await sleep(300)
  // window.alert(JSON.stringify(values, 0, 2))
}

const required = value => (value ? undefined : 'Required')
// const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)
// const minValue = min => value =>
//   isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
// const composeValidators = (...validators) => value =>
//   validators.reduce((error, validator) => error || validator(value), undefined)
 

const Contact = () => (
  <Styles>
            
  <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
          <Field name="name" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Name</label>
                <input {...input} type="text" placeholder="Name" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="email" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Email</label>
                <input {...input} type="email" placeholder="Email" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field
            name="needType"
            // validate={required}
          >
            {({ input, meta }) => (
              <div>
                <label>Need Type</label>
                <select>
                  <option value="VISA">VISA and related questions</option>
                  <option value="Job">Job and career related queries</option>
                  <option value="Property">Property and related queries</option>
                  <option value="Business">Financial/Business Opportunities</option>
                  <option value="Social">Social needs</option>
                  <option value="Others">Other queries</option>
                </select>
                {/* {meta.error && meta.touched && <span>{meta.error}</span>} */}
              </div>
            )}
          </Field>
          <Field
            name="message"
          >
            {({ input, meta }) => (
              <div>
                <label>Message</label>
                {/* <input {...input} type="textarea" rows="5" /> */}
                <textarea name="message" id="message" rows="5" />
                {/* {meta.error && meta.touched && <span>{meta.error}</span>} */}
              </div>
            )}
          </Field>
          <div className="buttons">
            <button type="submit" disabled={submitting}>
              Submit
            </button>
            {/* <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button> */}
          </div>
          {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
        </form>
      )}
    />
    </Styles>
)

export default Contact
