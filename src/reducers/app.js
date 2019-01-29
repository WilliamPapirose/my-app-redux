const initialState = {
  current: { card: {}, column: {}, isShowed: false },
  user: window.localStorage.getItem('user') || '',
  nextCardId: Number.parseInt(window.localStorage.getItem('nextCardId'), 10) || 1,
  nextCommentId: Number.parseInt(window.localStorage.getItem('nextCommentId'), 10) || 1,
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
    case 'LOG_OUT':
      return {
        ...state,
        user: '',
      };
    default:
      return state;
  }
};

export default app;
