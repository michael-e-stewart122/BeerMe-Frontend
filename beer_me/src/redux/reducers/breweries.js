import { FETCH_BREWERIES_SUCCESS } from '../actions/breweries';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_BREWERIES_SUCCESS:
      console.log('Fetch breweries paylod', payload);
      return payload;
    default:
      return state;
  }
};
