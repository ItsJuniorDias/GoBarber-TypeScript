import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.99.1:3333',
  headers: {
    'Content-type': 'application/json',
  },
});

export default api;
