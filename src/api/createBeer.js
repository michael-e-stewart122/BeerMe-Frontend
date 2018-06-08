import env from '../env';

export default function createBeer(id, attributes) {
  return fetch(`${env.default}/beers/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(attributes)
  });
}
