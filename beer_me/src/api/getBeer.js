import env from '../env.js';

export default function getBeer(id) {
  return fetch(`${env.API_BASE_URL}/beers/${id}`);
}
