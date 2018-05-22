import createBeer from '../../api/createBeer';

export const CREATE_BEER_SUCCESS = 'CREATE_BEER_SUCCESS';

export const createNewBeer = (id, attributes) => {
  return async (dispatch, getState) => {
    try {
      const beer = await createBeer(id, attributes);
      dispatch({ type: 'CREATE_BEER_SUCCESS', beer });

      return beer;
    } catch (error) {
      console.log(error);
    }
  };
};
