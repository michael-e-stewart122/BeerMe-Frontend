import env from '../env.js';

export default function getUsersFavoriteBeers(id) {
  return fetch(`${env.API_BASE_URL}/users/${id}/beers`);
}
