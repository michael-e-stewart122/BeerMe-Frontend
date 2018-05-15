export const FEATURE_BREWERY_SUCCESS = 'FEATURE_BREWERY_SUCCESS';
export const FEATURE_BREWERY_FAILED = 'FEATURE_BREWERY_FAILED';

const BASE_URL = 'http://localhost:8000';
export const featureBrewery = id => {
  console.log('id!!!', id);
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/breweries/${id}`);
      let brewery = await response.json();
      console.log('brewery', brewery.brewery_name);
      dispatch({
        type: FEATURE_BREWERY_SUCCESS,
        payload: brewery
      });
    } catch (err) {
      dispatch({
        type: FEATURE_BREWERY_FAILED,
        payload: err
      });
    }
  };
};
