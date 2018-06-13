import {
  FETCH_BEERS_SUCCESS,
  CREATE_BEER_SUCCESS,
  CREATE_REVIEW_SUCCESS
} from '../actions/beers'

const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_BEERS_SUCCESS:
      return [...state, ...payload]
    case CREATE_BEER_SUCCESS:
      return [...state, { ...payload }]
    case CREATE_REVIEW_SUCCESS:
      return payload
    default:
      return state
  }
}
