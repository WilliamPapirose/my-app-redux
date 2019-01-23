import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

class Comments extends Component {
  handleKeyDown = (event) => {
    const keyValue = event.key;
    if (keyValue === 'Enter') {
      event.preventDefault();
      this.addComment();
      this.comment.blur();
    }
  };

  addComment = () => {
    const {
      cardId,
      addComment,
      user,
      nextCommentId,
    } = this.props;
    if (this.comment.value !== '') {
      addComment(cardId, user, this.comment.value, nextCommentId);
      this.comment.value = '';
    }
  }

  render() {
    const {
      comments,
      user,
      cardId,
      editComment,
      deleteComment,
    } = this.props;
    return (
      <div className="comments">
        <div className="writerCommnets">
          <textarea
            onKeyDown={this.handleKeyDown}
            className="textarea comment_text"
            ref={(ref) => { this.comment = ref; }}
          />
          <button
            type="button"
            className="button plus right"
            onClick={this.addComment}
          >
            Add comment
          </button>
        </div>
        <div className="all_comments">
          {comments.map(comment => (
            <Comment
              key={comment.id}
              editComment={(text) => { editComment(cardId, comment.id, text); }}
              user={user}
              author={comment.author}
              text={comment.text}
              deleteComment={() => { deleteComment(cardId, comment.id); }}
            />
          ))}
        </div>
      </div>
    );
  }
}

Comments.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  cardId: PropTypes.number.isRequired,
  nextCommentId: PropTypes.number.isRequired,
  editComment: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

export default Comments;
