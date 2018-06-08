import { FETCH_BREWERY_SUCCESS } from '../actions/fetchBrewery';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_BREWERY_SUCCESS:
      console.log(payload);
      return { ...state, payload };
    default:
      return state;
  }
};
