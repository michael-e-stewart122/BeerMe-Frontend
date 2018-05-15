import { isEmpty } from '../utils/LangUtils.js';
import env from '../env';

export default async function getUser(id, { token }) {
  try {
    console.log('token', token);
    console.log('do we get here????? 555666');
    // const headers = isEmpty(token) ? {} : { Authorization: `Bearer ${token}` };
    const headers = { Authorization: `Bearer ${token}` };
    console.log(headers, 'headers');
    const response = await fetch(`${env.API_BASE_URL}/users/${id}`, {
      headers
    });
    const body = await response.json();
    if (response.status !== 200) throw new Error(body.message);
    return body;
  } catch (error) {
    if (error.message.startsWith('UserService.ERROR_')) throw error;
    throw new Error('UserService.ERROR_UNEXPECTED');
  }
}
