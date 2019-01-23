import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Comments from '../components/Comments';
import { addComment, deleteComment, editComment } from '../actions/index';

const mapStateToProps = state => ({
  user: state.app.user,
  nextCommentId: state.app.nextCommentId,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addComment,
  deleteComment,
  editComment,
}, dispatch);


const CommentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Comments);

export default CommentsContainer;
