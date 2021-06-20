import axios from 'axios';
import SseService from '../service/SseService';

const required = param => {
  throw new Error(`${param} are required`);
};

export default {

  login({ email, password } = required('credentials')) {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    return axios.post('api/login', new URLSearchParams(formData))
      .then(response => {
        SseService.initConnection();
        return response;
      })
      .catch(err => console.log(err));
  },

  authCheck() {
    const status = axios.get('/api/login/auth-check')
      .then(r => r.status)
      console.log(status)
    if (status === 200)
      return true;
    else return false;
  },

  logout() {
    
    axios.get('/api/logout')
      .then()
      .catch(e => console.log(e))
  }
}