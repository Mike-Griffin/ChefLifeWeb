import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import TagsReducer from './reducer_tags'
import IngredientsReducer from './reducer_ingredients'
import RecipesReducer from './reducer_recipes'

const rootReducer = combineReducers({
  tags: TagsReducer,
  ingredients: IngredientsReducer,
  recipes: RecipesReducer,
  form: formReducer
});

export default rootReducer;
