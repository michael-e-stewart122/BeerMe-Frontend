import { FETCH_BREWERY_SUCCESS } from '../actions/fetchBrewery';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  console.log('type', type);
  switch (type) {
    case FETCH_BREWERY_SUCCESS:
      console.log('payload', payload);
      return payload;
    default:
      console.log('do we get here to STATE!');
      return state;
  }
};
