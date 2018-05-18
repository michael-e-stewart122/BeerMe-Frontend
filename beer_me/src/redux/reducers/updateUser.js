import { UPDATE_USER_SUCCESS } from '../actions/updateUser';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  // console.log('type', type);
  switch (type) {
    case UPDATE_USER_SUCCESS:
      // console.log('payload', payload);
      return { ...state, payload };
    default:
      // console.log('do we get here to STATE!');
      return state;
  }
};
