export const FETCH_BREWERIES_SUCCESS = 'FETCH_BREWERIES_SUCCESS';
export const FETCH_BREWERIES_FAILED = 'FETCH_BREWERIES_FAILED';

const BASE_URL = 'http://localhost:8000';
export const fetchBreweries = () => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/breweries`);
      let breweries = await response.json();
      dispatch({
        type: FETCH_BREWERIES_SUCCESS,
        payload: breweries
      });
    } catch (err) {
      dispatch({
        type: FETCH_BREWERIES_FAILED,
        payload: err
      });
    }
  };
};
