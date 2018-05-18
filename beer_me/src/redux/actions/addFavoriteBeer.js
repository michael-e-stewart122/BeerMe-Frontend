import addFavoriteBeer from '../../api/addFavoriteBeer';

export const ADD_FAVORITE_SUCCESS = 'ADD_FAVORITE_SUCCESS';
export const ADD_FAVORITE_FAILED = 'ADD_FAVORITE_FAILED';

const BASE_URL = 'http://localhost:8000';
export const addFavorite = (user_id, beer_id) => {
  return async dispatch => {
    try {
      let response = await addFavoriteBeer(user_id, beer_id);
      let addBeer = await response.json();
      dispatch({
        type: ADD_FAVORITE_SUCCESS,
        payload: addBeer
      });
      // history.push(`/breweries/${id}`, userBeers);
    } catch (err) {
      dispatch({
        type: ADD_FAVORITE_FAILED,
        payload: err
      });
    }
  };
};
