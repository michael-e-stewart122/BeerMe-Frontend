import { FEATURE_BREWERY_SUCCESS } from '../actions/featureBrewery';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  console.log('type', type);
  switch (type) {
    case FEATURE_BREWERY_SUCCESS:
      return payload;
    default:
      // console.log('do we get here to STATE!');
      return state;
  }
};
