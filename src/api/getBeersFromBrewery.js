import env from '../env.js';

export default function getBeersFromBrewery(id) {
  return fetch(`${env.default}/breweries/${id}/beers`);
}
