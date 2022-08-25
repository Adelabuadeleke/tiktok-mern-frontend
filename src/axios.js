import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tiktok-backend-kam.herokuapp.com/",
});

export default instance;