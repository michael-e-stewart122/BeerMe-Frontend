import env from '../env';

export default function deleteUser(id) {
  return fetch(`${env.API_BASE_URL}/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json());
}
