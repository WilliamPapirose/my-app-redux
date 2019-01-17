import { combineReducers } from 'redux';
import cards from './cards';
import user from './user';
import columns from './columns';
import comments from './comments';
import currentCardInfo from './currentCardInfo';

const myApp = combineReducers({
  cards,
  user,
  columns,
  comments,
  currentCardInfo,
});

export default myApp;
