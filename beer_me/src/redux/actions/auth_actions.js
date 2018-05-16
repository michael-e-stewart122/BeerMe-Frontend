import decode from 'jwt-decode';
import authenticate from '../../api/token';
import getUser from '../../api/getUser';
import createUser from '../../api/createUser';
import checkAuthentication from '../../utils/checkAuthentication';
import env from '../../env';

export const USER_LOGIN_PENDING = 'USER_LOGIN_PENDING';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';

export const USER_SIGNUP_PENDING = 'USER_SIGNUP_PENDING';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED';

export const USER_LOGOUT = 'USER_LOGOUT';

export const GET_AUTH_SUCCESS = 'GET_AUTH_SUCCESS';
export const GET_AUTH_FAILED = 'GET_AUTH_FAILED';

const BASE_URL = 'http://localhost:8000';

export const userLogin = (credentials, history) => {

  return async dispatch => {
    try {
      const { token } = await authenticate(credentials);

      localStorage.setItem('token', token);
      const { sub: userId } = decode(token);

      const user = await getUser(userId, { token });

      // dispatch({ type: USER_LOGIN_PENDING });
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: { user, token }
      });
      history.push('/cheers', user);
      return { token, user };
    } catch (err) {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: err
      });
    }
  };
};

export const userLogout = () => {
  return async dispatch => {
    try {
      localStorage.removeItem('token');
      dispatch({ type: 'USER_LOGOUT' });
    } catch (error) {
      console.log(error);
    }
  };
};

export const userSignup = (attributes, history) => {
  return async (dispatch, getState) => {
    try {
      const user = await createUser(attributes);
      dispatch({ type: 'USER_SIGNUP_SUCCESS', user });
      history.push('/cheers', user);
      return user;
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAuth = () => {
  return async dispatch => {
    try {
      const authentication = async () => {
        return await checkAuthentication({
          baseUrl: env.API_BASE_URL
        });
      };
      const auth = Promise.resolve(authentication());
      let { token, user } = await auth;
      console.log('hey am i getting called');
      dispatch({
        type: 'GET_AUTH_SUCCESS',
        payload: {
          isLoggedIn: true,
          token: token,
          authenticatedUserId: user.id,
          usersById: {
            [user.id]: user
          }
        }
      });
    } catch (error) {
      dispatch({ type: GET_AUTH_FAILED, payload: error });
    }
  };
};

export default userLogin;
