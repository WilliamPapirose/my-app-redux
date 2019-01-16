import { connect } from 'react-redux';
import Header from '../components/Header';
import { signIn } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () => {
      dispatch(signIn(''));
    },
  };
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default HeaderContainer;
