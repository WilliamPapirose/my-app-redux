
export const toLocalStore = store => next => action => {
  const result = next(action);
  if (action.type !== 'HIDE_CARD_INFO' &&
   action.type !== 'SHOW_CARD_INFO' &&
   action.type !== 'SIGN_IN') {
    window.localStorage.setItem('myAppInfo',JSON.stringify({
      cards: store.getState().cards,
      columns: store.getState().columns,
      comments: store.getState().comments,
      nextCardId: store.getState().nextCardId,
      nextCommentId: store.getState().nextCommentId,
    }));
  }
  return result;
};
