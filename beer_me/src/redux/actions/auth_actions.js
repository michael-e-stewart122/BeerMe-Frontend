import decode from 'jwt-decode';
import authenticate from '../../api/token';
import getUser from '../../api/getUser';

export const USER_LOGIN_PENDING = 'USER_LOGIN_PENDING';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';

export const USER_SIGNUP_PENDING = 'USER_SIGNUP_PENDING';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED';

export const USER_LOGOUT = 'USER_LOGOUT';

const BASE_URL = 'http://localhost:8000';

export const userLogin = (credentials, history) => {
  console.log('touch me?');
  console.log(credentials, 'auth_actions credents');
  return async dispatch => {
    try {
      const { token } = await authenticate(credentials);
      console.log('token', token);
      localStorage.setItem('token', token);
      const { sub: userId } = decode(token);
      console.log(userId, 'userid');
      const user = await getUser(userId, { token });
      console.log(user, 'user');
      dispatch({ type: USER_LOGIN_PENDING });

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: { user, token }
      });
      history.push('/cheers', user);
      return { token, user };
    } catch (err) {
      console.log('err', err);
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: err
      });
    }
  };
};

export const userSignup = ({ newUser }, history) => {
  return async dispatch => {
    try {
      const { token } = await authenticate(newUser);
      localStorage.setItem('token', token);
      const { sub: userId } = decode(token);
      const user = await getUser(userId, { token });
      // let response = await fetch(`${BASE_URL}/users`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(newUser)
      // });
      // const { token } = await response;
      console.log('hey');
      // let isSignedUp = await response.json();
      history.push('/login', user);
      dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: user,
        token
      });
      return { token, user };
    } catch (err) {
      dispatch({
        type: USER_SIGNUP_FAILED,
        payload: err
      });
    }
  };
  //   create(credentials, history) {
  //   return async (dispatch, getState) => {
  //     try {
  //       const { token } = await authenticate(credentials);
  //
  //       localStorage.setItem('token', token);
  //
  //       const { sub: userId } = decode(token);
  //       const user = await getUser(userId, { token });
  //
  //       defer(() => {
  //         history.push('/');
  //       });
  //
  //       dispatch({ type: 'LOGIN', token, user });
  //       return { token, user };
  //     } catch (error) {
  //       localStorage.removeItem('token');
  //       throw error;
  //     }
  //   };
  // }
};
//
// export const userLogout = () => {
//   try {
//     localStorage.removeItem('token');
//
//     history.push('/');
//
//     dispatch({ type: 'LOGOUT' });
//   } catch (error) {
//     console.log(error);
//   }
// };
//
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

export default userLogin;
