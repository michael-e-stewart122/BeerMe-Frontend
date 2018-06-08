import { FETCH_USERS_FAVORITE_BEERS_SUCCESS } from '../actions/fetchUsersFavoriteBeers';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USERS_FAVORITE_BEERS_SUCCESS:
      return [...state, payload];
    default:
      return state;
  }
};
