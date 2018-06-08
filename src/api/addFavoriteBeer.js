import env from '../env';

export default function addFavoriteBeer(user_id, beer_id) {
  console.log('beer_id', beer_id);
  return fetch(`${env.default}/users/${user_id}/beers`, {
    // mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ beer_id })
  });
}
