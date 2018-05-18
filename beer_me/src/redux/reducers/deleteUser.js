import { DELETE_USER_SUCCESS } from '../actions/deleteUser';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  // console.log('type', type);
  switch (type) {
    case DELETE_USER_SUCCESS:
      // console.log('payload', payload);
      return { ...state, payload };
    default:
      // console.log('do we get here to STATE!');
      return state;
  }
};
