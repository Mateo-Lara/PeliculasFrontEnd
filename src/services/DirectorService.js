import { axiosConfig } from '../configuration/AxiosConfig';

// Obtener el token del almacenamiento local o donde lo guardes
const getAuthToken = () => localStorage.getItem('access_token');
console.log(localStorage.getItem('access_token'));

// Obtener todos los directores
const obtenerDirector = () => {
    return axiosConfig.get('director/?estado=true', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${getAuthToken()}`  // Agrega el token aquí
        }
    });
}

// Crear un director
const crearDirector = (data) => {
    return axiosConfig.post('director', data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${getAuthToken()}`  // Agrega el token aquí
        }
    });
}

// Editar un director
const editarDirector = (directorId, data) => {
    return axiosConfig.put(`director/${directorId}`, data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${getAuthToken()}`  // Agrega el token aquí
        }
    });
}

// Borrar un director
const borrarDirector = (directorId) => {
    return axiosConfig.delete(`director/${directorId}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${getAuthToken()}`  // Agrega el token aquí
        }
    });
}

// Obtener un director por ID
const obtenerDirectorporID = (directorId) => {
    return axiosConfig.get(`director/${directorId}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${getAuthToken()}`  // Agrega el token aquí
        }
    });
}

export {
    obtenerDirector,
    crearDirector,
    editarDirector,
    obtenerDirectorporID,
    borrarDirector
}
