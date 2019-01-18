const initialState = { id: 0 };

const nextCommentId = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return {
        id: state.id + 1,
      };
    default:
      return state;
  }
};

export default nextCommentId;
