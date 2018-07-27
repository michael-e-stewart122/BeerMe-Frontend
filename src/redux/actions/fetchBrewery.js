import getBrewery from '../../api/getBrewery'
export const FETCH_BREWERY_SUCCESS = 'FETCH_BREWERY_SUCCESS'
export const FETCH_BREWERY_FAILED = 'FETCH_BREWERY_FAILED'

export const fetchBrewery = (id, history) => {
  return async dispatch => {
    try {
      let response = await getBrewery(id)
      let brewery = await response.json()
      let breweryBeers = brewery.beers
      dispatch({
        type: FETCH_BREWERY_SUCCESS,
        payload: {
          brewery,
          breweryBeers
        }
      })
      history.push(`/breweries/${id}`, { brewery, breweryBeers })
    } catch (err) {
      dispatch({
        type: FETCH_BREWERY_FAILED,
        payload: err
      })
    }
  }
}
