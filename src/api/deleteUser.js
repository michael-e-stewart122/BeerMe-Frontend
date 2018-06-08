import env from '../env';

export default function deleteUser(id) {
  return fetch(`${env.default.API_BASE_URL}/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json());
}
