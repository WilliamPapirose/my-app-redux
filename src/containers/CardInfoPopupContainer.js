import { connect } from 'react-redux';
import CardInfoPopup from '../components/CardInfoPopup';
import { hideCardInfoPopup } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
    card: state.currentCardInfo.card,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hide: () => {
      dispatch(hideCardInfoPopup(''));
    },
  };
};

const CardInfoPopupContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardInfoPopup);

export default CardInfoPopupContainer;
