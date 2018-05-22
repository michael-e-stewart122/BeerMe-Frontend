import env from '../env';

export default function createBeer(id, attributes) {
  return fetch(`${env.API_BASE_URL}/beers/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(attributes)
  });
}
