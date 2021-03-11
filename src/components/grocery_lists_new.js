import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { renderRecipesAsSelectValues } from '../utils'
import MultiSelectPrompt from '../fields/recipe_mutliselect'

class GroceryListsNew extends Component {
    onSubmit(values) {
        console.log("Grocery values")
        console.log(values)
    }



    render() {
        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div>
                    <h3>Recipes</h3>
                    <Field
                        isMulti
                        name="recipes"
                        component={MultiSelectPrompt}
                        options={renderRecipesAsSelectValues(this.props.recipes)}
                    />
                </div>
                <div>
                    <h3>Ingredients</h3>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        recipes: state.recipes
    }
}

export default reduxForm({
    form: 'GroceryListsNewForm',
    enableReinitialize: true
})(
    connect(mapStateToProps)(GroceryListsNew)
)