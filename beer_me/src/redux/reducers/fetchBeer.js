import { FETCH_BEER_SUCCESS } from '../actions/fetchBeer';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  // console.log('type', type);
  switch (type) {
    case FETCH_BEER_SUCCESS:
      // console.log('payload on success', payload);
      return payload;
    default:
      return state;
  }
};
