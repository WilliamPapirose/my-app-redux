import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Description from '../components/Description';
import { editDescription } from '../actions/index';

const mapStateToProps = state => ({
  currentCard: state.app.current.card,
  currentColumn: state.app.current.column,
  user: state.app.user,
});

const mapDispatchToProps = dispatch => bindActionCreators({ editDescription }, dispatch);

const DescriptionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Description);

export default DescriptionContainer;
