import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.40.109:3333', // IP da máquina do usuário
});

export default api;
