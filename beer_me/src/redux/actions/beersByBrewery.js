import getBeersFromBrewery from '../../api/getBeersFromBrewery';

export const FETCH_BREWERY_BEER_SUCCESS = 'FETCH_BREWERY_BEER_SUCCESS';
export const FETCH_BREWERY_BEER_FAILED = 'FETCH_BREWERY_BEER_FAILED';

const BASE_URL = 'http://localhost:8000';
export const fetchBreweryBeer = (id, history) => {
  return async dispatch => {
    try {
      // console.log('hello before response');
      let response = await getBeersFromBrewery(id);
      // console.log('hello......');
      let breweryBeers = await response.json();
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
