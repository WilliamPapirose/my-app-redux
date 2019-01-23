import React from 'react';
import PropTypes from 'prop-types';
import DescriptionContainer from '../containers/DescriptionContainer';
import CommentsContainer from '../containers/CommentsContainer';

const CardInfoPopup = ({
  hideCardInfoPopup,
  currentCard,
  currentColumn,
  comments,
}) => (
  <div className="info_popup">
    <div className="fade_inf" />
    <div className="window">
      <div className="popup">
        <div className="head">
          <p className="author">
            Author:&nbsp;
            {currentCard.author}
          </p>
          <p className="card_name">{currentCard.name}</p>
          <p className="column_name">{currentColumn.name}</p>
          <div className="buttons">
            <button
              type="button"
              className="button plus right"
              onClick={hideCardInfoPopup}
            >
              X
            </button>
          </div>
        </div>
        <DescriptionContainer />
        <CommentsContainer
          cardId={currentCard.id}
          comments={comments[currentCard.id]}
        />
      </div>
    </div>
  </div>
);

CardInfoPopup.propTypes = {
  hideCardInfoPopup: PropTypes.func.isRequired,
  currentCard: PropTypes.objectOf(PropTypes.any).isRequired,
  currentColumn: PropTypes.objectOf(PropTypes.any).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardInfoPopup;
