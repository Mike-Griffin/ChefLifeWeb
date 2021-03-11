import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as storage from 'redux-storage'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import promise from 'redux-promise'

import createEngine from 'redux-storage-engine-localstorage'
import AllRoutes from './all_routes';
import reducers from './reducers';

const reducer = storage.reducer(combineReducers(reducers));

const engine = createEngine('my-save-key');
const storageMiddleware = storage.createMiddleware(engine);


const createStoreWithMiddleware = applyMiddleware(promise, storageMiddleware)(createStore)
const store = createStoreWithMiddleware(reducer);

const load = storage.createLoader(engine);
load(store);

load(store)
    .then((newState) => console.log('Loaded state:', newState))
    .catch(() => console.log('Failed to load previous state'));

ReactDOM.render(
  <Provider store={store}>
    <AllRoutes />
  </Provider>
  , document.querySelector('.container'));
