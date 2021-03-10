import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createIngredient } from '../actions' 

class IngredientsNew extends Component {   

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
        this.props.createIngredient(this.state.props, values)
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

function mapStateToProps(state) {
    return {
        token: state.token
    }
}

export default reduxForm({
    validate,
    form: 'IngredientsNewForm'
})(
    connect(mapStateToProps,{ createIngredient })(IngredientsNew)
)