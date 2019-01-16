import React from 'react';
import { PropTypes } from 'prop-types';
import EditableTitle from './EditableTitle';


const Card = ({
  name,
  author,
  user,
  deleteCard,
  renameCard,
  showCardInfoPopup,
}) => (
  <React.Fragment>
    <div className="card">
      <p className="left">
        Author: {author}
      </p>
      <p className="right">
        Comments:
      </p>
      <EditableTitle name={name} rename={renameCard} canEdit={user.name === author} />
      <div className="card_buttons">
        <button
          type="button"
          className="button button_card button_left"
          onClick={showCardInfoPopup}
        >
          More information
        </button>
        {user.name === author && (
          <button
            type="button"
            className="button button_card button_right"
            onClick={deleteCard}
          >
          X
          </button>
        )}
      </div>
    </div>
  </React.Fragment>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  deleteCard: PropTypes.func.isRequired,
  renameCard: PropTypes.func.isRequired,
  showCardInfoPopup: PropTypes.func.isRequired,
};

export default Card;
