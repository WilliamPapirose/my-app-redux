// eslint-disable-next-line import/prefer-default-export
export const toLocalStore = store => next => (action) => {
  const result = next(action);
  switch (action.type) {
    case 'SIGN_IN':
    case 'LOG_OUT':
      window.localStorage.setItem('user', store.getState().app.user);
      break;
    case 'ADD_CARD':
      window.localStorage.setItem('nextCardId', store.getState().app.nextCardId);
      window.localStorage.setItem('Comments', JSON.stringify(store.getState().comments));
    case 'DELETE_CARD':
      window.localStorage.setItem('Comments', JSON.stringify(store.getState().comments));
    case 'RENAME_CARD':
    case 'EDIT_DESCRIPTION':
      window.localStorage.setItem(`Cards_column${action.columnId}`, JSON.stringify(store.getState().cards[action.columnId]));
      break;
    case 'RENAME_COLUMN':
      window.localStorage.setItem('Columns', JSON.stringify(store.getState().columns));
      break;
    case 'ADD_COMMENT':
    case 'DELETE_COMMENT':
    case 'EDIT_COMMENT':
      if (action.type === 'ADD_COMMENT') {
        window.localStorage.setItem('nextCommentId', store.getState().app.nextCommentId);
      }
      window.localStorage.setItem('Comments', JSON.stringify(store.getState().comments));
      break;
    default: break;
  }
  return result;
};
