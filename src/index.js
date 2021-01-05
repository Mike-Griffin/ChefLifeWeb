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
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/ingredients" component={IngredientsIndex} />
          <Route path="/tags/new" component={TagsNew} />
          <Route path="/tags" component={TagsIndex} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
