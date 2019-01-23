import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignIn from '../components/SignIn';
import { signIn } from '../actions/index';

const mapDispatchToProps = dispatch => bindActionCreators({ signIn }, dispatch);

const SignInContainer = connect(null, mapDispatchToProps)(SignIn);

export default SignInContainer;
