import getBeersFromBrewery from '../../api/getBeersFromBrewery';
import env from '../../env';
export const FETCH_BREWERY_BEER_SUCCESS = 'FETCH_BREWERY_BEER_SUCCESS';
export const FETCH_BREWERY_BEER_FAILED = 'FETCH_BREWERY_BEER_FAILED';

const BASE_URL = env.default;
export const fetchBreweryBeer = (id, history) => {
  return async dispatch => {
    try {
      let response = await getBeersFromBrewery(id);
      let breweryBeers = await response.json();
      dispatch({
        type: FETCH_BREWERY_BEER_SUCCESS,
        payload: breweryBeers
      });
      history.push(`/breweries/${id}`, breweryBeers);
    } catch (err) {
      dispatch({
        type: FETCH_BREWERY_BEER_FAILED,
        payload: err
      });
    }
  };
};
