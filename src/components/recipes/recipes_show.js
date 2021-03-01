import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { fetchRecipe, fetchRecipeTags, fetchRecipeIngredients, fetchRecipeMeasurements, clearRecipeVals } from '../../actions'

class RecipesShow extends React.Component {
    componentDidMount() {
        const { token } = this.props
       // if(!this.props.recipe) {
            const { id } = this.props.match.params
            this.props.fetchRecipe(id, token)
            .then(() => {
                if(this.props.recipe.tags) {
                    this.props.fetchRecipeTags(this.getValuesQueryParm(this.props.recipe.tags), token)
                }       
                if(this.props.recipe.ingredientLines) {
                    this.props.fetchRecipeIngredients(this.getIngredientsQueryParm(), token)
                    this.props.fetchRecipeMeasurements(this.getMeasurementsQueryParm(), token)
                }     
            })
        //}
        // else {
        //     if(this.props.recipe.tags) {
        //         this.props.fetchRecipeTags(_.join(this.props.recipe.tags, '%2C'))
        //     }        
        //     if(this.props.recipe.ingredientLines) {
        //         this.props.fetchRecipeIngredients(this.getIngredientsQueryParm())
        //         this.props.fetchRecipeMeasurements(this.getMeasurementsQueryParm())
        //     }
        // }
    }

    componentWillUnmount() {
        this.props.clearRecipeVals()
    }

    getMeasurementsQueryParm() {
        if (this.props.recipe.ingredientLines) {
            return _.map(this.props.recipe.ingredientLines, line => {
                return line.measurement
            }).join('%2C')
        }
    }

    getIngredientsQueryParm() {
        if (this.props.recipe.ingredientLines) {
            console.log('ingredientLines', this.props.recipe.ingredientLines)
            return _.map(this.props.recipe.ingredientLines, line => {
                return line.ingredient
            }).join('%2C')
        }
    }

    getValuesQueryParm(values) {
        return _.map(values, val => {
            return val.id
        }).join('%2C')
        
    }

    renderTags() {
        // This should probably be its own component. Display something like 
        // number of ingredients and other high level stuff
        return _.map(this.props.recipeTags, tag => {
            return (
                <li className="list-group-item" key={tag.id}>
                    {tag.name}
                </li>
            )
        })
    }

    renderIngredients() {
        console.log('recipe ingredients', this.props.recipeIngredients)
        console.log('recipe measurements', this.props.recipeMeasurements)
        return _.map(this.props.recipe.ingredientLines, line => {
            console.log('line in map', line)
            return (
                <li className="list-group-item" key={line.order}>
                    {line.quantity} {this.props.recipeMeasurements[line.measurement].name} {this.props.recipeIngredients[line.ingredient].name}
                </li>
            )
        })
    }


    render () {
        const { recipe, recipeTags, recipeIngredients, recipeMeasurements } = this.props

        if (!recipe || (!recipeIngredients && !recipeMeasurements)) {
           return  (
               <div>
                   Loading...
               </div>
           )
        }
        return (
            <div>
                <h1>{recipe.title}</h1>
                <h5>Tags:</h5>
                {
                    recipeTags 
                    ? 
                        <ul className="list-group">
                            {this.renderTags()}
                        </ul>
                    : 
                        <div> ain't no tags</div>
                }

                <h5>Ingredients:</h5>
                {
                    recipeIngredients && recipeMeasurements
                    ?
                    <ul className="list-group">
                        {this.renderIngredients()}
                    </ul>
                    :
                        <div>ain't no ingredients</div>

                }
            </div>
        )
    }
}

function mapStateToProps({ token, recipes, recipeVals }, ownProps) {
    return { 
        recipe: recipes[ownProps.match.params.id],
        recipeTags: recipeVals.tags,
        recipeIngredients: recipeVals.ingredients,
        recipeMeasurements: recipeVals.measurements,
        token: token
    }
}

export default connect(mapStateToProps, { fetchRecipe, fetchRecipeTags, fetchRecipeIngredients, fetchRecipeMeasurements, clearRecipeVals })(RecipesShow)