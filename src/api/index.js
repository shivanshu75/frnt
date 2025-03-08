// src/api/index.js
import axios from 'axios';

axios.defaults.withCredentials = true;
const API = axios.create({ baseURL: import.meta.env.VITE_API_URL });

export default API;