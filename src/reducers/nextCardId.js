const initialState = { id: 0 };

const nextCardId = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        id: state.id + 1,
      };
    default:
      return state;
  }
};

export default nextCardId;
