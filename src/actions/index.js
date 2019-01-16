let nextCardId = 0;

export const addCard = (name, columnId, user) => {
  return {
    type: 'ADD_CARD',
    id: nextCardId++,
    name,
    user,
    columnId,
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

export const renameColumn = (name, columnId) => {
  return {
    type: 'RENAME_COLUMN',
    name,
    columnId,
  };
};
