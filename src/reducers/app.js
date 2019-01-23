const initialState = {
  current: { card: {}, column: {}, isShowed: false },
  user: '',
  nextCardId: Number.parseInt(window.localStorage.getItem('nextCardId'), 10) || 0,
  nextCommentId: Number.parseInt(window.localStorage.getItem('nextCommentId'), 10) || 0,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_CARD_INFO':
      return {
        ...state,
        current: {
          card: action.card,
          column: action.column,
          isShowed: true,
        },
      };
    case 'HIDE_CARD_INFO':
      return {
        ...state,
        current: {
          card: {},
          column: {},
          isShowed: false,
        },
      };
    case 'ADD_CARD':
      return {
        ...state,
        nextCardId: state.nextCardId + 1,
      };
    case 'ADD_COMMENT':
      return {
        ...state,
        nextCommentId: state.nextCommentId + 1,
      };
    case 'SIGN_IN':
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default app;
