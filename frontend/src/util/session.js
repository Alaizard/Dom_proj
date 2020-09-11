import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const register = (payload) => {
  return axios.post('/api/users/signup', payload);
};

export const login = (payload) => {
  return axios.post('/api/users/login', payload);
};