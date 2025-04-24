import axios from 'axios';

// Base URL for the backend
const api = axios.create({
  baseURL: 'https://dental-checkup-backend.onrender.com', // Update to your backend URL
});

export default api;
