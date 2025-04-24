import axios from 'axios';

// Base URL for the backend
const api = axios.create({
  baseURL: 'http://localhost:5000', // Update to your backend URL
});

export default api;
