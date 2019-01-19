const initialState = { column: undefined };

const currentColumn = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_CARD_INFO':
      return {
        column: action.column,
      };
    default:
      return state;
  }
};

export default currentColumn;
