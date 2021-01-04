import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import TagsReducer from './reducer_tags'

const rootReducer = combineReducers({
  tags: TagsReducer,
  form: formReducer
});

export default rootReducer;
