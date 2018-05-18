export const FETCH_BEERS_SUCCESS = 'FETCH_BEERS_SUCCESS';
export const FETCH_BEERS_FAILED = 'FETCH_BEERS_FAILED';

// export const CREATE_BEER_SUCCESS = 'CREATE_BEER_SUCCESS';
// export const CREATE_BEER_FAILED = 'CREATE_BEER_FAILED';
//
// export const INCREASE_VOTES_SUCCESS = 'INCREASE_VOTES_SUCCESS';
// export const INCREASE_VOTES_FAILED = 'INCREASE_VOTES_FAILED';
//
// export const DECREASE_VOTES_SUCCESS = 'DECREASE_VOTES_SUCCESS';
// export const DECREASE_VOTES_FAILED = 'DECREASE_VOTES_FAILED';
//
export const FILTER_BEER = 'FILTER_BEER';

const BASE_URL = 'http://localhost:8000';
export const fetchBeers = () => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/beers`);
      let beers = await response.json();
      dispatch({
        type: FETCH_BEERS_SUCCESS,
        payload: beers
      });
    } catch (err) {
      dispatch({
        type: FETCH_BEERS_FAILED,
        payload: err
      });
    }
  };
};
//
// export const createPost = newPost => {
//   return async dispatch => {
//     try {
//       let response = await fetch(`${BASE_URL}/beers`, {
//         method: 'BEER',
//         body: JSON.stringify(newPost),
//         headers: { 'Content-Type': 'application/json' }
//       })
//       let post = await response.json()
//       dispatch({
//         type: CREATE_BEER_SUCCESS,
//         payload: post
//       })
//       console.log(post)
//     } catch (err) {
//       dispatch({
//         type: CREATE_BEER_FAILED,
//         payload: err
//       })
//       console.log(err)
//     }
//   }
// }
//
// export const increaseVotes = id => {
//   return async dispatch => {
//     try {
//       let response = await fetch(`${BASE_URL}/posts/votes/increase/${id}`)
//       let post = await response.json()
//       console.log(post)
//       dispatch({
//         type: INCREASE_VOTES_SUCCESS,
//         payload: post
//       })
//     } catch (err) {
//       console.log(err)
//       dispatch({
//         type: INCREASE_VOTES_FAILED,
//         payload: err
//       })
//     }
//   }
// }
//
// export const decreaseVotes = id => {
//   return async dispatch => {
//     try {
//       let response = await fetch(`${BASE_URL}/posts/votes/decrease/${id}`)
//       let post = await response.json()
//       console.log(post)
//       dispatch({
//         type: DECREASE_VOTES_SUCCESS,
//         payload: post
//       })
//     } catch (err) {
//       console.log(err)
//       dispatch({
//         type: DECREASE_VOTES_FAILED,
//         payload: err
//       })
//     }
//   }
// }
//
export const filterBeers = (str, type) => {
  return dispatch => {
    dispatch({
      type: FILTER_BEER,
      payload: { filterBeers: str, type }
    });
  };
};
