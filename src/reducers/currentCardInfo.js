const initialState = { card: {}, isShowed: false };

const currentCardInfo = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_CARD_INFO':
      return {
        card: action.card,
        isShowed: true,
      };
    case 'HIDE_CARD_INFO':
      return {
        card: {},
        isShowed: false,
      };
    default:
      return state;
  }
};

export default currentCardInfo;
