import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ user, signIn }) => (
  <div className="hat">
    <p className="hatUserName">{user.name}</p>
    <button type="button" className="button hat_button" onClick={() => { signIn(''); }}>Exit profile</button>
  </div>
);

Header.propTypes = {
  user: PropTypes.string.isRequired,
  signIn: PropTypes.func.isRequired,
};

export default Header;
