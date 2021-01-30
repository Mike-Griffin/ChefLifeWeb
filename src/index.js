import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'

import Home from './components/home';
import TagsIndex from './components/tags_index'
import TagsNew from './components/tags_new'
import IngredientsIndex from './components/ingredients_index'
import IngredientsNew from './components/ingredients_new'
import RecipesIndex from './components/recipes/recipes_index'
import RecipesNew from './components/recipes/recipes_new'
import RecipesShow from './components/recipes/recipes_show'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
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
  </Provider>
  , document.querySelector('.container'));
