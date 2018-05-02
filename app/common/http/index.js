import axios from 'axios';
import {
    apiUrl
} from '../config'

axios.defaults.timeout = 5000;
axios.defaults.baseURL = apiUrl;

axios.interceptors.request.use(
    config => {
        if (__DEV__) console.log('Axios发起请求', config);
        return config
    },
    error => {
        if (__DEV__) console.log('Axios发起请求失败', config);
        return Promise.reject('Axios发起请求失败', error);
    }
);

axios.interceptors.response.use(
    response => {
        if (__DEV__) console.log("Axios响应成功：", response);
        return response;
    },
    error => {
        if (__DEV__) console.log('Axios响应失败', error);
        return Promise.reject(error);
    }
);

export default axios;