import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://kun.aiku.devel',
    withCredentials: true,
    headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
    }
});

export default apiClient;