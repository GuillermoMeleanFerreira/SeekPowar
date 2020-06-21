import axios from 'axios';
const api = axios.create({
    baseURL: 'https://www.ucontrol.pt/talhodopovodev/api'
});

export default api;