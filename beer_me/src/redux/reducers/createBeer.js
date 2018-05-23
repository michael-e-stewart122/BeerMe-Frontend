import { CREATE_BEER_SUCCESS } from '../actions/createBeer';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_BEER_SUCCESS:
      return { ...state, payload };
    default:
      return state;
  }
};
