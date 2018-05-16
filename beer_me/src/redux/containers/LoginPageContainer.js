import { lifecycle } from 'recompose';
import { connect } from 'react-redux';

import Login from '../../components/Login/Login';
import auth_actions from '../actions/auth_actions';
import selectAuthenticatedUser from '../selectors/selectAuthenticatedUser';

function mapStateToProps(state) {
  console.log("i'm in login container!!!!!!!!!!!!!!!!!!!!!");
  return {
    authenticatedUser: selectAuthenticatedUser(state)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    login: credentials =>
      dispatch(auth_actions.userLogin(credentials, ownProps.history))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const addLifecycle = lifecycle({
  componentDidMount() {}
});

export default connectToStore(addLifecycle(Login));
