import { combineReducers } from 'redux';
import TagsReducer from './reducer_tags'

const rootReducer = combineReducers({
  tags: TagsReducer
});

export default rootReducer;
