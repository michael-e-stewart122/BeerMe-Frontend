import getBrewery from '../../api/getBrewery';
import getBeersFromBrewery from '../../api/getBeersFromBrewery';
import env from '../../env';
export const FETCH_BREWERY_SUCCESS = 'FETCH_BREWERY_SUCCESS';
export const FETCH_BREWERY_FAILED = 'FETCH_BREWERY_FAILED';

const BASE_URL = env.default.API_BASE_URL;
export const fetchBrewery = (id, history) => {
  return async dispatch => {
    try {
      let response = await getBrewery(id);
      let brewery = await response.json();
      let breweryBeers = brewery.beers;
      dispatch({
        type: FETCH_BREWERY_SUCCESS,
        payload: {
          brewery,
          breweryBeers
        }
      });
      history.push(`/breweries/${id}`, { brewery, breweryBeers });
    } catch (err) {
      dispatch({
        type: FETCH_BREWERY_FAILED,
        payload: err
      });
    }
  };
};
