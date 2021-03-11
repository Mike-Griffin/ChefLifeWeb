import _ from 'lodash'
import React from 'react'
import Select from 'react-select'

class RecipeMultiSelectPrompt extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedRecipes: []
        }
    }

    handleChange = (newValue, actionMeta) => {
        switch(actionMeta.action) {
            case('select-option'):
                console.log(`Do you want to add all the ingredients for ${newValue[newValue.length - 1].label}?`)
                this.setState({
                    selectedRecipes: newValue
                })
                break;
            case('remove-value'):
                var removedValue = null
                if(newValue == null) {
                    removedValue = this.state.selectedRecipes[0]
                    this.setState({
                        selectedRecipes: []
                    })
                }
                else {
                    removedValue = this.state.selectedRecipes.filter(x => !newValue.includes(x))[0]
                    this.setState({
                        selectedRecipes: newValue
                    })
                }
                console.log(removedValue)
                console.log(`Do you want to remove all ingredients for ${removedValue.label}?`)
                break;
            default:
                console.log("This case shouldn't happen ", actionMeta.action)
        }
    }

    renderRecipes() {
        return _.map (this.state.selectedRecipes, recipe => {
            return (
                <li key={recipe.value}>
                    <div>
                        {recipe.label}
                    </div>
                </li>
            )
        }
        )
    }

    render() {
        return(
            <div>
                <Select
                    isMulti
                    onChange={this.handleChange}
                    options={this.props.options}
                />
                <ul>
                    {this.renderRecipes()}
                </ul>
            </div>
        )
    }
}

export default RecipeMultiSelectPrompt