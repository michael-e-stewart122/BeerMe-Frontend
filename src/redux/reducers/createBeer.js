import { CREATE_BEER_SUCCESS } from '../actions/createBeer'

const initialState = { beers: [] }

export default (state = initialState, { type, payload }) => {
  console.log('fuck you you fuck')
  switch (type) {
    case CREATE_BEER_SUCCESS:
      console.log(payload)
      return {
        beers: [...state.beers, { ...payload }]
      }
    default:
      return state
  }
}
