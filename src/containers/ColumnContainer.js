import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Column from '../components/Column';
import {
  addCard,
  deleteCard,
  renameCard,
  renameColumn,
  showCardInfoPopup,
} from '../actions/index';

const mapStateToProps = state => ({
  cards: state.cards,
  user: state.app.user,
  comments: state.comments,
  nextCardId: state.app.nextCardId,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addCard,
  deleteCard,
  renameCard,
  renameColumn,
  showCardInfoPopup,
}, dispatch);

const ColumnContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Column);

export default ColumnContainer;
