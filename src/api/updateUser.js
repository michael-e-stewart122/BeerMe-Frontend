import env from '../env';

export default function createUser(id, attributes) {
  return fetch(`${env.default.API_BASE_URL}/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(attributes)
  }).then(response => response.json());
}
