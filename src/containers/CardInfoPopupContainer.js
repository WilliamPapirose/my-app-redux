import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardInfoPopup from '../components/CardInfoPopup';
import { hideCardInfoPopup } from '../actions/index';

const mapStateToProps = state => ({
  comments: state.comments,
  currentCard: state.app.current.card,
  currentColumn: state.app.current.column,
});

const mapDispatchToProps = dispatch => bindActionCreators({ hideCardInfoPopup }, dispatch);

const CardInfoPopupContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardInfoPopup);

export default CardInfoPopupContainer;
