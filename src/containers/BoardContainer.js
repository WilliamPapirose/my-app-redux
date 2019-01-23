import { connect } from 'react-redux';
import Board from '../components/Board';

const mapStateToProps = state => ({
  user: state.app.user,
  columns: state.columns,
  cardInfoIsShowed: state.app.current.isShowed,
  currentCard: state.app.current.card,
});

const BoardContainer = connect(
  mapStateToProps,
)(Board);

export default BoardContainer;
