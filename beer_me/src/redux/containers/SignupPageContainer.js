import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import Signup from '../../components/Signup/Signup';
import auth_actions from '../actions/auth_actions';
import selectAuthenticatedUser from '../selectors/selectAuthenticatedUser';

function mapStateToProps(state) {
  return {
    authenticatedUser: selectAuthenticatedUser(state)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    async onSubmit(attributes) {
      await dispatch(auth_actions.userSignup(attributes));
      ownProps.history.push('/');
    }
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const withLifecycle = lifecycle({
  componentDidMount() {
    if (this.props.authenticatedUser) this.props.history.push('/');
  }
});

export default compose(connectToStore, withLifecycle)(Signup);
