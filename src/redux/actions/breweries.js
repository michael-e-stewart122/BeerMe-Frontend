import env from '../../env';

export const FETCH_BREWERIES_SUCCESS = 'FETCH_BREWERIES_SUCCESS';
export const FETCH_BREWERIES_FAILED = 'FETCH_BREWERIES_FAILED';
export const FILTER_BREWERY = 'FILTER_BREWERY';

const BASE_URL = env.default;
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

export const filterBreweries = (str, type) => {
  return dispatch => {
    dispatch({
      type: FILTER_BREWERY,
      payload: { filterBreweries: str, type }
    });
  };
};
