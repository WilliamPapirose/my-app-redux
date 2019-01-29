import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddCard from './AddCard';
import EditableTitle from './EditableTitle';
import Card from './Card';

class Column extends Component {
  rename = (newName) => {
    const { renameColumn, id } = this.props;
    renameColumn(newName, id);
  }

  addCard = (name) => {
    const {
      addCard,
      nextCardId,
      user,
      id,
      columnName,
    } = this.props;
    addCard(name, id, user, columnName, nextCardId);
  }

  render() {
    const {
      cards,
      id,
      columnName,
      user,
      comments,
      deleteCard,
      renameCard,
      showCardInfoPopup,
    } = this.props;
    return (
      <div className="column App">
        <EditableTitle
          name={columnName}
          rename={this.rename}
          canEdit
        />
        <AddCard addCard={this.addCard} />
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
  }
}

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
