import { FETCH_BREWERIES_SUCCESS } from '../actions/breweries';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_BREWERIES_SUCCESS:
      return payload;
    default:
      return state;
  }
};
