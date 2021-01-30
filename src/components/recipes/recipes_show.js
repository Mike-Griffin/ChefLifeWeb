import React from 'react'
import { connect } from 'react-redux'
import { fetchRecipe } from '../../actions'

class RecipesShow extends React.Component {
    componentDidMount() {
        if(!this.props.recipe) {
            const { id } = this.props.match.params
            this.props.fetchRecipe(id)
        }
    }

    render () {
        const { recipe } = this.props

        if (!recipe) {
           return  (
               <div>
                   Loading...
               </div>
           )
        }
        return (
            <div>
                <h1>{recipe.title}</h1>
            </div>
        )
    }
}

function mapStateToProps({ recipes }, ownProps) {
    return { recipe: recipes[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchRecipe })(RecipesShow)