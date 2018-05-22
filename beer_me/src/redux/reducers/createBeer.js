import { CREATE_BEER_SUCCESS } from '../actions/createBeer';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  // console.log('type', type);
  switch (type) {
    case CREATE_BEER_SUCCESS:
      // console.log('payload', payload);
      return { ...state, payload };
    default:
      // console.log('do we get here to STATE!');
      return state;
  }
};
