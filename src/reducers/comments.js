const comments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return [
        ...state,
        { id: action.id, comments: [] },
      ];
    case 'DELETE_CARD':
      return state.filter(c => c.id !== action.id);
    case 'ADD_COMMENT':
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            comments: [
              ...item.comments,
              { id: action.commentId, text: action.text, author: action.author },
            ],
          };
        }
        return item;
      });
    case 'DELETE_COMMENT':
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            comments: item.comments.filter(subItem => subItem.id !== action.commentId),
          };
        }
        return item;
      });
    case 'EDIT_COMMENT':
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            comments: item.comments.map((subItem) => {
              if (subItem.id === action.commentId) {
                return {
                  ...subItem,
                  text: action.text,
                };
              }
              return subItem;
            }),
          };
        }
        return item;
      });
    default:
      return state;
  }
};

export default comments;
