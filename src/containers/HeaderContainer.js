import { connect } from 'react-redux';
import Header from '../components/Header';
import { signIn } from '../actions/index';

const mapStateToProps = state => ({
  user: state.app.user,
});

const mapDispatchToProps = dispatch => ({
  signIn: () => {
    dispatch(signIn(''));
  },
});

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default HeaderContainer;
