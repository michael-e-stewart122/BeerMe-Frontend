import getUsersFavoriteBeers from '../../api/getUsersFavoriteBeers';

export const FETCH_USERS_FAVORITE_BEERS_SUCCESS =
  'FETCH_USERS_FAVORITE_BEERS_SUCCESS';
export const FETCH_USERS_FAVORITE_BEERS_FAILED =
  'FETCH_USERS_FAVORITE_BEERS_FAILED';

const BASE_URL = 'http://localhost:8000';
export const fetchUsersFavoriteBeers = (id, history) => {
  return async dispatch => {
    try {
      let response = await getUsersFavoriteBeers(id);
      let userBeers = await response.json();
      dispatch({
        type: FETCH_USERS_FAVORITE_BEERS_SUCCESS,
        payload: userBeers
      });
      // history.push(`/breweries/${id}`, userBeers);
    } catch (err) {
      dispatch({
        type: FETCH_USERS_FAVORITE_BEERS_FAILED,
        payload: err
      });
    }
  };
};
