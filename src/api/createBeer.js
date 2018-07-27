import env from '../env'

export default function createBeer(id, attributes, token) {
  return fetch(`${env.default}/beers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(attributes)
  })
}
