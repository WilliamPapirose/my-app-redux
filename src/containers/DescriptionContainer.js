import { connect } from 'react-redux';
import Description from '../components/Description';
import { editDescription } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    card: state.currentCardInfo.card,
    user: state.user.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editDescription: (description, columnId, id) => {
      dispatch(editDescription(description, columnId, id));
    },
  };
};

const DescriptionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Description);

export default DescriptionContainer;
