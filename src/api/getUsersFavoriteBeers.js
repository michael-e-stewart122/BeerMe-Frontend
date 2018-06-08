import env from '../env.js';

export default function getUsersFavoriteBeers(id) {
  return fetch(`${env.default}/users/${id}/beers`);
}
