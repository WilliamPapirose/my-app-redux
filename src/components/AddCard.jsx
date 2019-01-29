import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormShowed: false,
    };
  }

  showHideForm = () => {
    const { isFormShowed } = this.state;
    if (isFormShowed) this.input.value = '';
    this.setState(prevState => ({ isFormShowed: !prevState.isFormShowed }));
  }

  onSubmit = (e) => {
    const { addCard } = this.props;
    e.preventDefault();
    if (!this.input.value.trim()) {
      return;
    }
    addCard(this.input.value);
    this.input.value = '';
    this.showHideForm();
  }

  setInputRef = (node) => {
    this.input = node;
  }

  render() {
    const { isFormShowed } = this.state;
    return (
      <div className="addform">
        <button type="button" className="button plus" onClick={this.showHideForm}> + </button>
        {isFormShowed && (
          <div>
            <form onSubmit={this.onSubmit}>
              <p>
                <input
                  // eslint-disable-next-line jsx-a11y/no-autofocus
                  autoFocus
                  maxLength="42"
                  ref={this.setInputRef}
                  className="new_card_name"
                  type="text"
                  placeholder="Card Name"
                  required="required"
                />
                <input className="button" type="submit" value="Create" />
              </p>
            </form>
            <button type="button" className="button" onClick={this.showHideForm}> Cancel </button>
          </div>
        )}
      </div>
    );
  }
}

AddCard.propTypes = {
  addCard: PropTypes.func.isRequired,
};

export default AddCard;
