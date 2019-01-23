import React from 'react';
import PropTypes from 'prop-types';
import ColumnContainer from '../containers/ColumnContainer';
import SignInContainer from '../containers/SignInContainer';
import HeaderContainer from '../containers/HeaderContainer';
import CardInfoPopupContainer from '../containers/CardInfoPopupContainer';


const Board = ({ user, columns, cardInfoIsShowed }) => (
  <React.Fragment>
    { !user && (
      <div role="presentation" className="fade">
        <SignInContainer />
      </div>
    )}
    { user && (
      <React.Fragment>
        <HeaderContainer />
        { cardInfoIsShowed && (
          <CardInfoPopupContainer />
        )}
        <div className="all_columns">
          {columns.map(column => (
            <ColumnContainer key={column.id} id={column.id} columnName={column.columnName} />
          ))}
        </div>
      </React.Fragment>
    )}
  </React.Fragment>
);

Board.propTypes = {
  user: PropTypes.objectOf(PropTypes.string),
  columns: PropTypes.arrayOf(PropTypes.any).isRequired,
  cardInfoIsShowed: PropTypes.bool.isRequired,
};

Board.defaultProps = {
  user: { name: '' },
};

export default Board;
