import { connect } from 'react-redux';
import Comments from '../components/Comments';
import { addComment, deleteComment, editComment } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (id, author, text) => {
      dispatch(addComment(id, author, text));
    },
    deleteComment: (id, commentId) => {
      dispatch(deleteComment(id, commentId));
    },
    editComment: (id, commentId, text) => {
      dispatch(editComment(id, commentId, text));
    },
  };
};

const CommentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Comments);

export default CommentsContainer;
