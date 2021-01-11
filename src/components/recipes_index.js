import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchRecipes } from '../actions'

class RecipesIndex extends Component {
    componentDidMount() {
        this.props.fetchRecipes()
    }

    renderRecipes() {
        // This should probably be its own component. Display something like 
        // number of ingredients and other high level stuff
        return _.map(this.props.recipes, recipe => {
            return (
                <li className="list-group-item">
                    {recipe.title}
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/recipes/new">
                        Add a Recipe
                    </Link>
                </div>
                <div>
                    <h3>Recipes</h3>
                </div>
                <ul className="list-group">
                    {this.renderRecipes()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { recipes: state.recipes}
}

export default connect(mapStateToProps, {fetchRecipes})(RecipesIndex)