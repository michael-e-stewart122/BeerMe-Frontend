import env from '../env.js';

export default function getBeer(id) {
  return fetch(`${env.default}/beers/${id}`);
}
