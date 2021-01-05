import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
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