import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { storeToken } from '../actions'
import { tokenRequest } from '../api'

class Login extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field
        const className = `form-group ${touched && error ? 'has-danger': ''}`

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input 
                    className="form-control"
                    type={field.type}
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        console.log("Login please")
        tokenRequest(values)
        .then((response) => {
            this.props.storeToken(response)
            this.props.history.push('/')
        })
    }


    render() {
        const { handleSubmit } = this.props

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    label="Email"
                    name="email"
                    component={this.renderField}
                    type="text"
                />
                <Field 
                    label="Password"
                    name="password"
                    component={this.renderField}
                    type="password"
                />
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        )
    }
}

function validate(values) {
    const errors = {}

    if(!values.username) {
        errors.username = "Enter a username"
    }

    if(!values.password) {
        errors.password = "Enter a password"
    }

    return errors
}

export default reduxForm({
    validate,
    form: 'LoginForm'
})(
    connect(null, {storeToken})(Login)
)