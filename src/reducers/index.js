import { combineReducers } from 'redux';
import cards from './cards';
import app from './app';
import columns from './columns';
import comments from './comments';

const rootReducer = combineReducers({
  cards,
  columns,
  comments,
  app,
});

export default rootReducer;
