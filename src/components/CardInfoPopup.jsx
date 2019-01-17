import React from 'react';
import PropTypes from 'prop-types';
import DescriptionContainer from '../containers/DescriptionContainer';
import CommentsContainer from '../containers/CommentsContainer';

const CardInfoPopup = ({
  hide,
  card,
  comments,
}) => (
  <div className="info_popup">
    <div className="fade_inf" />
    <div className="window">
      <div className="popup">
        <div className="head">
          <p className="author">
            Author: {card.author}
          </p>
          <p className="card_name">{card.name}</p>
          <p className="column_name">{card.columnName}</p>
          <div className="buttons">
            <button
              type="button"
              className="button plus right"
              onClick={hide}
            >
              X
            </button>
          </div>
        </div>
        <DescriptionContainer />
        <CommentsContainer cardId={card.id} comments={comments.find(item => item.id === card.id).comments} />
      </div>
    </div>
  </div>
);

CardInfoPopup.propTypes = {
  hide: PropTypes.func.isRequired,
  card: PropTypes.objectOf(PropTypes.any).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardInfoPopup;
