// eslint-disable-next-line import/prefer-default-export
export const toLocalStore = store => next => (action) => {
  const result = next(action);
  switch (action.type) {
    case 'ADD_CARD':
    case 'DELETE_CARD':
    case 'RENAME_CARD':
    case 'EDIT_DESCRIPTION':
      if (action.type === 'ADD_CARD') {
        window.localStorage.setItem('nextCardId', store.getState().app.nextCardId);
        window.localStorage.setItem('Comments', JSON.stringify(store.getState().comments));
      }
      switch (action.columnId) {
        case 0:
          window.localStorage.setItem('Cards_column0', JSON.stringify(store.getState().cards[0]));
          break;
        case 1:
          window.localStorage.setItem('Cards_column1', JSON.stringify(store.getState().cards[1]));
          break;
        case 2:
          window.localStorage.setItem('Cards_column2', JSON.stringify(store.getState().cards[2]));
          break;
        case 3:
          window.localStorage.setItem('Cards_column3', JSON.stringify(store.getState().cards[3]));
          break;
        default: break;
      }
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
