import env from '../env.js';

export default function getBrewery(id) {
  return fetch(`${env.API_BASE_URL}/breweries/${id}`);
  // .then(response => {
  //   console.log(response, 'response!!!!');
  //   return response.json();
  // });
}
