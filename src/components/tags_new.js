import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createTag } from '../actions' 
import { createTagRequest } from '../api'

class TagsNew extends Component {   

    renderField(field) {
        const { meta: { touched, error } } = field
        const className = `form-group ${touched && error ? 'has-danger': ''}`

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input 
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        createTagRequest(values)
        .then((response) => {
            this.props.createTag(response)
            this.props.history.push('/tags/')
        })
    }

    render() {
        const { handleSubmit } = this.props

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    label="Name"
                    name="name"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/tags" className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}

function validate(values) {
    const errors = {}

    if(!values.name) {
        errors.name = "Enter a name"
    }

    return errors
}

export default reduxForm({
    validate,
    form: 'TagsNewForm'
})(
    connect(null,{ createTag })(TagsNew)
)