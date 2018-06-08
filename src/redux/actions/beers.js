import env from '../../env';

export const FETCH_BEERS_SUCCESS = 'FETCH_BEERS_SUCCESS';
export const FETCH_BEERS_FAILED = 'FETCH_BEERS_FAILED';
export const FILTER_BEER = 'FILTER_BEER';

const BASE_URL = env.REACT_APP_API_BASE_URL;
export const fetchBeers = () => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/beers`);
      let beers = await response.json();

      dispatch({
        type: FETCH_BEERS_SUCCESS,
        payload: beers
      });
    } catch (err) {
      dispatch({
        type: FETCH_BEERS_FAILED,
        payload: err
      });
    }
  };
};

export const filterBeers = (str, type) => {
  return dispatch => {
    dispatch({
      type: FILTER_BEER,
      payload: { filterBeers: str, type }
    });
  };
};
