import axios from 'axios';

export const fetchWrapper = (endpoint, method) => {
  return axios.request({
    method,
    url: endpoint,
  });
};
