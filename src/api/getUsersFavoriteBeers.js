import env from '../env.js';

export default function getUsersFavoriteBeers(id) {
  return fetch(`${env.default.API_BASE_URL}/users/${id}/beers`);
}
