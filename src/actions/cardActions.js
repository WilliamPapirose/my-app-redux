export const addCard = (name, columnId, user, columnName, id) => ({
  type: 'ADD_CARD',
  id,
  name,
  user,
  columnId,
  columnName,
});

export const deleteCard = (id, columnId) => ({
  type: 'DELETE_CARD',
  id,
  columnId,
});

export const renameCard = (name, id, columnId) => ({
  type: 'RENAME_CARD',
  name,
  id,
  columnId,
});

export const editDescription = (description, columnId, id) => ({
  type: 'EDIT_DESCRIPTION',
  description,
  columnId,
  id,
});
