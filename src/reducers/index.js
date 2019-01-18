import { combineReducers } from 'redux';
import cards from './cards';
import user from './user';
import columns from './columns';
import comments from './comments';
import currentCardInfo from './currentCardInfo';
import nextCardId from './nextCardId';
import nextCommentId from './nextCommentId';

const myApp = combineReducers({
  cards,
  user,
  columns,
  comments,
  currentCardInfo,
  nextCardId,
  nextCommentId,
});

export default myApp;
