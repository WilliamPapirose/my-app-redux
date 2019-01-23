const initialState = {
  0: JSON.parse(window.localStorage.getItem('Cards_column0')) || [],
  1: JSON.parse(window.localStorage.getItem('Cards_column1')) || [],
  2: JSON.parse(window.localStorage.getItem('Cards_column2')) || [],
  3: JSON.parse(window.localStorage.getItem('Cards_column3')) || [],
};

const cards = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        ...state,
        [action.columnId]: [
          ...state[action.columnId],
          {
            id: action.id,
            name: action.name,
            author: action.user,
            description: '',
          },
        ],
      };
    case 'RENAME_CARD':
      return {
        ...state,
        [action.columnId]: state[action.columnId].map((card) => {
          if (card.id !== action.id) {
            return card;
          }
          return {
            ...card,
            name: action.name,
          };
        }),
      };
    case 'EDIT_DESCRIPTION':
      return {
        ...state,
        [action.columnId]: state[action.columnId].map((card) => {
          if (card.id !== action.id) {
            return card;
          }
          return {
            ...card,
            description: action.description,
          };
        }),
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
