import { connect } from 'react-redux';
import Column from '../components/Column';
import { addCard, deleteCard } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (text, id, user) => {
      dispatch(addCard(text, id, user));
    },
    deleteCard: (id, columnId) => {
      dispatch(deleteCard(id, columnId));
    },
  };
};

const ColumnContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Column);

export default ColumnContainer;
