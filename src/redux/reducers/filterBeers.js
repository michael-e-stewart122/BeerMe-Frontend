import { FILTER_BEER } from '../actions/beers';

const initialState = { filterBeers: '', type: 'beer_name' };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FILTER_BEER:
      return { ...state, ...payload };
    default:
      return state;
  }
};
