import React from 'react';
import { PropTypes } from 'prop-types';
import ColumnContainer from '../containers/ColumnContainer';
import SignInContainer from '../containers/SignInContainer';
import HeaderContainer from '../containers/HeaderContainer';


const Board = ({ user, columns }) => (
  <React.Fragment>
    { !user.name && (
      <div role="presentation" className="fade">
        <SignInContainer />
      </div>
    )}
    { user.name && (
      <React.Fragment>
        <HeaderContainer />
        <div className="all_columns">
          {columns.map((column) => {
            return (
              <ColumnContainer key={column.id} id={column.id} columnName={column.columnName} />
            );
          })}
        </div>
      </React.Fragment>
    )}
  </React.Fragment>
);

Board.propTypes = {
  user: PropTypes.objectOf(PropTypes.string),
  columns: PropTypes.arrayOf(PropTypes.any).isRequired,
};

Board.defaultProps = {
  user: { name: '' },
};

export default Board;
