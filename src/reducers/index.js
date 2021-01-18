import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import TagsReducer from './reducer_tags'
import IngredientsReducer from './reducer_ingredients'
import RecipesReducer from './reducer_recipes'
import CreateTagReducer from './reducer_create_tag'

const rootReducer = combineReducers({
  tags: TagsReducer,
  ingredients: IngredientsReducer,
  recipes: RecipesReducer,
  newTag: CreateTagReducer,
  form: formReducer
});

export default rootReducer;
