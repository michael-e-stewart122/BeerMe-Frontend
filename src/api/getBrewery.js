import env from '../env.js';

export default function getBrewery(id) {
  return fetch(`${env.default.API_BASE_URL}/breweries/${id}`);
}
