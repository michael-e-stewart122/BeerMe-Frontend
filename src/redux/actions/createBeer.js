import createBeer from '../../api/createBeer'
export const CREATE_BEER_SUCCESS = 'CREATE_BEER_SUCCESS'

export const createNewBeer = (id, attributes, token) => {
  return async dispatch => {
    try {
      const beer = await createBeer(id, attributes, token)
      const beerJSON = await beer.json()

      dispatch({ type: CREATE_BEER_SUCCESS, payload: beerJSON })
    } catch (error) {
      console.log(error)
    }
  }
}
