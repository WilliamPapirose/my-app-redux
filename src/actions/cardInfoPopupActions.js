export const showCardInfoPopup = (card, column) => ({
  type: 'SHOW_CARD_INFO',
  card,
  column,
});

export const hideCardInfoPopup = () => ({
  type: 'HIDE_CARD_INFO',
});
