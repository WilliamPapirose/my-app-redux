const initialState = {
  0: [],
  1: [],
  2: [],
  3: [],
};

const card = (state, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        id: action.id,
        name: action.name,
        author: action.user,
      };
    case 'RENAME_CARD':
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        name: action.name,
      });
    default:
      return state;
  }
};

const cards = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        ...state,
        [action.columnId]: [
          ...state[action.columnId],
          card(undefined, action),
        ],
      };
    case 'RENAME_CARD':
      return {
        ...state,
        [action.columnId]: state[action.columnId].map(c => card(c, action)),
      };
    case 'DELETE_CARD':
      return {
        ...state,
        [action.columnId]: state[action.columnId].filter(c => c.id !== action.id),
      };
    default:
      return state;
  }
};

export default cards;
