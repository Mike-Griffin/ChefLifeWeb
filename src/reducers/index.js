import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import StorageReducer from './reducer_storage'
import TokenReducer from './reducer_token'
import TagsReducer from './reducer_tags'
import IngredientsReducer from './reducer_ingredients'
import MeasurementsReducer from './reducer_measurements'
import RecipesReducer from './reducer_recipes'
import CreateTagReducer from './reducer_create_tag'
import RecipeValsReducer from './reducer_recipe_vals'

const reducers = {
  storage: StorageReducer,
  token: TokenReducer,
  tags: TagsReducer,
  ingredients: IngredientsReducer,
  measurements: MeasurementsReducer,
  recipes: RecipesReducer,
  recipeVals: RecipeValsReducer,
  newTag: CreateTagReducer,
  form: formReducer
};

export default reducers;
