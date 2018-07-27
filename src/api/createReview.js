import env from '../env'

export default function createReview(attributes, token) {
  return fetch(`${env.default}/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(attributes)
  })
}
