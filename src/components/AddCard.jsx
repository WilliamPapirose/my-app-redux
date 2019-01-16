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
    this.setState({ isFormShowed: !isFormShowed });
  }

  render() {
    const { addCard } = this.props;
    const { isFormShowed } = this.state;
    return (
      <div className="addform">
        <button type="button" className="button plus" onClick={this.showHideForm}> + </button>
        {isFormShowed && (
          <div>
            <form onSubmit={(e) => {
              e.preventDefault();
              if (!this.input.value.trim()) {
                return;
              }
              addCard(this.input.value);
              this.input.value = '';
            }}
            >
              <p>
                <input
                  maxLength="42"
                  ref={(node) => { this.input = node; }}
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
  };
}

AddCard.propTypes = {
  addCard: PropTypes.func.isRequired,
};

export default AddCard;
