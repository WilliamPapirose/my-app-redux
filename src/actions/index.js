let nextCardId = 0;

let nextCommentId = 0;

export const addCard = (name, columnId, user, columnName) => {
  return {
    type: 'ADD_CARD',
    id: nextCardId++,
    name,
    user,
    columnId,
    columnName,
  };
};

export const deleteCard = (id, columnId) => {
  return {
    type: 'DELETE_CARD',
    id,
    columnId,
  };
};

export const signIn = (name) => {
  return {
    type: 'SIGN_IN',
    name,
  };
};

export const renameCard = (name, id, columnId) => {
  return {
    type: 'RENAME_CARD',
    name,
    id,
    columnId,
  };
};

export const editDescription = (description, columnId, id) => {
  return {
    type: 'EDIT_DESCRIPTION',
    description,
    columnId,
    id,
  };
};

export const renameColumn = (name, columnId) => {
  return {
    type: 'RENAME_COLUMN',
    name,
    columnId,
  };
};

export const showCardInfoPopup = (card) => {
  return {
    type: 'SHOW_CARD_INFO',
    card,
  };
};

export const hideCardInfoPopup = () => {
  return {
    type: 'HIDE_CARD_INFO',
  };
};

export const addComment = (id, author, text) => {
  return {
    type: 'ADD_COMMENT',
    id,
    commentId: nextCommentId++,
    author,
    text,
  };
};

export const editComment = (id, commentId, text) => {
  return {
    type: 'EDIT_COMMENT',
    id,
    commentId,
    text,
  };
};

export const deleteComment = (id, commentId) => {
  return {
    type: 'DELETE_COMMENT',
    id,
    commentId,
  };
};
