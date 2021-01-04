import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class TagsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input 
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        )
    }

    render() {
        return (
            <form>
                <Field 
                    label="Name"
                    name="name"
                    component={this.renderField}
                />
            </form>
        )
    }
}

export default reduxForm({
    form: 'TagsNewForm'
})(TagsNew)