import { FETCH_BEER_SUCCESS } from '../actions/fetchBeer';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_BEER_SUCCESS:
      return payload;
    default:
      return state;
  }
};
