import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import TagsReducer from './reducer_tags'
import IngredientsReducer from './reducer_ingredients'

const rootReducer = combineReducers({
  tags: TagsReducer,
  ingredients: IngredientsReducer,
  form: formReducer
});

export default rootReducer;
