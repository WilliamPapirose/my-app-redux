import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class SignIn extends Component {
  inputRef = (node) => {
    this.input = node;
  }

  handleSubmit = (e) => {
    const { signIn } = this.props;
    e.preventDefault();
    if (!this.input.value.trim()) {
      return;
    }
    signIn(this.input.value);
    this.input.value = '';
  }

  render() {
    return (
      <div className="who">
        <p>Hi, what`s your name?</p>
        <form onSubmit={this.handleSubmit}>
          <input
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            ref={this.inputRef}
            className="new_card_name"
          />
          <button className="button" type="submit">
            SignIn
          </button>
        </form>
      </div>
    );
  }
}

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired,
};

export default SignIn;
