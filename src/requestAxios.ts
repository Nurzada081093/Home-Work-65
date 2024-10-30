import axios from 'axios';

const requestAxios = axios.create({
  baseURL: 'https://nurzada-server-default-rtdb.europe-west1.firebasedatabase.app/',

});

export default requestAxios;