import env from '../../env'
import createBeer from '../../api/createBeer'
import createReview from '../../api/createReview'

export const CREATE_REVIEW_SUCCESS = 'CREATE_REVIEW_SUCCESS'
export const CREATE_REVIEW_FAILED = 'CREATE_REVIEW_FAILED'

export const CREATE_BEER_SUCCESS = 'CREATE_BEER_SUCCESS'

export const FETCH_BEERS_SUCCESS = 'FETCH_BEERS_SUCCESS'
export const FETCH_BEERS_FAILED = 'FETCH_BEERS_FAILED'
export const FILTER_BEER = 'FILTER_BEER'

const BASE_URL = env.default
export const fetchBeers = () => {
  return async dispatch => {
    console.log(env.default)
    console.log('HELLO THERE :-)')
    console.log(BASE_URL)
    console.log(process.env)
    try {
      let response = await fetch(`${BASE_URL}/beers`)
      let beers = await response.json()

      dispatch({
        type: FETCH_BEERS_SUCCESS,
        payload: beers
      })
    } catch (err) {
      dispatch({
        type: FETCH_BEERS_FAILED,
        payload: err
      })
    }
  }
}

export const filterBeers = (str, type) => {
  return dispatch => {
    dispatch({
      type: FILTER_BEER,
      payload: { filterBeers: str, type }
    })
  }
}

export const createNewBeer = (id, attributes, token) => {
  return async dispatch => {
    try {
      const beer = await createBeer(id, attributes, token)
      const beerJSON = await beer.json()
      // console.log(beerJSON)
      dispatch({ type: CREATE_BEER_SUCCESS, payload: beerJSON })
    } catch (error) {
      console.log(error)
    }
  }
}

export const createNewReview = (attributes, token) => {
  return async dispatch => {
    try {
      const response = await createReview(attributes, token)
      const review = await response.json()
      dispatch({ type: CREATE_REVIEW_SUCCESS, payload: review })
    } catch (error) {
      dispatch({ type: CREATE_REVIEW_FAILED, payload: error })
      console.log(error)
    }
  }
}
