import { connect } from 'react-redux';
import Column from '../components/Column';
import {
  addCard,
  deleteCard,
  renameCard,
  renameColumn,
  showCardInfoPopup,
} from '../actions/index';

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (name, id, user, columnName) => {
      dispatch(addCard(name, id, user, columnName));
    },
    deleteCard: (id, columnId) => {
      dispatch(deleteCard(id, columnId));
    },
    renameCard: (name, id, columnId) => {
      dispatch(renameCard(name, id, columnId));
    },
    renameColumn: (name, columnId) => {
      dispatch(renameColumn(name, columnId));
    },
    showCardInfoPopup: (card) => {
      dispatch(showCardInfoPopup(card));
    },
  };
};

const ColumnContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Column);

export default ColumnContainer;
