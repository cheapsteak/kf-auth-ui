import axios from 'axios';
const API_ROOT = `http://10.11.7.24:8081`;
const ajax = axios.create({
  baseURL: API_ROOT,
});

export default ajax;
