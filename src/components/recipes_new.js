import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { fetchTags, fetchMeasurements, fetchIngredients, createRecipe } from '../actions'
import CreateableMultiSelectPrompt from '../fields/creatable_multiselect_prompt'
import DynamicFieldArray from '../fields/dynamic_field_array'
import { createRecipeRequest } from '../api'



class RecipesNew extends Component {

    componentDidMount() {
        this.props.fetchTags()
        this.props.fetchMeasurements()
        this.props.fetchIngredients()
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
        console.log("values here")
        console.log(values)
        createRecipeRequest(values)
        .then( (response) => {
            this.props.createRecipe(response)
            this.props.history.push('/recipes/')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    renderObjectsAsValues(objs) {
        return _.map(objs, obj=> {
            return {'value': `${obj.id}`, 'label': `${obj.name}`}
        })
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
                <Field
                    name="tags"
                    component={CreateableMultiSelectPrompt}
                    options={this.renderObjectsAsValues(this.props.tags)}
                />
                <DynamicFieldArray 
                    measurements={this.renderObjectsAsValues(this.props.measurements)}
                    ingredients={this.renderObjectsAsValues(this.props.ingredients)}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return { 
        tags: state.tags, 
        measurements: state.measurements,
        ingredients: state.ingredients, 
    }
}

export default reduxForm({
    form: 'RecipesNewForm',
    enableReinitialize : true
})(
    connect(mapStateToProps, { fetchTags, fetchIngredients, fetchMeasurements, createRecipe })(RecipesNew)
)