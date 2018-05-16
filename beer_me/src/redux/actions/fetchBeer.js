import getBeer from '../../api/getBeer';

export const FETCH_BEER_SUCCESS = 'FETCH_BEER_SUCCESS';
export const FETCH_BEER_FAILED = 'FETCH_BEER_FAILED';

const BASE_URL = 'http://localhost:8000';

export const fetchBeer = (id, history) => {
  // console.log('history in actions', history);
  return async dispatch => {
    try {
      let response = await getBeer(id);
      let beer = await response.json();
      // console.log('beer', beer);
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
