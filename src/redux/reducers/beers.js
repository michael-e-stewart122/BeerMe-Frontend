import { FETCH_BEERS_SUCCESS } from '../actions/beers';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_BEERS_SUCCESS:
      return payload;
    default:
      return state;
  }
};
