import { combineReducers } from 'redux';
import cards from './cards';
import user from './user';
import columns from './columns';
import currentCardInfo from './currentCardInfo';

const myApp = combineReducers({
  cards,
  user,
  columns,
  currentCardInfo,
});

export default myApp;
