import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://kun.localhost:8000',
    withCredentials: true,
    headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
    }
});

export default apiClient;