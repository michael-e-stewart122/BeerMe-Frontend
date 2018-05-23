import getBeersFromBrewery from '../../api/getBeersFromBrewery';
import env from '../../env';
export const FETCH_BREWERY_BEER_SUCCESS = 'FETCH_BREWERY_BEER_SUCCESS';
export const FETCH_BREWERY_BEER_FAILED = 'FETCH_BREWERY_BEER_FAILED';

const BASE_URL = env.API_BASE_URL;
export const fetchBreweryBeer = (id, history) => {
  return async dispatch => {
    try {
      // console.log('hello before response');
      let response = await getBeersFromBrewery(id);
      // console.log('hello......');
      let breweryBeers = await response.json();
      console.log('breweryBeers in actions..', breweryBeers);
      dispatch({
        type: FETCH_BREWERY_BEER_SUCCESS,
        payload: breweryBeers
        // breweryBeer
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
