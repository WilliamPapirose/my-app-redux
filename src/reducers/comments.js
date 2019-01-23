let newComments;

const initialState = JSON.parse(window.localStorage.getItem('Comments')) || { };

const comments = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        ...state,
        [action.id]: [],
      };
    case 'DELETE_CARD':
      newComments = { ...state };
      delete newComments[action.id];
      return newComments;
    case 'ADD_COMMENT':
      return {
        ...state,
        [action.id]: [
          ...state[action.id],
          { id: action.commentId, text: action.text, author: action.author },
        ],
      };
    case 'DELETE_COMMENT':
      return {
        ...state,
        [action.id]: state[action.id].filter(comment => comment.id !== action.commentId),
      };
    case 'EDIT_COMMENT':
      return {
        ...state,
        [action.id]: state[action.id].map((comment) => {
          if (comment.id === action.commentId) {
            return {
              ...comment,
              text: action.text,
            };
          }
          return comment;
        }),
      };
    default:
      return state;
  }
};

export default comments;
