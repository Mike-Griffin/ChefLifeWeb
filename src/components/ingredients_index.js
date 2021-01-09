import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchIngredients } from '../actions'

class IngredientsIndex extends Component {
    componentDidMount() {
        this.props.fetchIngredients()
    }

    renderIngredients() {
        return _.map(this.props.ingredients, ingredient => {
            return (
                <li className="list-group-item">
                    {ingredient.name}
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <h3>Ingredients</h3>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/ingredients/new">
                        Add an ingredient
                    </Link>
                </div>
                <ul className="list-group">
                    {this.renderIngredients()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { ingredients: state.ingredients }
}

export default connect(mapStateToProps, {fetchIngredients})(IngredientsIndex)