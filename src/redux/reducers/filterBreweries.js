import { FILTER_BREWERY } from '../actions/breweries';

const initialState = { filterBreweries: '', type: 'brewery_name' };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FILTER_BREWERY:
      return { ...state, ...payload };
    default:
      return state;
  }
};
