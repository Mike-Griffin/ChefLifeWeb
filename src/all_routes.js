import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './components/login'
import Home from './components/home';
import TagsIndex from './components/tags_index'
import TagsNew from './components/tags_new'
import IngredientsIndex from './components/ingredients_index'
import IngredientsNew from './components/ingredients_new'
import RecipesIndex from './components/recipes/recipes_index'
import RecipesNew from './components/recipes/recipes_new'
import RecipesShow from './components/recipes/recipes_show'

class AllRoutes extends Component {
    render() {
        return (
            <div>
            {this.props.storageLoad.loaded 
                ? 
                <BrowserRouter>
                    <div>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/recipes/new" component={RecipesNew} />
                        <Route path="/recipes/:id" component={RecipesShow} />
                        <Route path="/recipes" component={RecipesIndex} />
                        <Route path="/ingredients/new" component={IngredientsNew} />
                        <Route path="/ingredients" component={IngredientsIndex} />
                        <Route path="/tags/new" component={TagsNew} />
                        <Route path="/tags" component={TagsIndex} />
                        <Route path="/" component={Home} />
                    </Switch>
                    </div>
                </BrowserRouter>
                : 
                <div>Loading</div>
            }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { 
        token: state.token,
        storageLoad: state.storage
    }
}

export default connect(mapStateToProps)(AllRoutes)