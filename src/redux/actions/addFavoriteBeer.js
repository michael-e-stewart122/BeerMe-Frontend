import addFavoriteBeer from '../../api/addFavoriteBeer';
import env from '../../env';
export const ADD_FAVORITE_SUCCESS = 'ADD_FAVORITE_SUCCESS';
export const ADD_FAVORITE_FAILED = 'ADD_FAVORITE_FAILED';

export const addFavorite = (user_id, beer_id, history) => {
  return async dispatch => {
    try {
      let response = await addFavoriteBeer(user_id, beer_id);
      let addBeer = await response.json();
      dispatch({
        type: ADD_FAVORITE_SUCCESS,
        payload: addBeer
      });
      history.push(`/beers`, addBeer);
    } catch (err) {
      dispatch({
        type: ADD_FAVORITE_FAILED,
        payload: err
      });
    }
  };
};
