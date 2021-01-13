import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { fetchTags, createRecipe } from '../actions'


class RecipesNew extends Component {

    componentDidMount() {
        this.props.fetchTags()
    }

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

    renderSelect(field) {
        const { input, label, options } = field
        return (
            <div>
                <label>{label}</label>
                <select className="form-control" {...input}>
                    {options}
                </select>
            </div>
        )
    }

    getTagOptions() {
        if (!this.props.tags) {
            return <option>No data</option>
        }
        
        return _.map(this.props.tags, tag => {
            return <option key={tag.id} value={tag.id}>{tag.name}</option>
        })
    
    }

    onSubmit(values) {
        this.props.createRecipe(values)
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
                <Field name="tags" label="Tags:" component={this.renderSelect} type="select" className="form-control" options={this.getTagOptions()}/>

                {/* <Field 
                    label="Time Minutes"
                    name="time_minutes"
                    component={this.renderTextField}
                /> */}

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return { tags: state.tags }
}

export default reduxForm({
    form: 'RecipesNewForm',
    enableReinitialize : true
})(
    connect(mapStateToProps, { fetchTags, createRecipe })(RecipesNew)
)