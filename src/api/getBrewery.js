import env from '../env.js';

export default function getBrewery(id) {
  return fetch(`${env.default}/breweries/${id}`);
}
