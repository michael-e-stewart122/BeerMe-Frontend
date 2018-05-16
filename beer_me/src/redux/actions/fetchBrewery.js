import getBrewery from '../../api/getBrewery';

export const FETCH_BREWERY_SUCCESS = 'FETCH_BREWERY_SUCCESS';
export const FETCH_BREWERY_FAILED = 'FETCH_BREWERY_FAILED';

const BASE_URL = 'http://localhost:8000';
export const fetchBrewery = (id, history) => {
  return async dispatch => {
    try {
      let response = await getBrewery(id);
      let brewery = await response.json();
      dispatch({
        type: FETCH_BREWERY_SUCCESS,
        payload: brewery
      });
      history.push(`/breweries/${id}`, brewery);
    } catch (err) {
      dispatch({
        type: FETCH_BREWERY_FAILED,
        payload: err
      });
    }
  };
};
