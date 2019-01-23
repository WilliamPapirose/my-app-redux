import React from 'react';
import PropTypes from 'prop-types';
import AddCard from './AddCard';
import EditableTitle from './EditableTitle';
import Card from './Card';

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
    <AddCard addCard={(name) => { addCard(name, id, user, columnName, nextCardId); }} />
    {cards[id].map(card => (
      <Card
        key={card.id}
        {...card}
        user={user}
        commentsCount={comments[card.id].length}
        showCardInfoPopup={() => { showCardInfoPopup(card, { id, name: columnName }); }}
        renameCard={(newName) => { renameCard(newName, card.id, id); }}
        deleteCard={() => { deleteCard(card.id, id); }}
      />
    ))}
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
