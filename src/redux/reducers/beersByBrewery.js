import { FETCH_BREWERY_BEER_SUCCESS } from '../actions/beersByBrewery';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_BREWERY_BEER_SUCCESS:
      return [...state, payload];
    default:
      return state;
  }
};
