import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ user, logOut }) => (
  <div className="hat">
    <p className="hatUserName">{user}</p>
    <button type="button" className="button hat_button" onClick={logOut}>Exit profile</button>
  </div>
);

Header.propTypes = {
  user: PropTypes.string.isRequired,
  logOut: PropTypes.func.isRequired,
};

export default Header;
