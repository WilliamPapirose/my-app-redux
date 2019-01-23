export const addComment = (id, author, text, nextCommentId) => ({
  type: 'ADD_COMMENT',
  id,
  commentId: nextCommentId,
  author,
  text,
});

export const editComment = (id, commentId, text) => ({
  type: 'EDIT_COMMENT',
  id,
  commentId,
  text,
});

export const deleteComment = (id, commentId) => ({
  type: 'DELETE_COMMENT',
  id,
  commentId,
});
