import React from 'react';
import PropTypes from 'prop-types';
import AddCard from './AddCard';
import CardContainer from '../containers/CardContainer';
import EditableTitle from './EditableTitle';

const Column = ({
  cards,
  id,
  columnName,
  addCard,
  user,
  comments,
  nextCardId,
  deleteCard,
  renameCard,
  renameColumn,
  showCardInfoPopup,
}) => (
  <div className="column App">
    <EditableTitle
      name={columnName}
      rename={(newName) => { renameColumn(newName, id); }}
      canEdit
    />
    <AddCard addCard={(name) => { addCard(name, id, user.name, columnName, nextCardId.id); }} />
    {cards[id].map((card) => {
      return (
        <CardContainer
          key={card.id}
          {...card}
          commentsCount={comments.find(item => item.id === card.id).comments.length}
          showCardInfoPopup={() => { showCardInfoPopup(card); }}
          renameCard={(newName) => { renameCard(newName, card.id, id); }}
          deleteCard={() => { deleteCard(card.id, id); }}
        />
      );
    })}
  </div>
);

Column.propTypes = {
  id: PropTypes.number.isRequired,
  nextCardId: PropTypes.objectOf(PropTypes.number).isRequired,
  columnName: PropTypes.string.isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  cards: PropTypes.objectOf(PropTypes.array).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  addCard: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
  renameCard: PropTypes.func.isRequired,
  renameColumn: PropTypes.func.isRequired,
  showCardInfoPopup: PropTypes.func.isRequired,
};

export default Column;
