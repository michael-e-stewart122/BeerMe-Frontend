import { ADD_FAVORITE_SUCCESS } from '../actions/addFavoriteBeer';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITE_SUCCESS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
