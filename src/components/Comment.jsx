import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onEdit: false,
    };
  }

  componentDidUpdate() {
    const { onEdit } = this.state;
    if (onEdit) {
      this.comment.focus();
      this.setCursorToEnd(this.comment);
    }
  }

  setCursorToEnd = (element) => {
    const range = document.createRange();
    const sel = window.getSelection();
    range.setStart(element, 1);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
  }

  handleKeyDown = (e) => {
    const keyValue = e.key;
    if (keyValue === 'Enter') {
      e.preventDefault();
      this.saveComment();
    }
  }

  editComment = () => {
    this.setState({ onEdit: true });
  }

  saveComment = () => {
    const { editComment } = this.props;
    if (this.comment.innerText.trim()) {
      editComment(this.comment.innerText);
      this.setState({ onEdit: false });
    }
  }

  commentRef = (ref) => {
    this.comment = ref;
  }

  render() {
    const { onEdit } = this.state;
    const {
      text,
      author,
      user,
      deleteComment,
    } = this.props;
    return (
      <div className="comment">
        <div
          suppressContentEditableWarning
          role="presentation"
          className={onEdit ? 'comment_textarea' : 'comment_textarea transparant'}
          onKeyDown={this.handleKeyDown}
          ref={this.commentRef}
          contentEditable={author === user && onEdit}
        >
          {text}
        </div>
        {author === user && (
          <div className="comment_footer">
            <button
              type="button"
              className="button right"
              onClick={deleteComment}
            >
                delete
            </button>
            {onEdit && (
            <button type="button" className="button right" onClick={this.saveComment}>
              Save
            </button>
            )}
            {!onEdit && (
            <button type="button" className="button right" onClick={this.editComment}>
              Edit
            </button>
            )}
          </div>
        )}
        <div className="comment_author">
          Author:&nbsp;
          {author}
        </div>
      </div>
    );
  }
}

Comment.propTypes = {
  editComment: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

export default Comment;
