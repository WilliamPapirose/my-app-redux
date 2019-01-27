import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Board from '../components/Board';
import { hideCardInfoPopup } from '../actions/index';

const mapStateToProps = state => ({
  user: state.app.user,
  columns: state.columns,
  cardInfoIsShowed: state.app.current.isShowed,
  currentCard: state.app.current.card,
});

const mapDispatchToProps = dispatch => bindActionCreators({ hideCardInfoPopup }, dispatch);

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board);

export default BoardContainer;
