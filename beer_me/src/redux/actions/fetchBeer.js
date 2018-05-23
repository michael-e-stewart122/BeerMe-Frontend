import getBeer from '../../api/getBeer';

export const FETCH_BEER_SUCCESS = 'FETCH_BEER_SUCCESS';
export const FETCH_BEER_FAILED = 'FETCH_BEER_FAILED';

const BASE_URL = 'http://localhost:8000';

export const fetchBeer = (id, history) => {
  return async dispatch => {
    try {
      let response = await getBeer(id);
      let beer = await response.json();

      dispatch({
        type: FETCH_BEER_SUCCESS,
        payload: beer
      });
      history.push(`/beers/${id}`, beer);
    } catch (err) {
      dispatch({
        type: FETCH_BEER_FAILED,
        payload: err
      });
    }
  };
};
