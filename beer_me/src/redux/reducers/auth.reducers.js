import {
  USER_LOGIN_PENDING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_SIGNUP_PENDING,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_LOGOUT
} from '../actions/auth_actions';

let initialState = {
  isLoading: false,
  user: {},
  showLoginError: false,
  showSignupError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_PENDING:
      return { ...state, isLoading: true };
    case USER_LOGIN_SUCCESS:
      console.log('just dispatched log in', state);
      console.log('just dispatched log in', action.payload.user);
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false
      };
    case USER_LOGIN_FAILED:
      return { ...state, isLoading: false, showLoginError: true };
    case USER_SIGNUP_PENDING:
      return { ...state, isLoading: true };
    case USER_SIGNUP_SUCCESS:
      return { ...state, isLoading: false };
    case USER_SIGNUP_FAILED:
      return { ...state, isLoading: false, showSignupError: true };
    case USER_LOGOUT:
      return { ...state };
    default:
      return state;
  }
};
