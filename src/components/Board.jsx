import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColumnContainer from '../containers/ColumnContainer';
import SignIn from './SignIn';
import Header from './Header';
import CardInfoPopupContainer from '../containers/CardInfoPopupContainer';

class Board extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', this.closePopupByEsc);
  }

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.closePopupByEsc);
  }

  closePopupByEsc = (event) => {
    const { hideCardInfoPopup } = this.props;
    const keyValue = event.key;
    if (keyValue === 'Escape') {
      event.preventDefault();
      hideCardInfoPopup();
    }
  }

  render() {
    const {
      user,
      columns,
      cardInfoIsShowed,
      logOut,
      signIn,
    } = this.props;
    return (
      <React.Fragment>
        { user ? (
          <React.Fragment>
            <Header user={user} logOut={logOut} />
            { cardInfoIsShowed && (
            <CardInfoPopupContainer />
            )}
            <div className="all_columns">
              {columns.map(column => (
                <ColumnContainer key={column.id} id={column.id} columnName={column.columnName} />
              ))}
            </div>
          </React.Fragment>
        ) : (
          <div role="presentation" className="fade">
            <SignIn signIn={signIn} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

Board.propTypes = {
  user: PropTypes.objectOf(PropTypes.string),
  columns: PropTypes.arrayOf(PropTypes.any).isRequired,
  cardInfoIsShowed: PropTypes.bool.isRequired,
  hideCardInfoPopup: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
};

Board.defaultProps = {
  user: { name: '' },
};

export default Board;
