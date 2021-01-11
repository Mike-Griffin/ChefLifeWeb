import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class RecipesNew extends Component {

    renderTextField(field) {
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
        console.log(values)
    }

    render() {
        const { handleSubmit } = this.props

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    label="Title"
                    name="title"
                    component={this.renderTextField}
                />
                <div>
                    <label>Tag</label>
                    <div>
                        <Field name="tag" component="select">
                            <option></option>
                            <option value="1">Vegan</option>
                            <option value="2">Paleo</option>
                        </Field>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'RecipesNewForm'
})(RecipesNew)