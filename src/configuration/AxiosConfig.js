import axios from "axios";

export const axiosConfig = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

// Añadir un interceptor para incluir el token en cada solicitud
axiosConfig.interceptors.request.use(config => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers['Authorization'] = `${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});
