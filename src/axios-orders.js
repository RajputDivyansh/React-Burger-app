import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-9f8da.firebaseio.com/'
});

export default instance;