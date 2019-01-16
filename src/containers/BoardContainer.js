import { connect } from 'react-redux';
import Board from '../components/Board';

const mapStateToProps = (state) => {
  return {
    user: state.user,
    columns: state.columns,
    cardInfoIsShowed: state.currentCardInfo.isShowed,
    currentCard: state.currentCardInfo.card,
  };
};

const BoardContainer = connect(
  mapStateToProps,
)(Board);

export default BoardContainer;
